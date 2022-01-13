import axios from "axios";
import { useEffect } from "react";
import { Link } from 'react-router-dom';

export default function ServiceList() {

  const getServices = async () => {
    axios.get('http://localhost:5000/servicelist')
    .then((res) => console.log(res.data))}
  
  useEffect (() => {
    getServices()
  }, [])

  return (
    <div>
      ServiceList
    </div>
  );
}
