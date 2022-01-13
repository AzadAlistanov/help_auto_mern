import axios from "axios";
import { useEffect, useState } from "react";

export default function NewOrder() {
  const [services, setServices] = useState([]);
  const [order, setOrder] = useState({
    name: '',
    status: false,
    service_id: '',
    user_id: '',
    master_id: null
  });


  useEffect(() => {
    (async function() {
      const { data } = await axios.get('http://localhost:5000/servicelist');
      setServices(data);
    }());
  }, []);

  return (
    <div className="d-flex justify-content-center">
      <div className="col-12 col-md-9 col-lg-7 col-xl-6 shadow p-5 bg-body rounded text-center">

        <select className="form-select">
          <option selected>Выберите услугу</option>
          {services.map(({name}) => (
              <option 
                key={name} 
                value={name}
                >{name}</option>
            ))}
        </select>

        <div className="mt-3">
          <label 
            htmlFor="floatingTextarea" 
            className="form-label">Описание</label>
          <textarea 
            value={order.name} 
            onChange={(event) => setOrder({ ...order, name: event.target.value })}
            className="form-control" 
            id="floatingTextarea"/>
        </div>
        <div className="mt-5">     
          <button type="submit" className="btn btn-info">Создать</button>
        </div>
      </div>
    </div>
  );
}
