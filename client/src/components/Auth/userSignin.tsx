
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as actions from '../../store/actions/auth'


export default function ToSignIn() {
  const dispatch = useDispatch();

  const [value, setValue] = useState({ nickName: "",  password: "" })

  const [regValue, setRegValue] = useState(false);

  const navigate = useNavigate()

  async function signIn() {
    dispatch(actions.signInUserSucces(value));
    setRegValue(true);
    navigate('/')
  }

  useEffect(()=> {
    if(regValue) {
      dispatch(actions.signInUserSucces(value));
    }
  },[regValue])

  return (
    <section className="vh-100 bg-image">
      <div className="mask d-flex align-items-center h-100 gradient-custom-3">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card" >
                <div className="card-body p-5">
                  <h2 className="text-uppercase text-center mb-5">user sign in</h2>

                  <form >

                    <div className="form-outline mb-4">
                      <input onChange={(event) => setValue({ ...value, nickName: event.target.value })} value={value.nickName} type="nickName" id="form3Example1cg" className="form-control form-control-lg" />
                      <label className="form-label" htmlFor="form3Example1cg">Your nickName</label>
                    </div>

                    <div className="form-outline mb-4">
                      <input onChange={(event) => setValue({ ...value, password: event.target.value })} value={value.password} type="password" id="form3Example4cg" className="form-control form-control-lg" />
                      <label className="form-label" htmlFor="form3Example4cg">Password</label>
                    </div>

                    <div className="d-flex justify-content-center">
                      <button onClick={signIn} type="button" className="btn btn-info">sign in</button>
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
