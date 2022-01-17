import { Link } from 'react-router-dom';


export default function Header() {
  // <div style={{display: 'flex'}}>
//   <Link style={{margin: '10px'}} to='/auth'>auth</Link>
//   <Link style={{margin: '10px'}} to='/auth/usersignin'>usersignin</Link>
//   <Link style={{margin: '10px'}} to='/auth/mastersignin'>mastersignin</Link>
//   <Link style={{margin: '10px'}} to='/auth/usersignup'>usersignup</Link>
//   <Link style={{margin: '10px'}} to='/auth/mastersignup'>mastersignup</Link>
//   <Link style={{margin: '10px'}} to='/expirience'>expirience</Link>
//   <Link style={{margin: '10px'}} to='/servicelist'>servicelist</Link>
//   <Link style={{margin: '10px'}} to='/servicelist/orderslist'>servicelist/orderslist</Link>
//   <Link style={{margin: '10px'}} to='/servicelist/neworder'>servicelist/neworder</Link>
// </div>
  return (

    <nav className="mb-1 navbar navbar-expand-lg navbar-dark default-color">
      <Link to='/' className="navbar-brand">Help Auto</Link>
      <div className="collapse navbar-collapse" id="navbarSupportedContent-333">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">Home
              <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to='/expirience'>Forum</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to='/servicelist'>Services</Link>
          </li>
          {/*<li className="nav-item dropdown">*/}
          {/*  <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink-333" data-toggle="dropdown"*/}
          {/*     aria-haspopup="true" aria-expanded="false">Authorization*/}
          {/*  </a>*/}
          {/*  <div className="dropdown-menu dropdown-default" aria-labelledby="navbarDropdownMenuLink-333">*/}
          {/*    <Link className="dropdown-item" to='/auth/usersignup'>User Sign up</Link>*/}
          {/*    <Link className="dropdown-item" to='/auth/usersignin'>User Sign in</Link>*/}
          {/*    <Link className="dropdown-item" to='/auth/mastersignup'>Master Sign up</Link>*/}
          {/*    <Link className="dropdown-item" to='/auth/mastersignin'>Master Sign in</Link>*/}
          {/*  </div>*/}
          {/*</li>*/}
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
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink-333" data-toggle="dropdown"
               aria-haspopup="true" aria-expanded="false">
              <i className="fas fa-user"></i>
            </a>
            <div className="dropdown-menu dropdown-menu-right dropdown-default"
                 aria-labelledby="navbarDropdownMenuLink-333">
              <Link className="dropdown-item" to='/auth/usersignup'>User Sign up</Link>
              <Link className="dropdown-item" to='/auth/usersignin'>User Sign in</Link>
              <Link className="dropdown-item" to='/auth/mastersignup'>Master Sign up</Link>
              <Link className="dropdown-item" to='/auth/mastersignin'>Master Sign in</Link>
            </div>
          </li>
        </ul>
      </div>
    </nav>

  );
}
