import React from 'react';
import { Link } from 'react-router-dom';
type Order = {
  masterId: string,
  orderName: string
  master: string
  photo: any
}

type Props = {
  order: Order
}

export default function UserItem(props: Props) {
  console.log(`123`, 123)
  const { photo, orderName, master, masterId } = props.order;
  return (
    <li className='order-item'>
      <small className="">Контора оказавшая услуги:</small>
      {master ?
        <div>
          <Link to={`/master/${masterId}`} className="" > <button type="button" className="btn btn-outline-warning">{master}</button></Link>
        </div>
        :
        <h5 className="" > мастер не выбран</h5>
      }
      {photo ?
      
        <img style={{width: "120px", height: "120px"}} src={`http://localhost:5000/${photo}`} className="wpx-100 img-round mgb-20" title="" alt="" data-edit="false" data-editor="field" data-field="src[Image Path]; title[Image Title]; alt[Image Alternate Text]" /> :
        <img style={{width: "120px", height: "120px"}} src={`http://localhost:5000/images/masterimg.jpg`} className="wpx-100 img-round mgb-20" title="" alt="" data-edit="false" data-editor="field" data-field="src[Image Path]; title[Image Title]; alt[Image Alternate Text]" />
      }
      <br />
      <small className="" >Вид услги:</small>
      <p className="" >{orderName}</p>
    </li>
  );
}
