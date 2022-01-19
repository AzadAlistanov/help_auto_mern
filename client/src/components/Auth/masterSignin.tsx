import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as actions from '../../store/actions/auth'


export default function MasterSignin() {

  const [value, setValue] = useState({  email: "", password: "" });
  const navigate = useNavigate();

  const dispatch = useDispatch();
  
  function signIn() {
    dispatch(actions.signInMasterSucces(value));
    navigate('/');
  }

  useEffect(() => {
    dispatch(actions.signInMasterSucces(value));
  },[])

  return (
    <section className="vh-100 bg-image">
      <div className="mask d-flex align-items-center h-100 gradient-custom-3">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card" >
                <div className="form card-body p-5">
                  <h2 className="text-uppercase text-center mb-5">master sign in</h2>

                  <form className=''>

                    <div className="form-outline mb-4">
                      <input onChange={(event) => setValue({ ...value, email: event.target.value })} value={value.email} type="email" id="form3Example3cg" className="form-control form-control-lg" />
                      <label className="form-label" htmlFor="form3Example3cg">Адрес электронной почты</label>
                    </div>

                    <div className="form-outline mb-4">
                      <input onChange={(event) => setValue({ ...value, password: event.target.value })} value={value.password} type="password" id="form3Example4cg" className="form-control form-control-lg" />
                      <label className="form-label" htmlFor="form3Example4cg">Пароль</label>
                    </div>

                    <div className="d-flex justify-content-center">
                      <button onClick={signIn} type="button" className="btn btn-dark m-1">Войти</button>
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
