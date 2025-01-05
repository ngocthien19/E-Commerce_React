import './Header.css'
import React from "react"
import Head from "./Head"
import Search from "./Search"
import Navbar from "./Navbar"

const Header = ({ cartItem, activeMenu, modalSearch, searchTerm, setSearchTerm, setActiveMenu, setFilteredProducts, setModalSearch }) => {
    
    return(
        <>
            <Head />
            <Search 
                cartItem={cartItem}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                setActiveMenu={setActiveMenu}
                modalSearch={modalSearch}
                setModalSearch={setModalSearch}
                setFilteredProducts={setFilteredProducts}
            />
            <Navbar 
                activeMenu={activeMenu}
                setActiveMenu={setActiveMenu}
            />
        </>
    )
}

export default Header