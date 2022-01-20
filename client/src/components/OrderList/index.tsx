import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import OrderItem from "../OrderItem";

export default function OrderList() {
  const { id } = useParams();
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    (async function () {
    const { data: { ordersWithUsers } } = await axios.get(`http://localhost:5000/orderlist/${id}`);
    setOrders(ordersWithUsers.reverse());
    
    }());
  }, []);

  const cards = orders.map((order) => {
    return <OrderItem order={order} serviceId={id}/>
  });

  return (
    <div className="container">
      { cards }
    </div>
  );
}
