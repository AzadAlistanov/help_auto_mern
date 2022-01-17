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
    <li>
      <h5 className="font-cond mgb-5 fg-text-d fs-130" contentEditable="false">{nickName}</h5>
      <img src={`http://localhost:5000/${photo}`} className="wpx-100 img-round mgb-20" title="" alt="" data-edit="false" data-editor="field" data-field="src[Image Path]; title[Image Title]; alt[Image Alternate Text]" />
      <p className="fs-110 font-cond-l" contentEditable={"false"}>" {feedback}"</p>
    </li>
  );
}
