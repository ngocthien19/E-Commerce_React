import React, { useContext } from "react"
import logo from '../../assets/logo.svg'
import { Link } from "react-router-dom"
import { ShopContext } from "../context/ShopContext"

const Search = ({ cartItem, setActiveMenu }) => {
    window.addEventListener("scroll", function() {
        const search = this.document.querySelector('.search')
        search.classList.toggle("active", window.scrollY > 100)
    })

    const { scrollToTop } = useContext(ShopContext)
    const handleScrollAndActiveMenu = () => {
        setActiveMenu("home")
        scrollToTop()
    }

    const getTotalQty = () => {
        return cartItem.reduce((total, item) => total + item.qty, 0);
    }
    return(
        <>
        <section className="search">
            <div className="container c_flex">
                <div className="logo width" data-aos="fade-right">
                    <Link to="/" onClick={handleScrollAndActiveMenu}>
                        <img src={logo} alt="" />
                    </Link>
                </div>
                <div className="search-box f_flex" data-aos="fade-left">
                    <i className="fa fa-search"></i>
                    <input type="text" placeholder="Search and hit enter..." />
                    <span>All Categories</span>
                </div>

                <div className="icon f_flex width" data-aos="fade-left">
                    <i className="fa fa-user icon-circle"></i>
                    <div className="cart">
                        <Link to="/cart" onClick={scrollToTop}>
                            <i className="fa fa-shopping-bag icon-circle"></i>
                            <span>{getTotalQty() > 0 ? getTotalQty() : ""}</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Search