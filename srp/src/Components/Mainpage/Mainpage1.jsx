import React from 'react'
import first from './first.jpg';
import second from './second.jpg';
import third from './third.jpg';
import fourth from './fourth.jpg';
// import { Container } from 'react-bootstrap'
// import './Footer.css'
import './Middle1.css'
import { Link } from 'react-router-dom'
const Card = () => {
 return (
  <div className="body">
    <div className="card">
      <div className="card-side card-side-front">
        <img src={first} alt="" width="290" height="200" className="rounded-image" />
        <h3>RARE DISEASES</h3>
        <p className='text'>The Most High Cost Payable Diseases for Treatment</p>
      </div>
      <div className="card-side card-side-back">
        <h3>RARE DISEASES</h3>
        <p className='text'>Rare diseases, also known as orphan diseases, are a group of disorders that affect a small percentage of the population. These conditions are characterized by their low prevalence, often affecting fewer than 1 in 2,000 people. While each individual rare disease is uncommon, collectively they impact a significant number of individuals worldwide.</p>
        <a href="/thirdpage" className='btn'>View Details</a>
      </div>
    </div>
    <div className="card">
      <div className="card-side card-side-front1">
        <img src={second} alt="" width="290" height="200"  className="rounded-image"/>
        <h3>HOSPITALS</h3>
        <p className='text'>Best Hospitals that provide free Treatment & Less Fee for Treatment</p>
      </div>
      <div className="card-side card-side-back1">
        <h3>HOSPITALS</h3>
        <p className='text'>Hospitals are healthcare institutions designed to provide a wide range of medical services, treatment, and care to individuals with various health conditions. These institutions play a crucial role in the healthcare system and are often equipped with advanced medical technology and a diverse team of healthcare professionals. Here is a brief description of hospitals.</p>
       <a href="/fifthpage" className='btn'>View Details</a>
      </div>
    </div>
    <div className="card">
      <div className="card-side card-side-front2">
        <img src={third} alt="" width="290" height="200"  className="rounded-image"/>
        <h3>Organisations</h3>
        <p className='text'>Best Organisations and their Addresses that helps to Poor People </p>
      </div>
      <div className="card-side card-side-back2">
        <h3>Organisations</h3>
        <p className='text'>Donors are individuals, organizations, or entities that contribute resources, typically in the form of financial support, to support a cause, organization, or project. The act of donating involves voluntarily giving one's time, money, or other valuable assets with the intention of making a positive impact on the recipient or the broader community.</p>
       <Link to="/fourthpage"  className='btn'>View Details</Link>
      </div>
    </div>
    <div className="card">
      <div className="card-side card-side-front3">
        <img src={fourth} alt="" width="290" height="200" className="rounded-image" />
        <h3>HELPLINES</h3>
        <p className='text'>Important Helpline Numbers that useful for everyone including poor people's </p>
      </div>
      <div className="card-side card-side-back3">
        <h3>HELPLINES</h3>
        <p className='text'>Helpline centers are specialized facilities or services that provide assistance, support, and information to individuals in need through telephone, online chat, or other communication channels. These centers are often established to address specific issues or concerns and are staffed by trained professionals or volunteers. Here's a description of helpline centers.</p> 
       <a href="/sixthpage" className='btn'>View Details</a>
      </div>
    </div>
    
    </div>
 );
};

export default Card;