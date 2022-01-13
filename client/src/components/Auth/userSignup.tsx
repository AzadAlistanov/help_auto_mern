import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


export default function UserSignup() {
  
  const navigate = useNavigate()
  const [value, setValue] = useState({ name: "", email: "", password: "", nickName: "", firstName: "", lastName: "", city: "", brand: "", carModel: "", carYear: "", phone: "" })

  async function signUp() {
    console.log(`value`, value)
    const options: any = {
      method: 'POST',
      body: JSON.stringify({ value }),
      credentials: 'include',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json', },
    };
    const response = await fetch('http://localhost:5000/auth', options);

    const user = await response.json();
    console.log(`user`, user)
    navigate('/')
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
                      <input onChange={(event) => setValue({ ...value, email: event.target.value })} value={value.email} type="email" id="form3Example3cg" className="form-control form-control-lg" />
                      <label className="form-label" htmlFor="form3Example3cg">Your Email</label>
                    </div>

                    <div className="form-outline mb-4">
                      <input onChange={(event) => setValue({ ...value, password: event.target.value })} value={value.password} type="password" id="form3Example4cg" className="form-control form-control-lg" />
                      <label className="form-label" htmlFor="form3Example4cg">Password</label>
                    </div>

                    <div className="form-outline mb-4">
                      <input onChange={(event) => setValue({ ...value, nickName: event.target.value })} value={value.nickName} type="nickName" id="form3Example4cg" className="form-control form-control-lg" />
                      <label className="form-label" htmlFor="form3Example4cg">nickName</label>
                    </div>


                    <div className="form-outline mb-4">
                      <input onChange={(event) => setValue({ ...value, firstName: event.target.value })} value={value.firstName} type="firstName" id="form3Example4cg" className="form-control form-control-lg" />
                      <label className="form-label" htmlFor="form3Example4cg">firstName</label>
                    </div>

                    <div className="form-outline mb-4">
                      <input onChange={(event) => setValue({ ...value, lastName: event.target.value })} value={value.lastName} type="lastName" id="form3Example4cg" className="form-control form-control-lg" />
                      <label className="form-label" htmlFor="form3Example4cg">lastName</label>
                    </div>

                    <div className="form-outline mb-4">
                      <input onChange={(event) => setValue({ ...value, city: event.target.value })} value={value.city} type="city" id="form3Example4cg" className="form-control form-control-lg" />
                      <label className="form-label" htmlFor="form3Example4cg">city</label>
                    </div>

                    <div className="form-outline mb-4">
                      <input onChange={(event) => setValue({ ...value, brand: event.target.value })} value={value.brand} type="brand" id="form3Example4cg" className="form-control form-control-lg" />
                      <label className="form-label" htmlFor="form3Example4cg">brand</label>
                    </div>

                    <div className="form-outline mb-4">
                      <input onChange={(event) => setValue({ ...value, carModel: event.target.value })} value={value.carModel} type="carModel" id="form3Example4cg" className="form-control form-control-lg" />
                      <label className="form-label" htmlFor="form3Example4cg">carModel</label>
                    </div>

                    <div className="form-outline mb-4">
                      <input onChange={(event) => setValue({ ...value, carYear: event.target.value })} value={value.carYear} type="carYear" id="form3Example4cg" className="form-control form-control-lg" />
                      <label className="form-label" htmlFor="form3Example4cg">carYear</label>
                    </div>

                    <div className="form-outline mb-4">
                      <input onChange={(event) => setValue({ ...value, phone: event.target.value })} value={value.phone} type="phone" id="form3Example4cg" className="form-control form-control-lg" />
                      <label className="form-label" htmlFor="form3Example4cg">phone</label>
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
