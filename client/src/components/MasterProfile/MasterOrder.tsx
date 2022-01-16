import axios from 'axios';
import React, { useEffect, useState } from 'react'
import MasterItem from './MasterItem';

type Order = { id: number }



export default function MasterOrder(order: Order) {
  const { id } = order
  const [orders, setOrders] = useState({comemnt:""});

  useEffect(() => {
    (async function () {
      const data: any = await axios.get(`http://localhost:5000/masterprofilecomponents/${id}`);
      console.log(data.data.feedback)
      setOrders(data.data.feedback)
      console.log(`orders`, orders)
    }());
  }, []);

  // const cards = orders.map((order) => {
  //   return <MasterItem order={order}/>
  // });

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>
            <th>
              {/* <div><img src='https://storage.theoryandpractice.ru/tnp/uploads/image_unit/000/156/586/image/base_87716f252d.jpg'></img></div> */}
              <div>{}</div>
            </th>
          </td>
          <td>Otto</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
        </tr>
      </tbody>

    </table>
  )
}
