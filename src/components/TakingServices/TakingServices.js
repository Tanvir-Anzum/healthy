import React from 'react';

const TakingServices = (props) => {
 const { title, img, text } = props.service
 return (
   <div>
     <div className='card'>
       <img className='w-100' src={img} alt='' />
       <div className='card-body'>
         <h5 className='card-title'>{title}</h5>

         <p className='card-text'>{text}</p>
       </div>
     </div>
   </div>
 )
};

export default TakingServices;