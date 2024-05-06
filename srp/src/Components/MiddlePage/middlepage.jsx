import React from 'react'
import './middlepage.css'
import logo from './image1.jpg'
import logo1 from './Indiamap.png'
function middlepage() {
  return (
    <div className='container3'>
         <div>
         <div>   
           <p className='p'>Hand In Hand</p>
           {'\n'}
           <p className='p1'>------------------</p>
          {'\n'}
          <h6 className='h'>Medical Bills are a Burden for Many Individuals and Families </h6>
          <p className='p2'>
Expenses related to hospital stays, cancer treatments with high- cost chemotherapy routines, and other medicinal costs can be even higher. Treatment costs and necessary living expenses can bring the best of families to the brink of experiencing hard times. Insurance plans are not enough, as policies do not cover everything you need.
       
<img className='img' src={logo} alt=""/>
</p>
<h6 className='h1_info'>Try Hand in Hand</h6>
<div className='bg'>
  
  <p className='bg_image'>
  
    <p className='info'>Stop worrying about rising medical bills, or debts and start a medical fundraising campaign with Hand in Hand. Our online Funding platform is rated the best in Asia. Funding is the easiest way to avail support from friends, family and numerous individuals who are waiting to donate funds.</p></p>
</div>
</div> 
    <div className='p_bg'>
    <p className='hr1'><b>________________________________________________________________________________________________________________________________________________________________________________________</b></p>
    </div>
    <div className="_2nd_title_div">
      <p className='_2nd_title'>What is Hand In Hand ?</p>
      {'\n'}
      <p className='dsctn'>Online Funding is an alternative method for individuals and organisations to generate funds required for costly medical treatments like open-heart surgeries, NICU care, bone marrow transplant, cancer treatments and any other diseases. </p>
    </div>
    {'\n'}
    <div>
      <p className='dtls3'>
      <p className='dtls'>Funding is the process of raising funds with the help of people across the country, using donation-based fundraising platforms as the medium. Hand in Hand on ImpactGuru helps fund your emergency medical treatment or chosen cause with free 24*7 support & expert assistance. Anyone can raise funds on donation platforms - from a newborn child, senior citizens to NGOs & more!
 
With donation-based funding, getting financial help for patients in India is convenient and reliable. Unlike medical loans and insurance, fundraising via online funding platforms requires no liability to pay back the funds raised. So, all the amount generated can be used to cover the cost of emergency medical treatment.
 <img className='ind_bg' src={logo1} alt=""/>
  </p></p>
    </div>
    </div>
   </div>
  )
}

export default middlepage