import React, { useState } from 'react';
import { Link  } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import axios from 'axios';


function ForgetPassword() {
    const [data, setData] = useState({
        emailid: ''
      });
      const [isVisible, setIsVisible] = useState({
        status:'visually-hidden',
        message:'null'
      });
      function HandleResponse(response) {
  
        if(response === "False"){
            setIsVisible({
                status: 'visually-true',
                message: 'Invalid Username'
              });
        }
       else 
       {
        alert("Password:" + response.password)
        window.location.href = "/login";
       }
      
        }
    function handleSubmit(event) {
        event.preventDefault();
        const url ="http://localhost:3000/forgetpassword"
        console.log(data)
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
        <div className="container">
        <form action="" onSubmit={handleSubmit}>
          <h2>Forget Password</h2>
          <input type="email" name="emailid" placeholder='Username' id="email" value={data.emailid} onChange={handleData} required />
          <label for="confirmpassword" className={isVisible.status}>{isVisible.message}</label>
          <button className='isloginbtn'>Submit</button> <br/>
          <Link to='/login'>
          <button className='isloginbtn'>Login</button>
          </Link>
        </form>
      </div>
    );

}

export default ForgetPassword;
