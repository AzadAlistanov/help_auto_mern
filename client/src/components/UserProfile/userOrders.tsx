import axios from 'axios';
import React, { useEffect, useState } from 'react'
import UserItem from './UserItem';
type Order = {id:number}

export default function UserOrder(order:Order) {
  
  const {id} = order  
  const [orders, setOrders] = useState([]);
  
  useEffect(() => {
    (async function () {
      const { data: { ordersWithUsers } } = await axios.get(`http://localhost:5000/userprofilecomponents/${id}`);
      setOrders(ordersWithUsers);
      
    }());
  }, []);

  const cards = orders.map((order) => {
    return <UserItem order={order}/>
  });

  
    return (


      <div className="container">
      { cards }
    </div>

    //   <div className="d-inline-block">
    //     <section className="mx-auto my-5" style={{ maxWidth: '23rem' }}>
  
    //       <div className="card">
    //       <div className="card-body d-flex flex-row">
    //         <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-8.jpg" className="rounded-circle me-3"
    //           height="50px"
    //           width="50px" alt="avatar"/>
    //       <div>
    //       <h5 className="card-title font-weight-bold mb-2">{ `Заказ ` }</h5>
    //       <p className="card-text"><i className="far fa-clock pe-2"></i>{ }</p>
    //       <p>{ `Заказчик: ` }</p>
    //       </div>
    //       </div>
    //       <div className="bg-image hover-overlay ripple rounded-0" data-mdb-ripple-color="light">
    //         <img className="img-fluid" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/%D0%9C%D0%B5%D0%BB%D0%B8%D0%BE%D1%80%D0%B0%D1%82%D0%B8%D0%B2%D0%BD%D0%B0%D1%8F_%D1%82%D0%B5%D1%85%D0%BF%D0%BE%D0%BC%D0%BE%D1%89%D1%8C_%D0%A1%D0%BE%D0%BA%D0%BE%D0%BB_%D0%B3%D0%BE%D1%80%D0%B01.jpg/1200px-%D0%9C%D0%B5%D0%BB%D0%B8%D0%BE%D1%80%D0%B0%D1%82%D0%B8%D0%B2%D0%BD%D0%B0%D1%8F_%D1%82%D0%B5%D1%85%D0%BF%D0%BE%D0%BC%D0%BE%D1%89%D1%8C_%D0%A1%D0%BE%D0%BA%D0%BE%D0%BB_%D0%B3%D0%BE%D1%80%D0%B01.jpg"
    //           alt="Card image cap"/>
    //         <a href="#!">
    //           <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
    //         </a>
    //       </div>
    //       <div className="card-body">
    //       <p className="card-text" id="collapseContent">
    //         Помогите, {}
    //       </p>
    //       <div className="d-flex justify-content-between">
    //         <a className="btn btn-info p-md-1 my-1" data-mdb-toggle="collapse" href="#collapseContent"
    //           role="button" aria-expanded="false" aria-controls="collapseContent">Откликнуться</a>
    //       <div>
    //         <i className="fas fa-share-alt text-muted p-md-1 my-1 me-2" data-mdb-toggle="tooltip"
    //           data-mdb-placement="top" title="Share this post"></i>
    //         <i className="fas fa-heart text-muted p-md-1 my-1 me-0" data-mdb-toggle="tooltip"
    //           data-mdb-placement="top"
    //           title="I like it"></i>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
  
    // </section>
    // </div>
  );
  
}
