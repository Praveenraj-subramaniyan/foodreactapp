import React, { useState } from 'react';
import { Link  } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function LoginPage() {

  
  const [data, setData] = useState({
    emailid: '',
    password: '',
  });
  const [isVisible, setIsVisible] = useState({
    status:'visually-hidden',
    message:'null'
  });
  function HandleResponse(response) {
  
    if(response === "True"){
      window.location.href = "/home";
      console.log(response)
    }
    else if (response === "Invalid")
    {
      setIsVisible({
        status: 'visually-true',
        message: 'Invalid username and password'
      });
    }
   else if(response === "False")
   {
    setIsVisible({
      status: 'visually-true',
      message: 'Invalid password'
    });
    
   }
    }
  
  
  function handleSubmit(event) {
    event.preventDefault();
    const url ="http://localhost:3000/login"
    axios.post(url, data)
      .then((res) => {
        HandleResponse(res.data)
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function handleData(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    setData(prevState => ({
      ...prevState,
      [name]: value,
    }));

    
  }
  
  return (
    <div className='Login container'>
      <form id='loginForm' onSubmit={handleSubmit}>
        <input
          type='email'
          name='emailid'
          value={data.emailid}
          onChange={handleData}
          placeholder='Username'
          required
        />
        
        <input
          type='password'
          name='password'
          value={data.password}
          onChange={handleData}
          placeholder='Password'
          required
        />
        <label htmlFor='emailid'  className={isVisible.status}>{isVisible.message}</label>
        <button type='submit' className='btn btn-primary btn-block btn-large inputbox'>
          Login
        </button>
        <div className='links'>
        <Link to='/register'>
          <a href='#' className='link'>
            Register
          </a>
        </Link>
        <Link to='/forgetpassword'>
        <a href='#' className='link'>
          Forgot password?
        </a>
        </Link>

      </div>
      </form>
      
    </div>
  );
}

export default LoginPage;
