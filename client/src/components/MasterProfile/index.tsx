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
  const [user, setUser] = useState({ about: "", address: "", createdAt: "", email: "", id: "", name: "", phone: "", photo: "", rating: "" })
  const { authMaster, authUser } = useSelector((state: State) => state);
  console.log(`authMaster`, authMaster)
  const { masterid } = useParams()
  console.log(`masterid`, masterid)

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

  }

  let id: any
// console.log(`orderState`, orderState.master_id)
  authMaster.masterId ? id = authMaster.masterId : id = masterid
  console.log(`id`, id)
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
  }, [id, orderState.comment]);


  const checkFunction = React.useCallback(async () => {
      const formData = new FormData()
      formData.append('avatar', img, id)
      await axios.post('http://localhost:5000/masteravatarRouter', formData, { headers: { 'Content-Type': 'multipart/form-data' } })
        .then(res => setAvatar(`http://localhost:5000/${res.data.path}`))
      return user
    }, [img]
  )


// const posts = useSelector((state: State) => state.post)
// const [values, setValues] = useState([]);

  const onSend = (e: any) => {
    e.preventDefault();
    let formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log(`data`, data)
  };

  console.log(`user.createdAt`, new Date(user.createdAt).toLocaleString())
  return (
    <div>
      <link rel="stylesheet" href="https://bootstraptema.ru/plugins/2015/bootstrap3/bootstrap.min.css" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      <script src="https://bootstraptema.ru/plugins/jquery/jquery-1.11.3.min.js"></script>
      <script src="https://bootstraptema.ru/plugins/2015/b-v3-3-6/bootstrap.min.js"></script>

      <div className="container">
        <div id="main">


          <div className="row" id="real-estates-detail">
            <div className="col-lg-4 col-md-4 col-xs-12">
              <div className="panel panel-default">
                <div className="panel-heading">
                  <header className="panel-title">
                    <div className="text-center">
                      <strong>{user.name}</strong>
                    </div>
                  </header>
                </div>
                <div className="panel-body">
                  <div className="text-center" id="author">
                  {authMaster.masterId ?
                  avatar === null ?
                     <div className="dropdown">
                     <button className="btn btn-lite dropdown-toggle"
                       type="button" id="dropdownMenu1" data-toggle="dropdown"
                       aria-haspopup="true" aria-expanded="false">
                       <img style={{maxWidth:'100%', maxHeight:'100%'}} src={`http://localhost:5000/${user.photo}`} width="200px" />
                     </button>
                     <div className="dropdown-menu" aria-labelledby="dropdownMenu1">
                     <input onChange={e => e.target.files !== null && setImg(e.target.files[0])} type="file" className="form-control" id="inputGroupFile01" />
                     <button onClick={checkFunction}>отправить</button>
                     </div>
                   </div>                       
                      :
                      <div className="dropdown">
                      <button className="btn btn-lite dropdown-toggle"
                        type="button" id="dropdownMenu1" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">
                        <img style={{maxWidth:'100%', maxHeight:'100%'}} src={`${avatar}`} />
                      </button>
                      <div className="dropdown-menu" aria-labelledby="dropdownMenu1">
                      <input onChange={e => e.target.files !== null && setImg(e.target.files[0])} type="file" className="form-control" id="inputGroupFile01" />
                      <button onClick={checkFunction}>отправить</button>
                      </div>
                    </div>
                      
                      :  <img style={{maxWidth:'100%', maxHeight:'100%'}} src={`http://localhost:5000/${user.photo}`} width="200px" />
                    }
                    <h3><strong className="label label-warning">{user.address}</strong></h3>
                    <h3>{user.email}</h3>
                    <p className="sosmed-author">
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-8 col-xs-12">
              <div className="panel">
                <div className="panel-body">
                  <ul id="myTab" className="nav nav-pills">
                    <li className="active"><a href="#detail" data-toggle="tab">О сервисе</a></li>
                    {authMaster.masterId ?
                      <></> :
                      <li className="passive"><a href="#contact" data-toggle="tab">Оставить отзыв</a></li>
                    }
                  </ul>
                  <div id="myTabContent" className="tab-content">
                    <hr />
                    <div className="tab-pane fade active in" id="detail">
                      <h4>История профиля</h4>
                      <table className="table table-th-block">
                        <tbody>
                        <tr><td className="active">Зарегистрирован: </td><td>{new Date(user.createdAt).toLocaleString()}</td></tr>
                        <tr><td className="active">phone: </td><td>{user.phone}</td></tr>
                        <tr><td className="active">email: </td><td>{user.email}</td></tr>
                        <tr><td className="active">услуги: </td><td>{user.about}</td></tr>
                        <tr><td className="active">количество довольных клиентов: </td><td>{user.rating}</td></tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="tab-pane fade passive in" id="contact">

                      <h4>История профиля</h4>
                      <table className="table table-th-block">
                        <tbody>
                        <div className="p-5">
                          <h1 className="my-4 text-light text-center"></h1>
                          <div className="d-flex justify-content-center">
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
                                <button type="submit" className="btn btn-info">Создать</button>
                              </div>
                            </form>
                          </div>
                        </div>
                        </tbody>
                      </table>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>



      </div>

      <MasterOrder id={orderState} />
      {/* <input onChange={e => e.target.files !== null && setImg(e.target.files[0])} type="file" className="form-control" id="inputGroupFile01" />
        <button onClick={checkFunction}>отправить</button> */}
    </div >
  );
}
