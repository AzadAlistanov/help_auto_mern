import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from "axios";

// export interface ServiceItems {
//   name: string;
// }

export default function ServiceList() {
  const [service, setService] = useState([]);

  useEffect(() => {
    (async function() {
      const { data } = await axios.get('http://localhost:5000/servicelist');
      setService(data);
    }());
  }, []);

  const view = service.map(({ name, id }) => {
    return <
      Link
      to={`/servicelist/orderslist/${id}`}
      className="col m-3 p-5 bg-secondary rounded-3 d-inline-block text-light text-decoration-none text-center fs-6"
      style={{width: '200px', height: '200px'}}
    >{name}</Link>
  });

  return (
    <div className="container">
      <div className="mb-4 p-4">
        <button className="btn btn-info">Add order</button>
      </div>
      {view}
    </div>
  );
}
