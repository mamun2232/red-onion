import React, { useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Toaster } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';
import logo from '../../../images/logo2.png'
import SocailLogin from '../SocailLogin/SocailLogin';
import './Login.css'

const Login = () => {
      const emailRef = useRef('')
      const passwordRef = useRef('')
      const navigate = useNavigate('')
      const [
            signInWithEmailAndPassword,
            user,
            loading,
            error,
          ] = useSignInWithEmailAndPassword(auth);
          const [sendPasswordResetEmail, sending, error2] = useSendPasswordResetEmail(
            auth
          );

      const submitFrom = event =>{
            event.preventDefault()
            const email = emailRef.current.value
            const password = passwordRef.current.value
            signInWithEmailAndPassword(email, password)
      }
      const forgatepass = async () =>{
            const email = emailRef.current.value
            if(email){
            await sendPasswordResetEmail(email)
            toast('Sent email')
            }
            else{
                  toast('hellow')
            }


      

      }
      if(user){
            navigate('/')
      }

      return (
            <div className="login-container">
                 
     
                  <div>
                        <div className="login-img">
                              <img src={logo} alt="" />

                        </div>
                        <div className="from-text">
                              <form onSubmit={submitFrom}>
                                    <input ref={emailRef} type="email" name="" id="" placeholder='Enter Your Email' />
                                    <br />
                                    <input ref={passwordRef} type="password" name="" id="" placeholder='Enter Your Password' />
                                    <br />
                                    <input className='submit-btn' type="submit" value="Login" />
                                    <p onClick={forgatepass} className='text-primary forgatepass'>Forgate Password?</p>


                              </form>
                              {/* <p className='text-center'>Food onion new? <span><Link to='/signup'>Please Singup</Link></span></p> */}
                              <SocailLogin></SocailLogin>
                              <p className='text-center my-2'>Food onion new? <span><Link to='/signup'>Please Singup</Link></span></p>
                              <ToastContainer></ToastContainer>
                        </div>
                  </div>
            </div>
      );
};

export default Login;