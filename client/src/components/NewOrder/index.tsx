import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from "react";
import { State } from "../../typeTS/initialState";
import { addOrderSuccessAC } from "../../store/actions/task";

export default function NewOrder() {
  const [services, setServices] = useState([]);
  const {auth} = useSelector((state: State) => state);
  const [orderState, setOrderState] = useState({
    name: '',
    status: false,
    service_id: 8,
    user_id: auth.userId,
    master_id: null,
    error: null,
  });
  const dispatch = useDispatch();
  
  const addNewOrder = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
      setOrderState(
        {...orderState,
        name: orderState.name,
        service_id: orderState.service_id,
        user_id: auth.userId,
      });
      setOrderState({...orderState, name: ''});
    dispatch(addOrderSuccessAC(orderState));
  }

  useEffect(() => {
    (async function() {
      const { data } = await axios.get('http://localhost:5000/servicelist');
      setServices(data);
    }());
  }, []);

  return (
    <div className="d-flex justify-content-center">
      <form onSubmit={addNewOrder} className="col-12 col-md-9 col-lg-7 col-xl-6 shadow p-5 bg-body rounded text-center">

        <select 
          defaultValue={'DEFAULT'}
          className="form-select"
          onChange={(event) => setOrderState({ ...orderState, service_id: Number(event.target.value) })}>
          <option value="DEFAULT" disabled>Выберите услугу</option>
          {services.map((service: { id: number; name: string }) => (
              <option 
                key={service.id}
                value={service.id}>{service.name}</option>))}
        </select>

        <div className="mt-3">
          <label 
            htmlFor="floatingTextarea" 
            className="form-label">Описание</label>
          <textarea 
            value={orderState.name} 
            onChange={(event) => setOrderState({ ...orderState, name: event.target.value })}
            className="form-control" 
            id="floatingTextarea"/>
        </div>
        <div className="mt-5">     
          <button type="submit" className="btn btn-info">Создать</button>
        </div>
      </form>
    </div>
  );
}
