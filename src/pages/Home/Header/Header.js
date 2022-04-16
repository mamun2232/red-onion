import React from 'react';
import logo from '../../../images/logo2.png'
import './Header.css'
import { AiOutlineShoppingCart} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';
const Header = () => {
      const [user , loading] = useAuthState(auth)
      const logout = () =>{
            signOut(auth)
      }
      
      return (
          <div className="container  sticky-top">
                <div className="nav-container">
                <div className="nav-image">
                   <Link to='/' className='text-decoration-none'><img src={logo} alt="" /></Link>
                </div>
                <div className="nav-item">
                <AiOutlineShoppingCart className='cart-icon'></AiOutlineShoppingCart>

                {
                      user? <span onClick={logout} className='sing-up-btn me-3'>Logout</span> : <Link className='login' to='/login'>Login</Link>
                }
                <Link className={user ? 'singout' : 'sing-up-btn'} to='/signup'>Singup</Link>
                </div>
               
                </div>
          </div>
      );
};

export default Header;