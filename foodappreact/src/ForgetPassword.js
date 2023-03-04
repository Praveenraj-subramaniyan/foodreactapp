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
  
        if(response === "True"){
        alert("Password:")
          window.location.href = "/login";
        }
       else if(response === "False")
       {
        setIsVisible({
          status: 'visually-true',
          message: 'Not registered'
        });
       }
       else 
       {
        setIsVisible({
          status: 'visually-true',
          message: 'Server time out'
        });
       }
      
        }
    function handleSubmit(event) {
        event.preventDefault();
        if(data.confirmpassword === data.password)
        {
        const url ="http://localhost:3000/register"
        console.log(data)
        axios.post(url, data)
          .then((res) => {
            HandleResponse(res.data)
          })
          .catch((error) => {
            console.error(error);
          });
        }
        else{
             setIsVisible({
               status: 'visually-true',
               message: 'Password Mismatch'
             });
        }
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
