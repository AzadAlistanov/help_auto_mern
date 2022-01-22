import axios from 'axios';
import React, { useEffect, useState } from 'react'
import UserItem from './UserItem';
type Order = { id: number }

export default function UserOrder(order: Order) {
  const [check, setCheck] = useState(true)
  console.log(`456`, 456)
  const { id } = order
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    (async function () {
      const { data: { ordersWithUsers } } = await axios.get(`http://localhost:5000/userprofilecomponents/${id}`);
      setOrders(ordersWithUsers.reverse());
    }());
  }, []);

  function onTap() {
    setCheck(!check)
  }
  let cards
  check ?
    cards = orders.slice(0, 3).map((order, i) => {
      return <UserItem key={i} order={order} />
    }) : cards = orders.map((order, i) => {
      return <UserItem key={i} order={order} />
    })



  return (
    <div className="order_inner">
        {check ?
          <h3 className="order-show" onClick={onTap}>Показать все заказы</h3> :
          <h3 className="order-show" onClick={onTap}>Показать последние 3</h3>
        }

      <ul className="order-list">
        {cards}
      </ul>
    </div>
  );

}
