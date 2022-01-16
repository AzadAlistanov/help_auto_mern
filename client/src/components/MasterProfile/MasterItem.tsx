import React from 'react'
type Order = {
  orderId: number
  brand: string
  model: string
  nickName: string
  orderName: string
  status: boolean
  date: string
  master: string
}

type Props = {
  order: Order
}


export default function MasterItem(props: Props) {
  const { orderId, brand, model, nickName, orderName, status, date, master } = props.order;
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
              <div>
                {/* <img src='https://storage.theoryandpractice.ru/tnp/uploads/image_unit/000/156/586/image/base_87716f252d.jpg'></img> */}
              </div>
              <div>2</div>
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

  );
}
