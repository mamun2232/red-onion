import React from 'react';
import './SocialLogin.css'
import { FcGoogle } from 'react-icons/fc';
import {FaFacebook } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const SocailLogin = () => {
      return (
           <div className="socile-login">
                 <div className='main'>
                       <div className='or'></div>
                       <p className=''>or</p>
                       <div className='or'></div>
                 </div>
                 <div className="login-icon">
                       <div className="google">
                             <FcGoogle></FcGoogle>
                       </div>
                       <div className="facebook">
                             <FaFacebook></FaFacebook>
                       </div>
                       <div className="github">
                             <AiFillGithub></AiFillGithub>
                       </div>
                       
                 </div>
                 
           </div>
      );
};

export default SocailLogin;