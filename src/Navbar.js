import React from 'react'
import { Link } from 'react-router-dom'
import firebase from './firebase';

function Navbar(props) {
  const {auth} = props;
  const SignOutUser = () => {
    firebase.auth().signOut();
   };
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <Link to='/'>
          <h1 className='logo'>Cocktail Search Engine</h1>
        </Link>
        <ul className='nav-links'>
          <li>
            <Link to='/'>home</Link>
          </li>
          <li>
            <Link to='/about'>about</Link>
          </li>
          {
            auth ?
            <li>
            <Link to='/' onClick={SignOutUser}>SignOut</Link>
            {/* <button className='Link' onClick={SignOutUser}>SignOut</button> */}
            </li> :
            <>
              <li>
                <Link to='/signin'>SignIn</Link>
              </li>
              <li>
                <Link to='/signup'>SignUp</Link>
              </li>
            </>   
          }
          
        </ul>
      </div>
    </nav>
  )
}
export default Navbar;