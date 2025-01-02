import React, { useState } from "react"
import { Link } from 'react-router-dom'
import ModalCategory from "./ModalCategory/ModalCategory"

const Navbar = ({ activeMenu, setActiveMenu }) => {

    const [mobileMenu, setMobileMenu] = useState(false)
    const [showCategory, setShowCategory] = useState(false)

    return(
        <>
            <header className="header">
                <div className="container d_flex">
                    <div className="categories d_flex" onClick={() => setShowCategory(!showCategory)} data-aos="fade-right">
                        <span className="fa-solid fa-border-all"></span>
                        <h4>Categories <i className="fa fa-chevron-down"></i></h4>
                    </div>
                    <ModalCategory 
                        showCategory={showCategory}
                        setShowCategory={setShowCategory}
                    />

                    <div className="nav_link" data-aos="fade-left">
                        <ul className={mobileMenu ? "nav-link-mobileMenu" : "link f_flex"} onClick={() => setMobileMenu(false)}>
                            <Link to="/">
                                <li onClick={() => setActiveMenu("home")} className="nav_link_item">
                                    Home {activeMenu === "home" ? <hr /> : <></>}
                                </li>
                            </Link>
                            <Link to="/menu">
                                <li onClick={() => setActiveMenu("menu")} className="nav_link_item">
                                    All Product {activeMenu === "menu" ? <hr /> : <></>}
                                </li>
                            </Link>
                            <Link to="/user">
                                <li onClick={() => setActiveMenu("user")} className="nav_link_item">
                                    User account {activeMenu === "user" ? <hr /> : <></>}
                                </li>
                            </Link>
                            <Link to="/track-order">
                                <li onClick={() => setActiveMenu("track-order")} className="nav_link_item">
                                    Track my order {activeMenu === "track-order" ? <hr /> : <></>}
                                </li>
                            </Link>
                            <Link to="/contact">
                                <li onClick={() => setActiveMenu("contact")} className="nav_link_item">
                                    Contact {activeMenu === "contact" ? <hr /> : <></>}
                                </li>
                            </Link>
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