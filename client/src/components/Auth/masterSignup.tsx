import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as actions from '../../store/actions/task'

export default function MasterSignup() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [value, setValue] = useState({
     name: "", email: "", password: "",
     phone: "", address: "", photo: "", about: "", rating: "" })

  async function signUp() {
    dispatch(actions.getSignInSagaMaster(value))
  }

  return (

    <section className="vh-100 bg-image">
      <div className="mask d-flex align-items-center h-100 gradient-custom-3">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card" >
                <div className="card-body p-5">
                  <h2 className="text-uppercase text-center mb-5">Create an account</h2>

                  <form >

                    <div className="form-outline mb-4">
                      <input onChange={(event) => setValue({ ...value, name: event.target.value })} value={value.name} type="name" id="form3Example4cg" className="form-control form-control-lg" />
                      <label className="form-label" htmlFor="form3Example4cg">name</label>
                    </div>

                    <div className="form-outline mb-4">
                      <input onChange={(event) => setValue({ ...value, email: event.target.value })} value={value.email} type="email" id="form3Example3cg" className="form-control form-control-lg" />
                      <label className="form-label" htmlFor="form3Example3cg">Your Email</label>
                    </div>

                    <div className="form-outline mb-4">
                      <input onChange={(event) => setValue({ ...value, password: event.target.value })} value={value.password} type="password" id="form3Example4cg" className="form-control form-control-lg" />
                      <label className="form-label" htmlFor="form3Example4cg">Password</label>
                    </div>

                    <div className="form-outline mb-4">
                      <input onChange={(event) => setValue({ ...value, phone: event.target.value })} value={value.phone} type="phone" id="form3Example4cg" className="form-control form-control-lg" />
                      <label className="form-label" htmlFor="form3Example4cg">phone</label>
                    </div>

                    <div className="form-outline mb-4">
                      <input onChange={(event) => setValue({ ...value, address: event.target.value })} value={value.address} type="address" id="form3Example4cg" className="form-control form-control-lg" />
                      <label className="form-label" htmlFor="form3Example4cg">address</label>
                    </div>


                    <div className="form-outline mb-4">
                      <input onChange={(event) => setValue({ ...value, photo: event.target.value })} value={value.photo} type="photo" id="form3Example4cg" className="form-control form-control-lg" />
                      <label className="form-label" htmlFor="form3Example4cg">photo</label>
                    </div>

                    {/* <div className="form-outline mb-4">
                      <input onChange={(event) => setValue({ ...value, about: event.target.value })} value={value.about} type="about" id="form3Example4cg" className="form-control form-control-lg" />
                      <label className="form-label" htmlFor="form3Example4cg">about</label>
                    </div> */}

                    <div className="form-floating">
                      <select onChange={(event) => setValue({ ...value, about: event.target.value })} className="form-select" id="floatingSelect" aria-label="Floating label select example">
                        <option selected>Откройте это меню выбора</option>
                        <option value='Двигатель'>Двигатель</option>
                        <option value='Кузовной ремонт'>Кузовной ремонт</option>
                        <option value='Обслуживание ходовой части'>Обслуживание ходовой части</option>
                        <option value='Шиномонтаж'>Шиномонтаж</option>
                        <option value='Трансмиссия'>Трансмиссия</option>
                        <option value='Рулевое управление'>Рулевое управление</option>
                        <option value='Тормозная система'>Тормозная система</option>
                        <option value='Иные услуги'>Иные услуги</option>
                        <option value='Компьютерная диагностика'>Компьютерная диагностика</option>
                        <option value='Сход-развал'>Сход-развал</option>
                      </select>
                      <label htmlFor="floatingSelect">Работает с элементом выбора</label>
                    </div>


                    <div className="d-flex justify-content-center">
                      <button onClick={signUp} type="button" className="btn btn-info">Register</button>
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
