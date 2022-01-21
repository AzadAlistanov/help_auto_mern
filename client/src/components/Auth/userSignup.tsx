import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as actions from '../../store/actions/auth'

export default function UserSignup() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [value, setValue] = useState({
    name: "", email: "", password: "",
    nickName: "", firstName: "", lastName: "",
    city: "", brand: "", carModel: "",
    carYear: "", phone: "" })

  async function signUp() {
    dispatch(actions.signUpUserSucces(value));
    navigate('/');
  }

  return (

    <section className="bg-image pb-5">
      <div className="mask d-flex align-items-center h-100 gradient-custom-3">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card" >
                <div className="form card-body p-5">
                  <h2 className="text-uppercase text-center mb-5">Регистрация автовладельца</h2>

                  <form >
                    <div className="form-outline mb-4">
                      <input onChange={(event) => setValue({ ...value, email: event.target.value })} value={value.email} type="email" id="form3Example3cg" className="form-control form-control-lg" />
                      <label className="form-label" htmlFor="form3Example3cg">Адрес электронной почты</label>
                    </div>

                    <div className="form-outline mb-4">
                      <input onChange={(event) => setValue({ ...value, password: event.target.value })} value={value.password} type="password" id="form3Example4cg" className="form-control form-control-lg" />
                      <label className="form-label" htmlFor="form3Example4cg">Пароль</label>
                    </div>

                    <div className="form-outline mb-4">
                      <input onChange={(event) => setValue({ ...value, nickName: event.target.value })} value={value.nickName} type="nickName" id="form3Example4cg" className="form-control form-control-lg" />
                      <label className="form-label" htmlFor="form3Example4cg">Логин</label>
                    </div>


                    <div className="form-outline mb-4">
                      <input onChange={(event) => setValue({ ...value, firstName: event.target.value })} value={value.firstName} type="firstName" id="form3Example4cg" className="form-control form-control-lg" />
                      <label className="form-label" htmlFor="form3Example4cg">Имя</label>
                    </div>

                    <div className="form-outline mb-4">
                      <input onChange={(event) => setValue({ ...value, lastName: event.target.value })} value={value.lastName} type="lastName" id="form3Example4cg" className="form-control form-control-lg" />
                      <label className="form-label" htmlFor="form3Example4cg">Фамилия</label>
                    </div>

                    <div className="form-outline mb-4">
                      <input 
                        onChange={(event) => setValue({ ...value, city: event.target.value })}
                        value={value.city}
                        id="form3Example4cg"
                        className="form-control form-control-lg" />
                      <label className="form-label" htmlFor="form3Example4cg">Город проживания</label>
                    </div>

                    <div className="form-outline mb-4">
                      <input onChange={(event) => setValue({ ...value, brand: event.target.value })} value={value.brand} type="brand" id="form3Example4cg" className="form-control form-control-lg" />
                      <label className="form-label" htmlFor="form3Example4cg">Марка автомобиля</label>
                    </div>

                    <div className="form-outline mb-4">
                      <input onChange={(event) => setValue({ ...value, carModel: event.target.value })} value={value.carModel} type="carModel" id="form3Example4cg" className="form-control form-control-lg" />
                      <label className="form-label" htmlFor="form3Example4cg">Модель автомобиля</label>
                    </div>

                    <div className="form-outline mb-4">
                      <input 
                        onChange={(event) => setValue({ ...value, carYear: event.target.value })}
                        value={value.carYear}
                        type="date"
                        id="form3Example4cg"
                        className="form-control form-control-lg" />
                      <label className="form-label" htmlFor="form3Example4cg">Год выпуска</label>
                    </div>

                    <div className="form-outline mb-4">
                      <input 
                        onChange={(event) => setValue({ ...value, phone: event.target.value })} 
                        value={value.phone}
                        type="tel" id="form3Example4cg"
                        className="form-control form-control-lg" />
                      <label className="form-label" htmlFor="form3Example4cg">Телефон</label>
                    </div>

                    <div className="d-flex justify-content-center">
                      <button 
                        onClick={signUp} 
                        type="button" 
                        className="btn btn-dark m-1">Зарегистрироваться</button>
                    </div>



                  </form>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
