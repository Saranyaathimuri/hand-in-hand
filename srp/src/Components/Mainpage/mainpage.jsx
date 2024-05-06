import React from 'react'
import logo1 from './first.jpg'
import logo from './second.jpg'
import logo2 from './third.jpg'
import logo3 from './fourth.jpg'
import { Container } from 'react-bootstrap'
import './Footer.css'
import './Middle.css'
import { Link } from 'react-router-dom'
function mainpage() {
  return (
    <div>
    <div>   
        <h1 className='p'>OUR SERVICES</h1>
        {'\n'}
        <h1 className='p1'>------------------</h1>
       {'\n'}
       </div>
       <br/>
       <br/>
       <br/>
       
       <h3 class="con">RAREDISEASES</h3>
       

       <Container className='con1'>
       <figure className='position-relative'>

     <img src={logo} alt="a latte" className="img-fluid" />
     <figcaption>
     
      
    
      <button class="b1"><h4><Link to="/#">View Details</Link></h4></button>
   
       </figcaption>
     </figure>
   
 </Container>
    
    <br/>
    <br/>
    <h3 class="con" >HOSPITALS</h3>
    


<container1>
   <figure className='position-relative'>
     <img className='ind_bg' src={logo1} alt=""/>
     <figcaption >
       
       
       <button  class="b1"><h4><Link to="/fifthpage">View Details</Link></h4></button>
    
     </figcaption>
     </figure>
     </container1>
    
     <br/>
     <br/>
    
     <h3 class="con">DONORS</h3>
   

<container2>
<figure className='position-relative'>
     <img className='ind' src={logo2} alt=""/>
     <figcaption >
       
       <button class="b1"><h4>View Details</h4></button>
    
     </figcaption>
     </figure>
     </container2>
     <br/>
     <br/>
     

     <h3 class="con">HELPLINES</h3>
     

     <container3>
<figure className='position-relative'>
     <img className='img1' src={logo3} alt=""/>
   
     <figcaption >
       
       
       <button class="b1"><h4>View Details</h4></button>
    
     </figcaption>
     </figure>
     </container3>
     <br/>
     <br/>
     <div >
       <div className='footer'>
    <div className="footer_bg">
         <div className='about_logo'> </div>
         <p className='title_footer' >Hand in Hand</p>
         </div>
   <div className='about_us'>
    <div className='query'>
     <p style={{fontFamily:'times new roman'}}>For Any Queries ?</p>
     <p style={{fontFamily:'times new roman'}}>Email :<a href='gmail.com'>handinhand@gmail.com</a></p>
     <p style={{fontFamily:'times new roman'}}>Contact:<a href='phone.co'>6300355608</a>
     <p className='contact'><a href='phone.co'>6281825250</a></p>
         <p className='contact'><a href='phone.co'>6302350217</a></p></p>
        
    <p className='social_link'>Social Media Links</p>
    <div>
    <div className='instagram'>
    <p style={{display:"inline"}} className='instagram_po'> Instagram</p></div>
    
    <div className="facebook">
    <p style={{display:"inline"}} className='facebook_po'>FaceBook</p></div>
   
    <div className="youtube">
    <p style={{display:"inline"}} className='youtube_po'>YouTube</p></div>
 
    <div className="whatsapp">
    <p style={{display:"inline"}} className='whatsapp_po'>WhatsApp</p></div>
   
    <div className="twitter">
    <p style={{display:"inline"}} className='twitter_po'>Twitter</p></div>
    </div>
    </div>
    <div >
     <p className='about_line'>____________________________________________________________________________________________</p>
     <p className='copyright'>Copyright@2023 Hand In Hand | All Rights Reserved </p>
     <p className='copyright'>| Terms of User | Privacy Policy |</p>
     </div>
    </div>
  </div>
  </div>
 </div>
  )
}

export default mainpage ;