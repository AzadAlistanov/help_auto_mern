import axios from 'axios';

import React, { useEffect, useState } from 'react'
import "../../style.css"
import MasterItem from './MasterItem';


type Order = { id: number }



export default function MasterOrder(order: Order) {
  const { id } = order
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    (async function () {
      const data: any = await axios.get(`http://localhost:5000/masterprofilecomponents/${id}`);
      // console.log(data)
      setOrders(data.data.feedbackWithUser)
      // console.log(`orders`, orders)
    }());
  }, []);

  const cards = orders.map((order) => {
    return <MasterItem order={order} />
  });

  return (
    <div className="container">
      <div className="mgb-40 padb-30 auto-invert line-b-4 align-center">
        <h3 className="font-cond-l fg-accent lts-md mgb-10" contentEditable="false">Отзывы наших клиентов</h3>
        <h1 className="font-cond-b fg-text-d lts-md fs-300 fs-300-xs no-mg" contentEditable="false"></h1>
      </div>
      <ul className="hash-list cols-3 cols-1-xs pad-30-all align-center text-sm">
        {cards}
      </ul>
    </div>
  )
}