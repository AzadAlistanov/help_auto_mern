
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../typeTS/initialState";
import UserOrder from "./userOrders";
import * as actions from '../../store/actions/auth'

type options = {
  method: string;
  body: any;
  credentials: any;
  headers: any
}


export default function UserProfile() {

  const [img, setImg] = useState<any>(null)
  const [avatar, setAvatar] = useState<any>(null)
  const refForm = useRef(null);
  const [user, setUser] = useState({ name: "", email: "", password: "", nickName: "", firstName: "", lastName: "", city: "", carBrand: "", carModel: "", carYear: "", phone: "", createdAt: "", photo: "" })


  const {authUser} = useSelector((state: State) => state);
  console.log(`authUser`, authUser.userId)
  console.log(authUser);



  const id: any = authUser.userId
  console.log(id);

  const check = {
    props: id
  }

  useEffect(() => {
    (async function () {
      const { data } = await axios.get(`http://localhost:5000/userprofile/${id}`);
      setUser(data.user[0])
    }());
  }, []);


  const checkFunction = React.useCallback(async () => {
    const formData = new FormData()
    formData.append('avatar', img, id)
    await axios.post('http://localhost:5000/useravatarRouter', formData, { headers: { 'Content-Type': 'multipart/form-data' } })
      .then(res => setAvatar(`http://localhost:5000/${res.data.path}`))
    return user
  }, [img]
  )

  return (
    <div>
      <div className="container">
        <div id="main">
          <div className="row" id="real-estates-detail">
            <div className="col-lg-4 col-md-4 col-xs-12">
              <div className="panel panel-default">
                <div className="panel-heading">
                  <header className="panel-title">
                    <div className="profile text-center">
                      <strong>{user.firstName} {user.lastName}</strong>
                    </div>
                  </header>
                </div>
                <div className="profile panel-body">
                  <div className="text-center" id="author">
                    {avatar === null ?
                      <img className="image-profile" src={`http://localhost:5000/${user.photo}`} /> :
                      <img src={`${avatar}`} />}
                    <h3><strong className="label label-warning">{user.nickName}</strong></h3>
                    <h3>{user.city}</h3>
                    <p className="sosmed-author">
                    </p>
                    <div className="dropdown">
                      <button className="btn btn-secondary dropdown-toggle"
                        type="button" id="dropdownMenu1" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">
                        Поменять фото
                      </button>
                      <div className="dropdown-menu" aria-labelledby="dropdownMenu1">
                      <input onChange={e => e.target.files !== null && setImg(e.target.files[0])} type="file" className="form-control" id="inputGroupFile01" />
                      <button onClick={checkFunction}>отправить</button>
                        {/* <a className="dropdown-item" href="#!">Action</a>
                        <a className="dropdown-item" href="#!">Another action</a> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-8 col-xs-12">
              <div className="profile panel">
                <div className="panel-body">
                  <ul id="myTab" className="nav nav-pills">
                    {/* <li className="active"><a href="#detail" data-toggle="tab">О пользователе</a></li> */}
                    {/* <li className=""><a href="#contact" data-toggle="tab">Отправить сообщение</a></li> */}
                  </ul>
                  <div id="myTabContent" className="tab-content">
                    <hr />
                    <div className="tab-pane fade active in" id="detail">
                      <h4>История профиля</h4>
                      <table className="table table-th-block">
                        <tbody>
                          <tr><td className="active">Зарегистрирован: </td><td>{new Date(user.createdAt).toLocaleString()}</td></tr>
                          <tr><td className="active">carBrand: </td><td>{user.carBrand}</td></tr>
                          <tr><td className="active">carModel: </td><td>{user.carModel}</td></tr>
                          <tr><td className="active">phone: </td><td>{user.phone}</td></tr>
                          <tr><td className="active">email: </td><td>{user.email}</td></tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="tab-pane fade" id="contact">
                      <p></p>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <UserOrder id={id} />
    </div >
  );
}
