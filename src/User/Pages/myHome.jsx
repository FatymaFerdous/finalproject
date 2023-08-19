import React from 'react'
import Carouselstart from "../Components/Carouselstart";
import Gadgets from "../Components/myGadgets"
import Petrolprice from '../Components/petrolPrice'
import Contact from "../Components/Contact";


export default function myHome() {
    return (
        <>
         <Carouselstart />
         <Gadgets />
         <Petrolprice />
         <Contact />
         
        </>
    )
}
