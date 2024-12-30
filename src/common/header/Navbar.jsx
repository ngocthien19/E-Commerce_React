import React, { useState } from "react"
import { Link } from 'react-router-dom'
import ModalCategory from "./ModalCategory/ModalCategory"

const Navbar = () => {

    const [mobileMenu, setMobileMenu] = useState(false)
    const [activeMenu, setActiveMenu] = useState("home")

    const [showCategory, setShowCategory] = useState(false)

    return(
        <>
            <header className="header">
                <div className="container d_flex">
                    <div className="categories d_flex" onClick={() => setShowCategory(!showCategory)}>
                        <span className="fa-solid fa-border-all"></span>
                        <h4>Categories <i className="fa fa-chevron-down"></i></h4>
                    </div>
                    <ModalCategory 
                        showCategory={showCategory}
                        setShowCategory={setShowCategory}
                    />

                    <div className="nav_link">
                        <ul className={mobileMenu ? "nav-link-mobileMenu" : "link f_flex"} onClick={() => setMobileMenu(false)}>
                            <li onClick={() => setActiveMenu("home")} className="nav_link_item">
                                <Link to="/">Home {activeMenu === "home" ? <hr /> : <></>}</Link>
                            </li>
                            <li onClick={() => setActiveMenu("user")} className="nav_link_item">
                                <Link to="/user">User account {activeMenu === "user" ? <hr /> : <></>}</Link>
                            </li>
                            <li onClick={() => setActiveMenu("order")} className="nav_link_item">
                                <Link to="/order">Track my order {activeMenu === "order" ? <hr /> : <></>}</Link>
                            </li>
                            <li onClick={() => setActiveMenu("contact")} className="nav_link_item">
                                <Link to="/contact">Contact {activeMenu === "contact" ? <hr /> : <></>}</Link>
                            </li>
                        </ul>

                        <button className="toggle" onClick={() => setMobileMenu(!mobileMenu)}>
                            {mobileMenu ? <i className="fa fa-times close home-bth"></i> :
                                <i className="fas fa-bars open"></i>
                            }
                        </button>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar