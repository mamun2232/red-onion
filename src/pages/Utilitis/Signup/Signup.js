import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../../images/logo2.png'
import SocailLogin from '../SocailLogin/SocailLogin';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
const Signup = () => {
      const nameRef = useRef('')
      const emailRef = useRef('')
      const passwordRef = useRef('')
      const confrimPassRef = useRef('')
      const [newError, setError] = useState('')
      const navigete = useNavigate('')
      const [aggre , setAggre] = useState(false)

      const [
            createUserWithEmailAndPassword,
            user,
            loading,
            error,
          ] = useCreateUserWithEmailAndPassword(auth , {sendEmailVerification: true});
          const [updateProfile, updating, error1] = useUpdateProfile(auth);


          const fromSubmit = async (event) =>{
                event.preventDefault()
                const name = nameRef.current.value
                const email = emailRef.current.value
                const password = passwordRef.current.value
                const confirmPass = confrimPassRef.current.value
                console.log(name, email, password, confirmPass);
                if(password !== confirmPass){
                  setError("your Password Dont match.Please Try Again")
                      return
                }
                setError('')
               await createUserWithEmailAndPassword(email, password )
               await updateProfile({displayName: name})
               
                

          }
          if(user){
                navigete('/')
                console.log(user);
          }
          console.log(aggre);
          
          


      return (
            <div className="login-container">
                  <div>
                        <div className="login-img">
                              <img src={logo} alt="" />

                        </div>
                        <div className="from-text">
                              <form onSubmit={fromSubmit}>
                                    <input ref={nameRef} type="text" name="" id="" placeholder='Enter Your Name' />
                                    <br />
                                    <input ref={emailRef} type="email" name="" id="" placeholder='Enter Your Email' />
                                    <br />
                                    <input  ref={passwordRef} type="password" name="" id="" placeholder='Enter Your Password' />
                                    <br />
                                    <input ref={confrimPassRef} type="password" name="" id="" placeholder='Enter Your Confirm Password' />
                                    <br />

                                    <input onClick={() => setAggre(!aggre)}  type="checkbox" name="checkbox" id="" />
                                    <label className={`ps-2 ${aggre ? '' : 'text-danger'}`} htmlFor="terms">Accept Red onion Terms and Conditions</label>
                                    <p className='text-danger'>{newError}</p>
                                    <br />
                                    {/* <input   disabled={!aggre} className='submit-btn' type="submit" value="Signup" /> */}
                                    <input   disabled={!aggre} className={`${!aggre ? 'submit-btn' :'submit-btns'}`} type="submit" value="Signup" />



                              </form>
                              {/* <p className='text-center'>Food onion new? <span><Link to='/signup'>Please Singup</Link></span></p> */}
                              <SocailLogin></SocailLogin>
                              <p className='text-center my-2'>Allready a user? <span><Link to='/login'>Please Login</Link></span></p>
                        </div>
                  </div>
            </div>
      );
};

export default Signup;