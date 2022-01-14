import axios from "axios";
import { useEffect, useState } from "react";
import UserOrder from "./userOrder";



export default function UserProfile() {

  const [user, setUser] = useState()
  const id: any = 1

  const check= {
    props :id
  }
  useEffect(() => {
    (async function () {
      const { data } = await axios.get(`http://localhost:5000/userprofile/${id}`);
     
      setUser(data.user[0])
      console.log(`user.nickName`, user.nickName)
    }());
  }, []);



  return (
    <div>
      <UserOrder id = {id}/>
      <link rel="stylesheet" href="https://bootstraptema.ru/plugins/2015/bootstrap3/bootstrap.min.css" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      <script src="https://bootstraptema.ru/plugins/jquery/jquery-1.11.3.min.js"></script>
      <script src="https://bootstraptema.ru/plugins/2015/b-v3-3-6/bootstrap.min.js"></script>



      {/* <style>
          body{background:url(https://bootstraptema.ru/images/bg/bg-1.png)}

          #main {
            background - color: #f2f2f2;
          padding: 20px;
          -webkit-border-radius: 4px;
          -moz-border-radius: 4px;
          -ms-border-radius: 4px;
          -o-border-radius: 4px;
          border-radius: 4px;
          border-bottom: 4px solid #ddd;
}
          #real-estates-detail #author img {
            -webkit - border - radius: 100%;
          -moz-border-radius: 100%;
          -ms-border-radius: 100%;
          -o-border-radius: 100%;
          border-radius: 100%;
          border: 5px solid #ecf0f1;
          margin-bottom: 10px;
}
          #real-estates-detail .sosmed-author i.fa {
            width: 30px;
          height: 30px;
          border: 2px solid #bdc3c7;
          color: #bdc3c7;
          padding-top: 6px;
          margin-top: 10px;
}
          .panel-default .panel-heading {
            background - color: #fff;
}
          #real-estates-detail .slides li img {
            height: 450px;
}
        </style> */}

      <div className="container">
        <div id="main">


          <div className="row" id="real-estates-detail">
            <div className="col-lg-4 col-md-4 col-xs-12">
              <div className="panel panel-default">
                <div className="panel-heading">
                  <header className="panel-title">
                    <div className="text-center">
                      <strong>Пользователь сайта</strong>
                    </div>
                  </header>
                </div>
                <div className="panel-body">
                  <div className="text-center" id="author">
                    <img src="https://bootstraptema.ru/snippets/element/2016/profilesection/myprofile.jpg" />
                    <h3>user.nickName</h3>
                    <small className="label label-warning">Российская Федерация</small>
                    <p>Я простой Русский пацан и мне всё по барабану.</p>
                    <p className="sosmed-author">
                      <a href="#"><i className="fa fa-facebook" title="Facebook"></i></a>
                      <a href="#"><i className="fa fa-twitter" title="Twitter"></i></a>
                      <a href="#"><i className="fa fa-google-plus" title="Google Plus"></i></a>
                      <a href="#"><i className="fa fa-linkedin" title="Linkedin"></i></a>
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
                          <tr><td className="active">Зарегистрирован: </td><td>12-06-2016</td></tr>
                          <tr><td className="active">Последняя активность: </td><td>12-06-2016 / 09: 11</td></tr>
                          <tr><td className="active">Страна: </td><td>Россия</td></tr>
                          <tr><td className="active">Город: </td><td>Волгоград</td></tr>
                          <tr><td className="active">Пол: </td><td>Мужской</td></tr>
                          <tr><td className="active">Полных лет: </td><td>43</td></tr>
                          <tr><td className="active">Семейное положение: </td><td>Женат</td></tr>
                          <tr><td className="active">Рейтинг пользователя: </td><td><i className="fa fa-star" ></i> <i className="fa fa-star" ></i> <i className="fa fa-star" ></i> <i className="fa fa-star" ></i> 4/5</td></tr>
                          <tr><td className="active">Плагин рейтинга: </td><td><a href="https://bootstraptema.ru/stuff/plugins_bootstrap/improvement/bootstrap_star_rating/12-1-0-73" target="_blank" rel="noreferrer">http://goo.gl/bGGXuw</a></td></tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="tab-pane fade" id="contact">
                      <p></p>
                      <form role="form">
                        <div className="form-group">
                          <label>Ваше имя</label>
                          <input type="text" className="form-control rounded" placeholder="Укажите Ваше Имя" />
                        </div>
                        <div className="form-group">
                          <label>Ваш телефон</label>
                          <input type="text" className="form-control rounded" placeholder="(+7)(095)123456" />
                        </div>
                        <div className="form-group">
                          <label>E-mail адрес</label>
                          <input type="email" className="form-control rounded" placeholder="Ваш Е-майл" />
                        </div>
                        <div className="form-group">
                          <div className="checkbox">
                            <label>
                              <input type="checkbox" /> Согласен с условиями
                            </label>
                          </div>
                        </div>
                        <div className="form-group">
                          <label>Текст Вашего сообщения</label>
                          <textarea className="form-control rounded" ></textarea>
                          <p className="help-block">Текст сообщения будет отправлен пользователю</p>
                        </div>
                        <div className="form-group">
                          <button type="submit" className="btn btn-success" data-original-title="" title="">Отправить</button>
                        </div>
                      </form>
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
