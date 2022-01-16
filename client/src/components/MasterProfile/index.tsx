import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import MasterOrder from "./MasterOrder";





export default function MasterProfile() {

  const [img, setImg] = useState<any>(null)
  const [avatar, setAvatar] = useState<any>(null)
  const refForm = useRef(null);
  const [user, setUser] = useState({ about: "", address: "", createdAt: "", email: "", id: "", name: "", phone: "", photo: "", rating: "" })
  const id: any = 1

  
  

  const check = {
    props: id
  }
  useEffect(() => {
    (async function () {
      const { data } = await axios.get(`http://localhost:5000/masterprofile/${id}`);      
      setUser(data.master[0])
    }());
  }, []);


  const checkFunction = React.useCallback(async () => {
    console.log(`123`, 123)
    const formData = new FormData()
    formData.append('avatar', img, id)
    await axios.post('http://localhost:5000/masteravatarRouter', formData, { headers: { 'Content-Type': 'multipart/form-data' } })

      .then(res => setAvatar(`http://localhost:5000/${res.data.path}`))
    return user
  }, [img]
  )

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
                   { avatar === null ?                   
                    <img src={`http://localhost:5000/${user.photo}`} />  :
                    <img src={`${avatar}`} />  }                
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
                    <li className="active"><a href="#detail" data-toggle="tab">О пользователе</a></li>
                    <li className=""><a href="#contact" data-toggle="tab">Отправить сообщение</a></li>
                  </ul>
                  <div id="myTabContent" className="tab-content">
                    <hr />
                    <div className="tab-pane fade active in" id="detail">
                      <h4>История профиля</h4>
                      <table className="table table-th-block">
                        <tbody>
                          <tr><td className="active">Зарегистрирован: </td><td>{user.createdAt}</td></tr>
                          <tr><td className="active">phone: </td><td>{user.phone}</td></tr>
                          <tr><td className="active">email: </td><td>{user.email}</td></tr>
                          <tr><td className="active">услуги: </td><td>{user.about}</td></tr>
                          <tr><td className="active">количество довольных клиентов: </td><td>{user.rating}</td></tr>
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
      <h1>Отзывы наших клиентов</h1>
      <MasterOrder id={id} />

  
        <input onChange={e => e.target.files !== null && setImg(e.target.files[0])} type="file" className="form-control" id="inputGroupFile01" />
        <button onClick={checkFunction}>отправить</button>


    </div >
  );
}
