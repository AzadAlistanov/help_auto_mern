import axios from 'axios';
import React, { useEffect } from 'react'
type Order = {id:number}

export default function UserOrder(order:Order) {
  const {id} = order
  console.log(id)
  
  useEffect(() => {
    (async function () {
      const { data } = await axios.get(`http://localhost:5000/userprofilecomponents/${id}`);
     console.log()
    }());
  }, []);



  return (
    <div>
      <h1>{id}</h1>
    </div>
  )
}
