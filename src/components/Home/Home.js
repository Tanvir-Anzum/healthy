import React, { useEffect, useState } from 'react';
import banner from "../../Images/banner.png"
import TakingHome from '../TakingHome/TakingHome';
import './Home.css'


const Home = () => {
  const [services, setServices] = useState([])
  useEffect(() => {
    fetch('./myData.JSON')
      .then((res) => res.json())
      .then((data) => setServices(data))
  }, [])
 return (
   <div className='container-fluid '>
     <div className='d-flex align-items-center row background'>
       <div className='col-sm-12 col-md-6'>
         <h1>Welcome to our hospital</h1>
         <h5>
           Lorem ipsum, dolor sit amet consectetur adipisicing elit.
           Reprehenderit, error dolor accusamus dignissimos doloribus odio!
         </h5>
       </div>
       <div className='col-sm-12 col-md-6'>
         <img className='img-fluid care' src={banner} alt='' />
       </div>
     </div>
     <div className='mt-5'>
       <h3 className='d-flex justify-content-center'>Our Features</h3>
       <p className='d-flex justify-content-center'>
         We are here to provide you the best quality services and to make you
         feel happy
       </p>
       <div className='d-flex row'>
         <div className='box col p-4'>
           <h5>Emergency Care</h5>
           <p>
             Our emergency care system is meeting the needs of the patiens for a
             long time.We are trying to make it even better.
           </p>
         </div>
         <div className='box col p-4'>
           <h5>Qualified Doctors</h5>
           <p>
             We have the doctors who know their jo really well.Our doctors have
             vast experiences and they have worked in home and abroad.
           </p>
         </div>
         <div className='box col p-4'>
           <h5>24/7 Hours Service</h5>
           <p>
             We are open 24 hours a day to provide you the best
             services.Whenever you need us,we will do our best.Your satisfaction
             is our aim.
           </p>
         </div>
       </div>
       <div className='row'>
         {services.slice(0, 6).map((service) => (
           <div className='col-sm-4 mb-3'>
             <TakingHome service={service}></TakingHome>
           </div>
         ))}
       </div>
     </div>
   </div>
 ) 
};

export default Home;