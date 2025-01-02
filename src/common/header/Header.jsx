import './Header.css'
import React from "react"
import Head from "./Head"
import Search from "./Search"
import Navbar from "./Navbar"

const Header = ({ cartItem, activeMenu, setActiveMenu }) => {
    
    return(
        <>
            <Head />
            <Search 
                cartItem={cartItem}
                setActiveMenu={setActiveMenu}
            />
            <Navbar 
                activeMenu={activeMenu}
                setActiveMenu={setActiveMenu}
            />
        </>
    )
}

export default Header