import React from 'react';
import doctorOne from "../../Images/doctorOne.jpg"
import doctorTwo from "../../Images/doctorTwo.jpg"
import doctorThree from "../../Images/doctorThree.jpg"
import doctorfour from "../../Images/doctorfour.jpg"
import "./AboutUs.css"

const AboutUs = () => {
 return (
   <div>
     <h2 className='mt-3 d-flex justify-content-center'>
       Our Experiencd Doctors
     </h2>
     <p className='d-flex justify-content-center'>We hav the best doctors who are dedicated to your service</p>
     <div className='container'>
       <div className='row row-cols-lg-2 g-lg-2'>
         <div className='d-flex mt-4 mb-4'>
           <div>
             <img id='first' src={doctorOne} alt='' />
           </div>
           <div className='ps-3 d-flex align-items-center'>
             Etiam dignissim sit amet felis ac sagittis. Sed libero arcu,
             pharetra et ante in, elementum scelerisque arcu. Curabitur sagittis
             non justo at ultricies odio ac diam finibus.
           </div>
         </div>

         <div className='d-flex '>
           <div className='mt-4 mb-4'>
             <img id='second' src={doctorTwo} alt='' />
           </div>
           <div className='ps-3 d-flex align-items-center'>
             Etiam dignissim sit amet felis ac sagittis. Sed libero arcu,
             pharetra et ante in, elementum scelerisque arcu. Curabitur sagittis
             non justo at ultricies odio ac diam finibus.
           </div>
         </div>
         <div className='d-flex'>
           <div>
             <img id='three' src={doctorThree} alt='' />
           </div>
           <div className='ps-3 d-flex align-items-center'>
             Etiam dignissim sit amet felis ac sagittis. Sed libero arcu,
             pharetra et ante in, elementum scelerisque arcu. Curabitur sagittis
             non justo at ultricies odio ac diam finibus.
           </div>
         </div>

         <div className='d-flex'>
           <div>
             <img id='last' src={doctorfour} alt='' />
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