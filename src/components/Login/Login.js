import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom'
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';
import "./Login.css"

const Login = () => {
 const {
  error,
   user,
   signInUsingGoogle,
   handleRegistration,
   processLogin,
   registerNewUser,
   handleEmailChange,
   handlePasswordChange,
   handleLogin
 } = useAuth()
 const location = useLocation()
 const history = useHistory()
 const redirect_uri = location.state?.from || '/home'

 const handleGoogleLogin = () => {
   signInUsingGoogle().then(result => {
        history.push(redirect_uri)
   })
 }
 return (
   <div>
     <h2 className='mb-3 mt-5 text-primary'>please login</h2>
     <form onSubmit={handleLogin}>
       {/* <div className='col-sm-4 mx-auto '> */}

              <div className='container-fluid'>
         <div className='row mb-3 '>
           <label htmlFor='inputEmail3' class='col-sm-2 col-form-label'>
             Email
           </label>
           <div class='col-sm-8'>
             <input
               onBlur={handleEmailChange}
               type='email'
               className='form-control'
               id='inputEmail3'
               placeholder='your email'
               required
             />
           </div>
         </div>
       </div>
       <br />

       <div className='container-fluid'>
         <div className='row mb-3 '>
           <label htmlFor='inputEmail3' class='col-sm-2 col-form-label'>
             Password
           </label>
           {/* <div className='col-sm-4 mx-auto '> */}

           <div class='col-sm-8'>
             <input
               onBlur={handlePasswordChange}
               type='password'
               className='form-control'
               id='inputEmail3'
               placeholder='your password'
               required
             />
           </div>
         </div>
       </div>

       <div className='row error text-danger'>{error}</div>
       <button type='submit' className='btn btn-primary submit'>
         Submit
       </button>
       <p>
         new? <Link to='/register'>create account</Link>
       </p>
     </form>

     <button className='btn btn-primary' onClick={handleGoogleLogin}>
       Google Sign In
     </button>
   </div>
 )
};

export default Login;