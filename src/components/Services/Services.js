import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import TakingServices from '../TakingServices/TakingServices';


const Services = () => {
 const [services, setServices] = useState([])
 useEffect(() => {
   fetch('./myData.JSON')
     .then((res) => res.json())
     .then((data) => setServices(data))
 }, [])
 return (
   <div className="mt-5">
     <div className='row'>
       {services.slice(6, 10).map((service) => (
         <div className='col-sm-4 mb-3'>
           <TakingServices service={service}></TakingServices>
         </div>
       ))}
     </div>
   </div>
 )
};

export default Services;