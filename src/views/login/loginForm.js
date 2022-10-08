import axios from "axios";
import React from "react";
import {useNavigate} from "react-router-dom";
import './loginForm.css';

const LoginForm = () => 
{
  //Declare an object of useNavigate class that allows to navigate between pages
  const navigate = useNavigate();

  // Handle the event thrown on the submit of the form
  const loginCheck = (e) => 
  {
    // Prevent the reinitialization of the form after the submit
    e.preventDefault();

    // get the input values of the 2 textboxes
    const email = e.target.email.value;
    const password = e.target.pass.value;
    
    // Store them together
    const article = { email : email, password: password};

    // call the function that contain the api post login request and send the article 
    //as a parameter
    loginRequest(article);
    
  };

  // call the api post login inside an async function
  async function loginRequest(article){
    try
    {
       //Call the api and store its response
       const response = await axios.post('https://reqres.in/api/login', 
       article);
       
       // Navigate to the page that shows the list of users
       navigate('/listUsers', {replace:true});
    }

    catch(error)
    {
      //show the error for the user
      alert(error.response.data.error);
    }

  }

  return (
    // create form that contains 2 textboxes, for email and password, and a button for login
    <form className="cover" onSubmit={loginCheck}>
        <h1 className="h1">Login</h1>
        <input type="text" name="email" placeholder="email"/>
        <input type="password" name="pass" placeholder="password"/>
        <button className="login-btn">Login</button>
    </form>
  )

}

export default LoginForm 