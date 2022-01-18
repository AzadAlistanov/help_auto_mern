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
  const { photo, orderName,  master, masterId } = props.order;
  console.log(`photo`, photo)
 return (
  <li>
    <small className="font-cond case-u lts-sm fs-80 fg-text-l" contentEditable="false">Контора оказавшая услуги:</small>
  {master ? 
  <Link to={`/master/${masterId}`} className="font-cond mgb-5 fg-text-d fs-130" contentEditable="false"> {master}</Link> :
  <h5 className="font-cond mgb-5 fg-text-d fs-130" contentEditable="false"> мастер не выбран</h5>
  }
  {photo ? 
  <img src={`http://localhost:5000/${photo}`} className="wpx-100 img-round mgb-20" title="" alt="" data-edit="false" data-editor="field" data-field="src[Image Path]; title[Image Title]; alt[Image Alternate Text]" /> :
  <img src={`http://localhost:5000/images/masterimg.jpg`} className="wpx-100 img-round mgb-20" title="" alt="" data-edit="false" data-editor="field" data-field="src[Image Path]; title[Image Title]; alt[Image Alternate Text]" />
  }
  <br/>
  <small className="font-cond case-u lts-sm fs-80 fg-text-l" contentEditable="false">Вид услги:</small>
  <p className="fs-110 font-cond-l" contentEditable={"false"}>{orderName}</p>
</li>
);
}
