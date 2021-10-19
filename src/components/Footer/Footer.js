import React from 'react';
import './Footer.css'

const Footer = () => {
 return (
  <div className="">
<footer>
   <div className="my-row">
    <div className="my-col">
     <p>I am doing web dev</p>
     <h1>a</h1>
     
    </div>
    <div className="my-col">
     <h4>Quick Links</h4>
     <ul>
      <li>Home</li>
      <li>Features</li>
      <li>Services</li>
      <li>About Us</li>
     </ul>
    </div>
    <div className="my-col">
     <h4>Useful Links</h4>
     <ul>
      <li>Premises</li>
      <li>FAQs</li>
      <li>Specialities</li>
     </ul>
    </div>
    <div className="my-col"><h4>Contact Us</h4>
    <ul>
     <li>b21,GHK street,Mirpur,Dhaka</li>
     <li>healthylife@ourHospital.com</li>
     <li>+88 123456789</li>
    </ul>
    </div>
   </div>
  </footer>
  </div>
 );
};

export default Footer;