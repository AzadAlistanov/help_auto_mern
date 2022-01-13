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

  const view = service.map(({ name }) => {
    return <
      Link
      to={`/servicelist/orderslist/${name}`}
      className="col m-3 p-5 bg-secondary rounded-3 d-inline-block text-light text-decoration-none text-center fs-2"
      style={{width: '200px'}}
    >{name}</Link>
  });

  return (
    <div className="container">
      <div className="mb-4 p-4">
        <Link to='/servicelist/neworder'>
          <button className="btn btn-info">Создать заявку</button>
        </Link>
      </div>
      {view}
    </div>
  );
}
