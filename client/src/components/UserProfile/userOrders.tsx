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

  );
  
}
