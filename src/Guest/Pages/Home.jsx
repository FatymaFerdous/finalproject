import React from 'react'
import CarouselstartGuest from "../Components/CarouselstartGuest.jsx";
import GadgetsGuest from "../Components/myGadgetsGuest.jsx"
import PetrolpriceGuest from '../Components/petrolPriceGuest.jsx'
import BrandsGuest from "../Components/BrandsGuest.jsx"
import CategoriesNameGuest from '../Components/CategoriesNameGuest.jsx'
import GuestFooter from '../Components/GuestFooter.jsx'

export default function myHome() {
    return (
        <>
         <CarouselstartGuest />
         <BrandsGuest />
         <CategoriesNameGuest />
         <GadgetsGuest />
         <PetrolpriceGuest />
         <GuestFooter />

        </>
    )
    
}
