import React from 'react'
import Home from './pages/Home'
import Category from './pages/Category'
import Products from './pages/Products'
import { Route, Routes } from "react-router-dom";
import NavigationBar from './components/NavigationBar';

export default function Admin() {
    return (
        <>
            <NavigationBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/category" element={<Category />} />
                <Route path="/products" element={<Products />} />
                <Route path="*" element={<Home />} />
            </Routes>

        </>
    )
}
