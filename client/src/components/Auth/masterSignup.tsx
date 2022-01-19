import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { State } from "../../typeTS/initialState";
import * as actions from '../../store/actions/auth'



export default function MasterSignup() {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const [services, setServices] = useState([]);

  const [value, setValue] = useState({
    name: "", email: "", password: "",
    phone: "", address: "", photo: "",
    about: "", rating: "", checkService: [] as any})

  async function signUp() {
    dispatch(actions.signUpMasterSucces(value));
    navigate('/')
  }

  useEffect(() => {
    (async function() {
      const { data } = await axios.get('http://localhost:5000/servicelist');
      setServices(data);
    }());
  }, []);


  return (

    <section className="bg-image pb-5">
      <div className="mask d-flex align-items-center h-100 gradient-custom-3">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card" >
                <div className="form card-body p-5">
                  <h2 className="text-uppercase text-center mb-5">Регистрация организации</h2>

                  <form >
                    <div className="form-outline mb-4">
                      <input onChange={(event) => setValue({ ...value, name: event.target.value })} value={value.name} type="name" id="form3Example4cg" className="form-control form-control-lg" />
                      <label className="form-label" htmlFor="form3Example4cg">Наименование</label>
                    </div>

                    <div className="form-outline mb-4">
                      <input onChange={(event) => setValue({ ...value, email: event.target.value })} value={value.email} type="email" id="form3Example3cg" className="form-control form-control-lg" />
                      <label className="form-label" htmlFor="form3Example3cg">Адрес электронной почты</label>
                    </div>

                    <div className="form-outline mb-4">
                      <input onChange={(event) => setValue({ ...value, password: event.target.value })} value={value.password} type="password" id="form3Example4cg" className="form-control form-control-lg" />
                      <label className="form-label" htmlFor="form3Example4cg">Пароль</label>
                    </div>

                    <div className="form-outline mb-4">
                      <input onChange={(event) => setValue({ ...value, phone: event.target.value })} value={value.phone} type="phone" id="form3Example4cg" className="form-control form-control-lg" />
                      <label className="form-label" htmlFor="form3Example4cg">Телефон</label>
                    </div>

                    <div className="form-outline mb-4">
                      <input onChange={(event) => setValue({ ...value, address: event.target.value })} value={value.address} type="address" id="form3Example4cg" className="form-control form-control-lg" />
                      <label className="form-label" htmlFor="form3Example4cg">Адрес</label>
                    </div>

                    <div className="form-outline mb-4">
                      <input onChange={(event) => setValue({ ...value, about: event.target.value })} value={value.about} type="about" id="form3Example4cg" className="form-control form-control-lg" />
                      <label className="form-label" htmlFor="form3Example4cg">Информация о вас</label>
                    </div>

                    <div id="accordion">
                      <div className="">
                        <div className="text-center" id="headingThree">
                          <button onClick={(event) => event.preventDefault()} className="btn collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Оказываемые услуги..
                          </button>
                        </div>
                        <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                          <div className="card-body">
                          <div>{
                            services.map((service: { id: number; name: string }) => (
                              <div key={service.id}>
                                <input
                                  id={String(service.id)}
                                  type='checkbox'
                                  value={service.id}
                                  onChange={(event) => setValue({ ...value, checkService: [...value.checkService, Number(event.target.value)] })}/>
                                <label className='ml-2' htmlFor={String(service.id)}>{service.name}</label>
                              </div>
                            ))
                          }</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-3 d-flex justify-content-center">
                      <button onClick={signUp} type="button" className="btn btn-dark m-1">Зарегистрироваться</button>
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
