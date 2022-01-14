import React from 'react'
type Props = {id:number}

export default function UserOrder(props:Props) {
  const {id} = props
  console.log(id)
  return (
    <div>
      <h1>{id}</h1>
    </div>
  )
}
