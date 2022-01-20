import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { State } from '../../typeTS/initialState';

type Order = {
  orderNumber: number
  userId: number
  nickName: string
  orderName: string
  status: boolean
  date: string
  order_id: number
  location: string
  photo:any
}

type Props = {
  order: Order
  serviceId: string | undefined
}

const OrderItem = ({ order, serviceId }: Props) => {
  const { authMaster: { masterId }, authUser } = useSelector((state: State) => state);
  const { orderNumber, userId, nickName, orderName, status, date, location } = order;
  const [user, setUser] = useState({nickName: '', photo: ''})
  const [orderStatus, setOrderStatus] = useState(status);
  const onRespond = async () => {
    const data = await axios
      .get(`${process.env.REACT_APP_BACKEND_URL}servicelist/order/${orderNumber}/${userId}/${serviceId}/${masterId}`);
    data && setOrderStatus(false);
  }

  useEffect(() => {
    (async function () {
      const { data } = await axios.get(`http://localhost:5000/userprofile/${userId}`);
      setUser(data.user[0])
    }());
  }, []);


  return (
    <div className="d-inline-block mx-2">
      <section className="mx-auto my-5">
        <div className="card-order">
          <div className="card-body d-flex flex-row">
            <div>
              <h5 className="card-title font-weight-bold mb-2">{ `Заказ ${ orderNumber } ` }</h5>
              <h5 
                style={{width:"310px", height: '100px',  overflowWrap: 'anywhere'}} 
                className="card-title font-weight-bold mb-2 mt-2"><i className="fas fa-map-marker-alt"></i> { location }</h5>
              <p className="card-text"><i className="far fa-clock pe-2"></i>{new Date(date).toLocaleString()}</p>
              <p>{ `Заказчик: "${nickName}"` }</p>

            <div className="text-center" data-mdb-ripple-color="light">
              <img 
                className="image-profile text-center"
                style={{ width: '150px', height: '150px'}}
                src={`http://localhost:5000/${user.photo}`}/>
            </div>

            <div className="card-body">
              <p 
                className="order-name">
                Помогите, {orderName}
              </p>
              <div className="d-flex justify-content-between">
              {masterId && (orderStatus
              ? <div className="btn btn-info p-md-1 my-1 p-2" data-mdb-toggle="collapse"
                    onClick={onRespond}
                    role="button" aria-expanded="false" aria-controls="collapseContent">Откликнуться <i className="fas fa-truck"></i></div>
                : <p className="text-success">Выполняется...</p>)
              }
              {authUser.userId && (orderStatus
              ? <p className="p-md-1 my-1 text-warning" data-mdb-toggle="collapse"
                    role="button" aria-expanded="false" aria-controls="collapseContent">Ожидание приема заказа...</p>
                : <p className="text-success">Выполняется...</p>)
              }
            </div>

            </div>


          </div>
        </div>
      </div>
    </section>
  </div>
);
}

export default OrderItem;
