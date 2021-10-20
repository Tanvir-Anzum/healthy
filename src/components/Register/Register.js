import React from 'react';
import { Link } from 'react-router-dom'
import useFirebase from '../../hooks/useFirebase';

const Register = () => {
 const {
  user,email,password,handleRegister,
   registerNewUser,
   handleEmailChange,
   handlePasswordChange,
   handleNameChange, 
   verifyEmail
 } = useFirebase()
 return (
   <div>
     <div>
       <h2 className="text-primary mt-5 mb-5">Register : Create Account</h2>
       <form onSubmit={handleRegister}>
         <div className='container-fluid'>
           <div className='row mb-3 '>
             <label htmlFor='inputEmail3' class='col-sm-2 col-form-label'>
               Name
             </label>
             {/* <div className='col-sm-4 mx-auto '> */}

             <div class='col-sm-8'>
               <input
                 type='text'
                 onBlur={handleNameChange}
                 className='form-control'
                 id='inputEmail3'
                 placeholder='your name'
                 required
               />
             </div>
           </div>
         <br />
<div className='row mb-3 '>
             <label htmlFor='inputEmail3' class='col-sm-2 col-form-label'>
               Email
             </label>
             

             <div class='col-sm-8'>
               <input
                 type='email'
                 onBlur={handleEmailChange}
                 className='form-control'
                 id='inputEmail3'
                 placeholder='your email'
                 required
               />
             </div>
           </div>
         </div>
         <br />

         
<div className='row mb-3 '>
             <label htmlFor='inputEmail3' class='col-sm-2 col-form-label'>
               Password
             </label>
             

             <div class='col-sm-8'>
               <input
                 type='password'
                 onBlur={handlePasswordChange}
                 className='form-control'
                 id='inputEmail3'
                 placeholder='your password'
                 required
               />
             </div>
           </div>
      
         <br />

         
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