import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import * as actions from '../../store/actions/auth'
import { State } from '../../typeTS/initialState';


export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { authUser, authMaster } = useSelector((state: State) => state);

  async function logout() {
    authUser.auth
      ? dispatch(actions.signOutUserSucces())
      : dispatch(actions.signOutMasterSucces());
    navigate('/');
  }

  return (

    <nav className="header navbar fixed-top navbar-expand-md navbar-dark default-color">
      <Link to='/' className="logo navbar-brand"> <strong>Help</strong><span>Auto</span></Link>
      <button
        className='navbar-toggler'
        data-toggle='collapse'
        data-target='#navbarSupportedContent-333'
        aria-controls='#navbarSupportedContent-333'
        aria-expanded='false'>
        <span className='navbar-toggler-icon'></span>
      </button>


      <div className="collapse navbar-collapse" id="navbarSupportedContent-333">

        <ul className="navbar-nav mr-auto">

          <li className="nav-item">
            <Link className="nav-link" to='/servicelist'>Услуги</Link>
          </li>

          {
            authUser.userId || authMaster.masterId
              ?
              <li className="nav-item">
                <Link onClick={logout} className="nav-link" to={''}>Выйти</Link>
              </li>
              : null
          }
        </ul>

        <ul className="navbar-nav ml-auto nav-flex-icons">
          <li className="nav-item">
            <span className="nav-link waves-effect waves-light">
              {(authUser.auth || authMaster.masterId) && (authMaster.name ? `Организация: ${authMaster.name}` : `Автовладелец: ${authUser.email}`)}
            </span>
          </li>

          <li className="nav-item dropdown">
            <Link to={''}
              className="nav-link dropdown-toggle"
              id="navbarDropdownMenuLink-333"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false">
              <span className="fas fa-user"></span>
            </Link>
            {authUser.auth || authMaster.masterId ?
              <div
                className="dropdown-menu dropdown-menu-right dropdown-default"
                aria-labelledby="navbarDropdownMenuLink-333">
                  {authUser.auth ?
                <Link className="dropdown-item" to='/userprofile/:userid'>Личный кабинет</Link>:
                <Link className="dropdown-item" to='/master/:masterid'>Личный кабинет</Link>
                  }
              </div>
              :
              <div className="dropdown-menu dropdown-menu-right dropdown-default"
                aria-labelledby="navbarDropdownMenuLink-333">
                <Link className="dropdown-item" to='/auth/usersignin'>Вход для автовладельца</Link>
                <Link className="dropdown-item" to='/auth/mastersignin'>Вход для организации</Link>
                <Link className="dropdown-item" to='/auth/usersignup'>Регистрация автовладельца</Link>
                <Link className="dropdown-item" to='/auth/mastersignup'>Регистрация организации</Link>
              </div>
            }

            {authMaster.isAuth ?
              <div className="dropdown-menu dropdown-menu-right dropdown-default"
                aria-labelledby="navbarDropdownMenuLink-333">
                <Link className="dropdown-item" to='/userprofile/:userid'>Master: </Link>
              </div>
              :
              null
            }
          </li>
        </ul>

      </div>
    </nav>

  );
}
