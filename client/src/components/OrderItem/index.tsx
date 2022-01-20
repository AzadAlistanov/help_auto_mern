import React, { useState } from 'react';
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
  const { orderNumber, userId, nickName, orderName, status, date, location, photo } = order;
  console.log('photo', photo);
  const [orderStatus, setOrderStatus] = useState(status);
  const onRespond = async () => {
    const data = await axios
      .get(`${process.env.REACT_APP_BACKEND_URL}servicelist/order/${orderNumber}/${userId}/${serviceId}/${masterId}`);
    data && setOrderStatus(false);
  }

  return (
    <div className="d-inline-block mx-2" style={{ width:'250px' }}>
      <section className="mx-auto my-5" style={{ maxWidth: '23rem' }}>

        <div className="card">
          <div className="card-body d-flex flex-row">
          <div>
          <h5 className="card-title font-weight-bold mb-2">{ `Заказ ${ orderNumber } ` }</h5>
          <h5 className="card-title font-weight-bold mb-2"><i className="fas fa-map-marker-alt"></i> { location }</h5>
          <p className="card-text"><i className="far fa-clock pe-2"></i>{new Date(date).toLocaleString()}</p>
          <p>{ `Заказчик: ${nickName}` }</p>
          </div>
          </div>
          <div style={{width:"200px", height:"200px"}} className="bg-image hover-overlay ripple rounded-0 d-flex align-items-sm-center rounded-lg " data-mdb-ripple-color="light">
            <img className="img-fluid rounded-lg"   src={`http://localhost:5000/${photo}`}
              alt="Card image cap"/>
            <a href="#!">
              <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
            </a>
          </div>
          <div className="card-body">
          <p className="card-text" id="collapseContent">
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

    </section>
  </div>
);
}

export default OrderItem;
