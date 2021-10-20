import React from 'react';
import doctorOne from "../../Images/doctorOne.jpg"
import doctorTwo from "../../Images/doctorTwo.jpg"
import doctorThree from "../../Images/doctorThree.jpg"
import doctorfour from "../../Images/doctorfour.jpg"
import "./AboutUs.css"

const AboutUs = () => {
 return (
   <div>
     <div className='container'>
       <div className='row row-cols-lg-2 g-lg-2'>
         <div className='d-flex mt-4 mb-4 pt-4'>
           <div className=''>
             <img src={doctorOne} alt='' />
           </div>
           <div className='ps-3 d-flex align-items-center'>
             Etiam dignissim sit amet felis ac sagittis. Sed libero arcu,
             pharetra et ante in, elementum scelerisque arcu. Curabitur sagittis
             non justo at ultricies odio ac diam finibus.
           </div>
         </div>

         <div className='d-flex mt-4 mb-4 pt-4'>
           <div className=''>
             <img src={doctorTwo} alt='' />
           </div>
           <div className='ps-3 d-flex align-items-center'>
             Etiam dignissim sit amet felis ac sagittis. Sed libero arcu,
             pharetra et ante in, elementum scelerisque arcu. Curabitur sagittis
             non justo at ultricies odio ac diam finibus.
           </div>
         </div>
         <div className='d-flex mb-4 pb-4'>
           <div className=''>
             <img src={doctorThree} alt='' />
           </div>
           <div className='ps-3 d-flex align-items-center'>
             Etiam dignissim sit amet felis ac sagittis. Sed libero arcu,
             pharetra et ante in, elementum scelerisque arcu. Curabitur sagittis
             non justo at ultricies odio ac diam finibus.
           </div>
         </div>

         <div className='d-flex mb-4 pb-4'>
           <div className=''>
             <img src={doctorfour} alt='' />
           </div>
           <div className='ps-3 d-flex align-items-center'>
             Etiam dignissim sit amet felis ac sagittis. Sed libero arcu,
             pharetra et ante in, elementum scelerisque arcu. Curabitur sagittis
             non justo at ultricies odio ac diam finibus.
           </div>
         </div>
       </div>
     </div>
   </div>
 )
};

export default AboutUs;