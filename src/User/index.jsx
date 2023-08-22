import React from 'react'
import UserNav from './Components/UserNav'
import Category from './Pages/Category'
import Home from "./Pages/myHome";
import Products from './Pages/Products'
import OrderPlacement from './Pages/OrderPlacement'
import ProductPage from './Pages/ProductPage'
import Cart from './Pages/Cart'
import { Navigate, Route, Routes } from "react-router-dom";
import FooterEnd from './Components/FooterEnd'


export default function User() {

    return (

        <>
            <UserNav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/orderPlacement" element={<OrderPlacement />} />
                <Route path="/products" element={<Products />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/products/:_id" element={<ProductPage />} />
                <Route path="/category" element={<Category />} />
                <Route path="*" element={<Navigate to='/' replace={true} />} />
            </Routes>

            <FooterEnd />


        </>
    )
}

  