import { Link } from 'react-router-dom';


export default function Header() {
  return (
    <div style={{display: 'flex'}}>
      <Link style={{margin: '10px'}} to='/auth'>auth</Link>
      <Link style={{margin: '10px'}} to='/auth/usersignin'>usersignin</Link>
      <Link style={{margin: '10px'}} to='/auth/mastersignin'>mastersignin</Link>
      <Link style={{margin: '10px'}} to='/auth/usersignup'>usersignup</Link>
      <Link style={{margin: '10px'}} to='/auth/mastersignup'>mastersignup</Link>
      <Link style={{margin: '10px'}} to='/expirience'>expirience</Link>
      <Link style={{margin: '10px'}} to='/servicelist'>servicelist</Link>
      <Link style={{margin: '10px'}} to='/servicelist/orderslist'>servicelist/orderslist</Link>
      <Link style={{margin: '10px'}} to='/servicelist/neworder'>servicelist/neworder</Link>
    </div>
  );
}

