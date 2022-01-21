
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
  const [user, setUser] = useState({
    name: "", email: "", password: "",
    nickName: "", firstName: "",
    lastName: "", city: "", carBrand: "",
    carModel: "", carYear: "", phone: "",
    createdAt: "", photo: "" })

  const {authUser} = useSelector((state: State) => state);

  const id: any = authUser.userId

  const check = {
    props: id
  }

  useEffect(() => {
    (async function () {
      const { data } = await axios.get(`http://localhost:5000/userprofile/${id}`);
      setUser(data.user[0])
    }());
  }, [avatar]);


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
      <div className="profile-wrapper">
        <div className="info_inner">
          <div className="info-item info-img">
            <h3><strong className="label label-warning">{user.nickName}</strong></h3>
            <img 
              src={`http://localhost:5000/${user.photo}`}
              className="image-profile" />
              <strong>{user.firstName} {user.lastName}</strong>
              <h3>{user.city}</h3>
          </div>
          <div className="info-item info-data">
            <h4>Данные профиля</h4>
            <table className="table table-th-block">
              <tbody>
                <tr><td className="active">Зарегистрирован: </td><td>{new Date(user.createdAt).toLocaleString()}</td></tr>
                <tr><td className="active">Марка автомобиля: </td><td>{user.carBrand}</td></tr>
                <tr><td className="active">Модель автомобиля: </td><td>{user.carModel}</td></tr>
                <tr><td className="active">Телефон: </td><td>{user.phone}</td></tr>
                <tr><td className="active">Адрес электронной почты:</td><td>{user.email}</td></tr>
                <tr><td className="active">Сменить фото профиля:</td><td>
                  <div className="dropdown">
                    <button className="btn btn-lite dropdown-toggle"
                      type="button" id="dropdownMenu1" data-toggle="dropdown"
                      aria-haspopup="true" aria-expanded="false">
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenu1">
                    <input onChange={e => e.target.files !== null && setImg(e.target.files[0])} 
                      type="file" 
                      className="form-control"
                      id="inputGroupFile01" />
                    <button onClick={checkFunction}>Сохранить</button>
                    </div>
                  </div> 
                </td></tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="">
        </div>
        <UserOrder id={id} />
      </div>
    </div >
  );
}
