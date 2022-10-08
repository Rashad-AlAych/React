import React, { useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import App from '../App';
import ListUsers from '../views/listUsers/listUser';
import LoginForm from '../views/login/loginForm';

function Webrouter() {
    return (
        <Router >
            <Routes>
                { <Route path="/" element={<LoginForm/>} />}
                { <Route path="/listUsers" element={<ListUsers/>} />}
            </Routes>
        </Router>
    )
}

export default Webrouter;