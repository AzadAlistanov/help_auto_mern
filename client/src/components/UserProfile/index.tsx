import axios from "axios";
import { useEffect, useState } from "react";
import UserOrder from "./userOrder";



export default function UserProfile() {

  const [user, setUser] = useState({ name: "", email: "", password: "", nickName: "", firstName: "", lastName: "", city: "", carBrand: "", carModel: "", carYear: "", phone: "", createdAt:"" })
  const id: number = 1

  const check= {
    props :id
  }
  useEffect(() => {
    (async function () {
      const { data } = await axios.get(`http://localhost:5000/userprofile/${id}`);
     
      setUser(data.user[0])
      console.log(`user.nickName`, user)
    }());
  }, []);



  return (
    <div>
      <UserOrder id = {id}/>
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
                      <strong>{user.firstName} {user.lastName}</strong>
                    </div>
                  </header>
                </div>
                <div className="panel-body">
                  <div className="text-center" id="author">
                    <img src="https://bootstraptema.ru/snippets/element/2016/profilesection/myprofile.jpg" />
                    <h3><strong className="label label-warning">{user.nickName}</strong></h3>
                    <h3>{user.city}</h3>
                  

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
                          <tr><td className="active">carBrand: </td><td>{user.carBrand}</td></tr>
                          <tr><td className="active">carModel: </td><td>{user.carModel}</td></tr>
                          <tr><td className="active">phone: </td><td>{user.phone}</td></tr>
                          <tr><td className="active">Пол: </td><td>{user.email}</td></tr>
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
    </div>
  );
}
