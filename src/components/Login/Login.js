import React from 'react';
import { Link } from 'react-router-dom'
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
 } = useFirebase()
 return (
   <div>
     <h2 className='mb-3 mt-5 text-primary'>please login</h2>
     <form onSubmit={handleLogin}>
       <div className='col-sm-4 mx-auto '>
         <input
           onBlur={handleEmailChange}
           type='email'
           className='form-control'
           id='inputEmail3'
           placeholder='your email'
           required
         />
       </div>
       <br />

       <div className='col-sm-4 mx-auto '>
         <input
           onBlur={handlePasswordChange}
           type='password'
           className='form-control'
           id='inputEmail3'
           placeholder='your password'
           required
         />
       </div>
       <div className='row error text-danger'>{error}</div>
       <button type='submit' className='btn btn-primary submit'>
         Submit
       </button>
       <p>
         new? <Link to='/register'>create account</Link>
       </p>
     </form>

     <button className='btn btn-primary' onClick={signInUsingGoogle}>
       Google Sign In
     </button>
   </div>
 )
};

export default Login;