import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import * as actions from '../../store/actions/auth'
import { State } from '../../typeTS/initialState';


export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { authUser, authMaster } = useSelector((state: State) => state);
  console.log('authUser', authUser);
  console.log('authMaster', authMaster);

  async function logout() {
    authUser.auth
      ? dispatch(actions.signOutUserSucces())
      : dispatch(actions.signOutMasterSucces());
    navigate('/');
  }

  return (

    <nav className="mb-1 navbar fixed-top navbar-expand-lg navbar-dark default-color">
      <Link to='/' className="navbar-brand">Help Auto</Link>
      <div className="collapse navbar-collapse" id="navbarSupportedContent-333">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link to='/' className="nav-link" >Home
              <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to='/servicelist'>Services</Link>
          </li>

          {
            authUser.auth || authMaster.masterId
              ?
              <li className="nav-item">
                <span onClick={logout} className="nav-link">Logout</span>
              </li>
              : null
          }
        </ul>
        <ul className="navbar-nav ml-auto nav-flex-icons">
          <li className="nav-item">
            <a className="nav-link waves-effect waves-light">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link waves-effect waves-light">
              <i className="fab fa-google-plus-g"></i>
            </a>
          </li>
          <li className="nav-item">
            <span className="nav-link waves-effect waves-light">
              {(authUser.auth || authMaster.masterId) && (authMaster.name ? `Master ${authMaster.name}` : `User ${authUser.email}`)}
            </span>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink-333" data-toggle="dropdown"
              aria-haspopup="true" aria-expanded="false">
              <i className="fas fa-user"></i>
            </a>
            {authUser.auth || authMaster.masterId ?
              <div className="dropdown-menu dropdown-menu-right dropdown-default"
                aria-labelledby="navbarDropdownMenuLink-333">
                  {authUser.auth ?
                <Link className="dropdown-item" to='/userprofile/:userid'>Personal Area</Link>:
                <Link className="dropdown-item" to='/master/:masterid'>Personal Area</Link>
                  }
              </div>
              :
              <div className="dropdown-menu dropdown-menu-right dropdown-default"
                aria-labelledby="navbarDropdownMenuLink-333">
                <Link className="dropdown-item" to='/auth/usersignup'>User Sign up</Link>
                <Link className="dropdown-item" to='/auth/usersignin'>User Sign in</Link>
                <Link className="dropdown-item" to='/auth/mastersignup'>Master Sign up</Link>
                <Link className="dropdown-item" to='/auth/mastersignin'>Master Sign in</Link>
              </div>

            }

            {authMaster.isAuth ?
              <div className="dropdown-menu dropdown-menu-right dropdown-default"
                aria-labelledby="navbarDropdownMenuLink-333">
                <Link className="dropdown-item" to='/userprofile/:userid'>Master </Link>
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
