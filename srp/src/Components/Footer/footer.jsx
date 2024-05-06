import React from 'react'
import "./footer.css"
function footer() {
  return (
    <div className='footer'>
      <div className='dis'>
       <div className="footer_bg">
            <div className='about_logo'> </div>
            <p className='title_footer' >Hand in Hand</p>
      
      <div className='about_us'>
       <div className='query'>
        <p style={{fontFamily:'times new roman'}}>For Any Queries ?</p>
        <p style={{fontFamily:'times new roman'}}>Email :<a href='gmail.com'>handinhand@gmail.com</a></p>
        <p style={{fontFamily:'times new roman'}}>Contact:<a href='phone.co'>6300355608</a>
            <p className='contact'><a href='phone.co'>6302350217</a></p></p>
            </div>
        </div>
        </div>
        <div className='social'>
       <p className='social_link'>Social Media Links</p>
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

  )
}

export default footer