import axios from 'axios';

import React, { useEffect, useState } from 'react'
import "../../style.css"
import MasterItem from './MasterItem';


type Order = { id: any }



export default function MasterOrder(order: Order) {
  const { id } = order
  const [check, setCheck] = useState(true)
  // console.log(`id`, id.master_id)
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    (async function () {
      const data: any = await axios.get(`http://localhost:5000/masterprofilecomponents/${id.master_id}`);
      setOrders(data.data.feedbackWithUser.reverse())
      console.log(`orders`, orders)
    }());
  }, [id]);

  let cards
  check ?
    cards = orders.slice(0, 3).map((order, i) => {
      return <MasterItem key={i} order={order} />
    }) : cards = orders.map((order, i) => {
      return <MasterItem key={i} order={order} />
    })

  function onTap() {
    setCheck(!check)
  }

  return (
    <div className="order_inner">
        {check ?
          <h3 className="order-show" onClick={onTap}>Показать все комментарии</h3> :
          <h3 className="order-show" onClick={onTap}>Показать последние 3</h3>
        }
      <ul className="order-list">
        {cards}
      </ul>
    </div>
  );
}
