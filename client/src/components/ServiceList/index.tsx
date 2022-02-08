import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from "axios";
import { useSelector } from 'react-redux';
import { State } from '../../typeTS/initialState';


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
    return <Link
      key={id}
      to={`/servicelist/orderslist/${id}`}
      className="service-item bg-dark rounded-3 text-light"
      >{name}</Link>
  });

  return (
    <div className="container">
      <div className="my-4 p-4 text-center">
        {authUser.auth ?
        <Link to='/servicelist/neworder'>
          <button className="btn btn-dark">Создать заявку</button>
        </Link>
        : <h2 className='text-center'>Чтобы создать заявку, необходима авторизация автовладельца</h2>
      }
      </div>

      <div className='services-list'>
        {view}
      </div>

    </div>
  );
}
