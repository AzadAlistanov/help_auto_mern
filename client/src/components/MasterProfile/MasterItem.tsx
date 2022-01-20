import React from 'react'
type Order = {
  feedback: number
  nickName: string
  photo: string

}

type Props = {
  order: Order
}


export default function MasterItem(props: Props) {
  const { nickName, feedback, photo } = props.order;  
  return (
    <li className='order-item'>
      <h5 className="" >{nickName}</h5>
      <img style={{width: "120px", height: "120px"}} src={`http://localhost:5000/${photo}`} className="wpx-100 img-round mgb-20" title="" alt="" data-edit="false" data-editor="field" data-field="src[Image Path]; title[Image Title]; alt[Image Alternate Text]" />
      <p className="" >"{feedback}"</p>
    </li>
  );
}
