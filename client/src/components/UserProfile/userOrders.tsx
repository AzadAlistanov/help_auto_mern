import axios from 'axios';
import React, { useEffect, useState } from 'react'
import UserItem from './UserItem';
type Order = { id: number }

export default function UserOrder(order: Order) {
  console.log(`456`, 456)
  const { id } = order
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    (async function () {
      const { data: { ordersWithUsers } } = await axios.get(`http://localhost:5000/userprofilecomponents/${id}`);
      setOrders(ordersWithUsers); 
      console.log(`orders`, orders)    
    }());
  }, []);

  const cards = orders.map((order) => {
    return <UserItem order={order} />
  });


  return (
    // <div className="container">
    //   {cards}
    // </div>
    <div className="container">
    <div className="mgb-40 padb-30 auto-invert line-b-4 align-center">
      <h3 className="font-cond-l fg-accent lts-md mgb-10" contentEditable="false">Мои заказы</h3>
      <h1 className="font-cond-b fg-text-d lts-md fs-300 fs-300-xs no-mg" contentEditable="false"></h1>
    </div>
    <ul className="hash-list cols-3 cols-1-xs pad-30-all align-center text-sm">
      {cards}
    </ul>
  </div>
  );

}
