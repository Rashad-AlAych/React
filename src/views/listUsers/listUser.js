import React, { useEffect, useState } from "react";
import './listUser.css';
import axios from "axios";
import Grid from '@mui/material/Grid'
import {useNavigate} from "react-router-dom";

const ListUsers = () => 
{

    //Declare an object of useNavigate class that allows to navigate between pages
    const navigate = useNavigate();

    const [listUsers, setListUsers] = useState(null);
    const [loading, setLoading] = useState(false);

    const callListUsers = async () => 
    {
    // call the api get users 
    try
    {
       //Call the api and store its response
       const data = await axios.get('https://reqres.in/api/users?page=2')
       .then(res => {
        console.log(res.data.data);
        setListUsers(res.data.data)});
        setLoading(true);       
    }

    catch(error)
    {
      //show the error for the user
      console.log(error);
    }
  };

  // Call the callListUsers Function
  useEffect (() => {
    callListUsers();
  }, [])

  // declarar
  function goBack()
  {
     // Navigate to the page that shows the list of users
     navigate('/', {replace:true});
  }


  return( <div>
    {loading ? 
    <div>
    {/* //When data is loaded from server, the following tags are executed */}
    <div className="userList">
      {
        // map over the listUsers array to show the image and name of each user
        listUsers.map((user, index) => {
          return  <div key={index} className="user">
                    {/* // display the user image */}
                    <img src= {user['avatar']}/>
                    {/* //display the user name */}
                    <h1>{user['first_name']} {user['last_name']}</h1>
                    <br></br>
                  </div>
        })
      }
      
    </div>
    {/* // create button for Logout */}
    <button onClick={goBack}>Logout</button>

    </div>
   
    :
    // If data not loaded yet from the server, show the below message for the user
    <h1>Data Loading ... </h1>}
  </div>
  )}

export default ListUsers