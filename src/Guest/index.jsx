import React from 'react'
import GuestNav from './Components/GuestNav.jsx'
import {Navigate, Route, Routes} from "react-router-dom";
import Home from './Pages/Home.jsx';
import Login from './Pages/Login.jsx'
import Products from './Pages/Products.jsx'
import Signup from './Pages/Signup.jsx'


export default function Guest() {
    return (
        <>
            <GuestNav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="*" element={<Navigate to='/login' replace={true} />} />
            </Routes>
          
            
        </>
    )
}
