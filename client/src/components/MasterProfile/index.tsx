import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import MasterOrder from "./MasterOrder";
import { State } from '../../typeTS/initialState';
import { useNavigate, useParams } from "react-router";



export default function MasterProfile() {
  const navigate = useNavigate()
  const [img, setImg] = useState<any>(null)
  const [avatar, setAvatar] = useState<any>(null)
  const [user, setUser] = useState({ 
    about: "", address: "", createdAt: "",
    email: "", id: "", name: "", phone: "",
    photo: "", rating: "" })
  const { authMaster, authUser } = useSelector((state: State) => state);
  const { masterid } = useParams()
  const [profileBtn, setProfileBtn] = useState(true)

  // const 

  const [orderState, setOrderState] = useState({

    comment: "",
    user_id: authUser.userId,
    master_id: masterid,

  });

  async function addFeedback(event: { preventDefault: () => void; }) {
    event.preventDefault();
    setOrderState(
      {
        ...orderState,
        comment: orderState.comment,
      });

    const feedback = await axios.post('http://localhost:5000/newfeedback', orderState)
    setOrderState({ ...orderState, comment: '' });
    setProfileBtn(true)
  }

  let id: any
  authMaster.masterId ? id = authMaster.masterId : id = masterid
  const check = {
    props: id
  }

  useEffect(() => {
    (async function () {
      const { data } = await axios.get(`http://localhost:5000/masterprofile/${id}`);
      setOrderState(
        {
          ...orderState,
          master_id: id,
        });
      setUser(data.master[0])
    }())
  }, [avatar]);


  const checkFunction = React.useCallback(async () => {
      const formData = new FormData()
      formData.append('avatar', img, id)
      await axios.post('http://localhost:5000/masteravatarRouter', formData, { headers: { 'Content-Type': 'multipart/form-data' } })
        .then(res => setAvatar(`http://localhost:5000/${res.data.path}`))
      return user
    }, [img]
  )



  const onSend = (e: any) => {
    e.preventDefault();
    let formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log(`data`, data)
  };

  return (
    <div>
      <div>
      <div className="profile-wrapper">
        <div className="info_inner">
          <div className="info-item info-img">
            <h3><strong className="label label-warning">{user.name}</strong></h3>
            <img 
              src={`http://localhost:5000/${user.photo}`}
              className="image-profile" />

            <h3><strong className="label label-warning">{user.address}</strong></h3>
            <h3>{user.email}</h3>
          </div>
          <div className="info-item info-data">
            <div className="d-flex">
              <button onClick={()=> setProfileBtn(true)} className="btn btn-dark">Данные Организации</button>
              {authMaster.masterId 
                ? null : <button onClick={()=> setProfileBtn(false)} className="btn btn-dark">Оставить отзыв</button>
              }
              {/* <button onClick={()=> setProfileBtn(false)} className="btn btn-dark">Оставить отзыв</button> */}
            </div>
            {profileBtn
              ? 
              <table className="table table-th-block">
                <tbody>
                  <tr><td className="active">Зарегистрирован: </td><td>{new Date(user.createdAt).toLocaleString()}</td></tr>
                  <tr><td className="active">Услуги: </td><td>{user.about}</td></tr>
                  <tr><td className="active">Телефон: </td><td>{user.phone}</td></tr>
                  <tr><td className="active">Адрес электронной почты:</td><td>{user.email}</td></tr>
                  {authMaster.masterId 
                    ?
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
                    : null
                  }
                </tbody>
              </table>
              : 
              <form onSubmit={addFeedback} className="col-12 col-md-9 col-lg-7 col-xl-6 shadow p-5 bg-body rounded text-center">
                <div className="mt-3">
                  <label
                    htmlFor="floatingTextarea"
                    className="form-label">Описание</label>
                  <textarea
                    value={orderState.comment}
                    onChange={(event) => setOrderState({ ...orderState, comment: event.target.value })}
                    className="form-control"
                    id="floatingTextarea" />
                </div>
                <div className="mt-5">
                  <button type="submit" className="btn btn-dark">Создать</button>
                </div>
              </form>
            }
          </div>
        </div>
      <MasterOrder id={orderState} />
      </div>


        <div className="">
        </div>

        

      </div >
    </div >
  );
}
