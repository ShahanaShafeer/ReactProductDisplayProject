import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
    const nav=useNavigate();
    const [Data, setData] = useState({});
    const [error, seterror] = useState({})
    const [input, setinput] = useState(
        {
            email:" ",
            password:" "
        }
    )
    const handleChanege = (e) =>{
        setinput({...input,[e.target.name]:e.target.value})
    }
    console.log(input);

    const handleSubmit = async (e) =>{
        e.preventDefault();
        
            try {
                await axios.post("https://textile.torcdeveloper.com/api/v1/login",input)
                .then((res)=>setData(res.data));
              
                setTimeout(() => {
                    nav("/Home")
                });
                toast.success("login sucessfully", {
                    position: toast.POSITION.TOP_CENTER
                  });
              
            } catch (error) {
                toast.error(error?.message, {
                    position: toast.POSITION.TOP_CENTER
                  });
               
                  setTimeout(() => {
                    nav('/')
                });
                  
              console.log(error.message);
            }
    }
    console.log(Data);
    console.log(error);
  return (
    <div class="container">
        
	<div class="screen">
		<div class="screen_content">
            
			<form class="login" onSubmit={handleSubmit}>
				<div class="login_field">
					<input type="text" class="login_input" placeholder="Email" onChange={handleChanege} name="email"/>
				</div>
				<div class="login_field">
					<input type="password" class="login_input" placeholder="Password" onChange={handleChanege} name="password"/>
				</div>
				<button class="button login_submit">
					<span class="button_text">Log In Now</span>
				</button >	
               			
			</form>
			
		</div>
		<div class="screen_background">	
        <span class="screen_background_shape screen_background_shape4"></span>
		<span class="screen_background_shape screen_background_shape3"></span>		
		<span class="screen_background_shape screen_background_shape2"></span>
		<span class="screen_background_shape screen_background_shape1"></span>
		</div>		
	</div>
</div>
  )
}

export default Login