import React from 'react';
import { Link } from 'react-router-dom'
import useFirebase from '../../hooks/useFirebase';

const Register = () => {
 const {
  user,email,password,handleRegister,
   registerNewUser,
   handleEmailChange,
   handlePasswordChange,
   verifyEmail
 } = useFirebase()
 return (
   <div>
     <div>
       <h2>register : create account</h2>
       <form onSubmit={handleRegister}>
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

         <button type='submit' className='btn btn-primary mt-3'>
           Register
         </button>
       </form>
       <p>
         Already have an account? <Link to='/login'>Login</Link>
       </p>
       <div>----------or-------------</div>
       <button className='btn btn-primary'>Google Sign In</button>
     </div>
   </div>
 )
};

export default Register;