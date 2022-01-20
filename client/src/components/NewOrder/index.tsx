import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { State } from "../../typeTS/initialState";
import { addOrderSuccessAC } from "../../store/actions/task";
import Alert from '../Alert';

export default function NewOrder() {
  const [services, setServices] = useState([]);
  const [orderStatus, setOrderStatus] = useState(false);
  const navigate = useNavigate();
  const { authUser } = useSelector((state: State) => state);
  const [orderState, setOrderState] = useState({
    name: '',
    status: true,
    location: '',
    service_id: 8,
    user_id: authUser.userId,
    master_id: null,
    error: null,
  });
  const dispatch = useDispatch();

  const addNewOrder = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    setOrderState(
      {
        ...orderState,
        location: orderState.location,
        name: orderState.name,
        service_id: orderState.service_id,
        user_id: authUser.userId,
      });
      console.log(`orderState`, orderState)
    setOrderState({ ...orderState, name: '', location: '' });
    dispatch(addOrderSuccessAC(orderState));
    setOrderStatus(true);
    setTimeout(() => navigate('/servicelist'), 3000);
  }

  useEffect(() => {
    (async function () {
      const { data } = await axios.get('http://localhost:5000/servicelist');
      setServices(data);
    }());
  }, []);

  return (
    <div className="d-flex flex-column align-items-center new-order">
      <form onSubmit={addNewOrder} className="form col-12 col-md-9 col-lg-7 col-xl-6 shadow p-5 bg-body rounded my-4">

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

        <div className="mt-5">
          <textarea
            value={orderState.location}
            onChange={(event) => setOrderState({ ...orderState, location: event.target.value })}
            className="form-control"
            id="floatingTextarea" />
          <label
            htmlFor="floatingTextarea"
            className="form-label">Местоположение</label>
        </div>
        <div className="mt-3">
          <textarea
            value={orderState.name}
            onChange={(event) => setOrderState({ ...orderState, name: event.target.value })}
            className="form-control"
            id="floatingTextarea" />
          <label
            htmlFor="floatingTextarea"
            className="form-label">Описание</label>
        </div>
        <div className="text-center mt-5">
          <button type="submit" className="btn btn-dark">Создать</button>
        </div>
      </form>
      { orderStatus && <Alert message="Заявка принята! Ожидайте ответа исполнителя. Статус отслеживается в списке ваших заказов."/> }
    </div>
  );
}
