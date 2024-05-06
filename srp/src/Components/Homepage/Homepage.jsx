/* eslint-disable no-lone-blocks */
import React from 'react'
import './Homepage.css'
import "bootstrap/dist/css/bootstrap.min.css"
import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom';
function Homepage() {
         // ... (existing code)
        
          const navigate = useNavigate();
          const [fullName, setFullName] = useState('');
          const [email, setEmail] = useState('');
          const [password, setPassword] = useState('');
         const handleSubmit = async (event) => {
          event.preventDefault();
      
          const fullName = event.target.fullName?.value;
          const email = event.target.email?.value;
          const password = event.target.password.value;

          console.log("Form Data:", { fullName, email, password });

          if (!fullName || !email || !password) {
            console.error("Missing required fields");
            return;
          }
        
          const formData = {
            fullName,
            email,
            password,
          };
          
  try {
    const response = await fetch("http://localhost:5000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (response.ok) {
      console.log(data.message);
      // You can redirect or perform other actions upon successful signup
    } else {
      console.error(data.error);
      // Handle error cases
    }
  } catch (error) {
    console.error("Error occurred:", error);
  }
  navigate('/secondpage');
};

// ... (existing code)



  const [text, setText] = useState("")
const [fullText] = useState(
    "Hand In Hand Is the Best Way To Raise Money for Medical Expences"
  )
const [index, setIndex] = useState(0)
useEffect(() => {
  if (index < fullText.length) {
    setTimeout(() => {
      setText((prevText) => prevText + fullText[index]);

      setIndex(index + 1)
    }, 40)
  }

},

[fullText, index, text])
  let [authMode, setAuthMode] = useState("signin")

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin")
  }
 
  if(authMode === "signin") {
    return(
  

  <div className="container_homepage">
  <div className='background-img'>
  <h1 className="quote">Hand In Hand Is the Best Way To Raise Money for Medical Expences</h1>
  <div className="Auth-form-container"> 
  <form className="Auth-form" onSubmit={handleSubmit}>
    <div className="Auth-form-content">
      <h3  className="Auth-form-title">Sign In</h3>
      <div type="button" className="text-center">
        Not registered yet?{" "}
        <span type="button" className="link-primary" onClick={changeAuthMode}>
          Sign Up
        </span>
      </div>
      <div className="form-group mt-3">
        <label>Email address</label>
        <input
          type="email"
          name="email"
          className="form-control mt-1"
          placeholder="Enter email"
          value={email} onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group mt-3">
        <label>Password</label>
        <input
          type="password"
          name="password"
          className="form-control mt-1"
          placeholder="Enter password"
          value={password} onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="d-grid gap-2 mt-3">
        <button type="submit" className="button">
          Submit
        </button>
      </div>
      <p type="button" className="text-center mt-2">
        Forgot password?
      </p>
    </div>
  </form>
</div>
</div>
</div>
)
}
return(
  <div className="container_homepage">
       <div className='background-img'>
       <h1 className="quote">Hand In Hand Is the Best Way To Raise Money for Medical Expences</h1>
<div className="Auth-form-container">
<form className="Auth-form" onSubmit={handleSubmit}>

  <div className="Auth-form-content">
    <h3  className="Auth-form-title">Sign In</h3>
    <div className="text-center">
      Already registered?{" "}
      <span type="button" className="link-primary" onClick={changeAuthMode}>
        Sign In
      </span>
    </div>
    <div className="form-group mt-3">
      <label>Full Name</label>
      <input
        type="text"
        name="fullName"
        className="form-control mt-1"
        placeholder="e.g gana "
        value={fullName} onChange={(e) => setFullName(e.target.value)}
      />
    </div>
    <div className="form-group mt-3">
      <label>Email address</label>
      <input
        type="email"
        name="email"
        className="form-control mt-1"
        placeholder="Email Address"
        value={email} onChange={(e) => setEmail(e.target.value)}
      />
    </div>
    <div className="form-group mt-3">
      <label>Password</label>
      <input
        type="password"
        name="password"
        className="form-control mt-1"
        placeholder="Password"
        value={password} onChange={(e) => setPassword(e.target.value)}
      />
    </div>
    <div className="d-grid gap-2 mt-3">
      <button type="submit" className=" button">
       Submit
      </button>
    </div>
    <p type="button"className="text-center mt-2">
      Forgot password?
    </p>
  </div>
</form>
</div>
</div>
</div>
)
}

export default Homepage;