import React from 'react';
import {NavLink} from 'react-router-dom';
import { Link } from 'react-router-dom'
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';
import "./Header.css"
const Header = () => {
  const { user, logOut } = useAuth()
 return (
   <div className="">
     {/* <nav>
       <NavLink to='/home'>Home</NavLink>
       <NavLink to='/register'>Register</NavLink>
       <NavLink to='/login'>Login</NavLink>
       {user.email ? 
         <button onClick={logOut}>log out</button>
        : 
         <NavLink to='/login'>Login</NavLink>
       } */}
     <nav className='navbar navbar-expand-lg navbar-light navbar-custom'>
       <button
         class='navbar-toggler'
         type='button'
         data-toggle='collapse'
         data-target='#navbarSupportedContent'
         aria-controls='navbarSupportedContent'
         aria-expanded='false'
         aria-label='Toggle navigation'
       >
         <span class='navbar-toggler-icon'></span>
       </button>
       <div class='collapse navbar-collapse' id='navbarSupportedContent'>
         <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
           <li className='nav-item'>
             <Link to='/home' className='nav-link active' aria-current='page'>
               Home
             </Link>
           </li>
           <li className='nav-item'>
             <Link to='/aboutUs' className='nav-link' aria-current='page'>
               About Us
             </Link>
           </li>
           <li className='nav-item'>
             <Link to='/services' className='nav-link'>
               Services
             </Link>
           </li>

           <li className='nav-item'>
             <Link to='/register' className='nav-link'>
               Register
             </Link>
           </li>
           <li className='nav-item'>
             <Link to='/faqs' className='nav-link'>
               FAQs
             </Link>
           </li>
           <li className='nav-item'>
             {user.email ? (
               <button onClick={logOut}>log out</button>
             ) : (
               <Link to='/login' className='nav-link'>
                 Login
               </Link>
             )}
           </li>
           {user.email && (
            
             <span style={{ color: 'white' }}>{user.displayName} </span>
           )}
         </ul>
         <form className='d-flex'>
           <input
             className='form-control me-2'
             type='search'
             placeholder='Search'
             aria-label='Search'
           />
           <button className='btn btn-outline-success' type='submit'>
             Search
           </button>
         </form>
       </div>
     </nav>
     
   </div>
 )
};

export default Header;