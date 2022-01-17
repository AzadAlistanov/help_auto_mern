import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from "axios";
import { useSelector } from 'react-redux';
import { State } from '../../typeTS/initialState';

// export interface ServiceItems {
//   name: string;
// }

export default function ServiceList() {
  const [service, setService] = useState([]);
  const { authUser } = useSelector((state: State) => state);

  useEffect(() => {
    (async function() {
      const { data } = await axios.get('http://localhost:5000/servicelist');
      setService(data);
    }());
  }, []);

  const view = service.map(({ name, id }) => {
    return <
      Link
      key={id}
      to={`/servicelist/orderslist/${id}`}
      className="col m-3 p-5 bg-secondary rounded-3 d-inline-block text-light text-decoration-none text-center fs-6"
      style={{width: '200px', height: '200px'}}
    >{name}</Link>
  });

  return (
    <div className="container">
      <div className="mb-4 p-4">
        {authUser.auth ?
        <Link to='/servicelist/neworder'>
          <button className="btn btn-info">Создать заявку</button>
        </Link>
        : <></>
      }
      </div>
      {view}
    </div>
  );
}
