import React, { useContext } from "react"
import logo from '../../assets/logo.svg'
import { Link } from "react-router-dom"
import { ShopContext } from "../context/ShopContext"

const Search = ({ cartItem }) => {
    window.addEventListener("scroll", function() {
        const search = this.document.querySelector('.search')
        search.classList.toggle("active", window.scrollY > 100)
    })

    const { scrollToTop } = useContext(ShopContext)

    const getTotalQty = () => {
        return cartItem.reduce((total, item) => total + item.qty, 0);
    }
    return(
        <>
        <section className="search">
            <div className="container c_flex">
                <div className="logo width">
                    <Link to="/" onClick={scrollToTop}>
                        <img src={logo} alt="" />
                    </Link>
                </div>
                <div className="search-box f_flex">
                    <i className="fa fa-search"></i>
                    <input type="text" placeholder="Search and hit enter..." />
                    <span>All Categories</span>
                </div>

                <div className="icon f_flex width">
                    <i className="fa fa-user icon-circle"></i>
                    <div className="cart">
                        <Link to="/cart">
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