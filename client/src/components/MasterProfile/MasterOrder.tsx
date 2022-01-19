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
      setOrders(data.data.feedbackWithUser)
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
    <div className="container">
      <div className="mgb-40 padb-30 auto-invert line-b-4 align-center">

        {check ?
          <h3 className="font-cond-l fg-accent lts-md mgb-10" onClick={onTap}>показать все заказы</h3> :
          <h3 className="font-cond-l fg-accent lts-md mgb-10" onClick={onTap}>показать последние 3</h3>
        }
        <h1 className="font-cond-b fg-text-d lts-md fs-300 fs-300-xs no-mg" ></h1>
      </div>
      <ul className="hash-list cols-3 cols-1-xs pad-30-all align-center text-sm">
        {cards}
      </ul>
    </div>
  );
}
