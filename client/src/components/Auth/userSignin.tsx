
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


export default function ToSignIn() {

  const [value, setValue] = useState({ nickName: "",  password: "" })
  const navigate = useNavigate()

  async function signIn() {
    console.log(`value`, value)
    const options: any = {
      method: 'POST',
      body: JSON.stringify({ value }),
      credentials: 'include',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json', },
    };
    const response = await fetch('http://localhost:5000/signin', options);

    const user = await response.json();
    console.log(`user`, user)
    // navigate('/')
  }

  async function logout() {
    
    const options: any = {
      method: 'POST',      
      credentials: 'include',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json', },
    };
    const response = await fetch('http://localhost:5000/logout', options);

    const user = await response.json();
    console.log(`user`, user)
    // navigate('/')
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
                      <input onChange={(event) => setValue({ ...value, nickName: event.target.value })} value={value.nickName} type="nickName" id="form3Example1cg" className="form-control form-control-lg" />
                      <label className="form-label" htmlFor="form3Example1cg">Your nickName</label>
                    </div>

                    <div className="form-outline mb-4">
                      <input onChange={(event) => setValue({ ...value, password: event.target.value })} value={value.password} type="password" id="form3Example4cg" className="form-control form-control-lg" />
                      <label className="form-label" htmlFor="form3Example4cg">Password</label>
                    </div>

                    <div className="d-flex justify-content-center">     
                      <button onClick={signIn} type="button" className="btn btn-info">Register</button>
                    </div>

                    <div className="d-flex justify-content-center">     
                      <button onClick={logout} type="button" className="btn btn-info">logout</button>
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
