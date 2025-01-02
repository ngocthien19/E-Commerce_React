import React, { useContext } from "react"
import Arrow from '../../assets/arrow.svg'
import './BreadCrumb.css'
import { Link } from "react-router-dom"
import { ShopContext } from "../../common/context/ShopContext"

const BreadCrumb = ({ category, ItemProduct }) => {

    const { scrollToTop } = useContext(ShopContext)
    return(
        <>
            <div className="breadcrumb" data-aos="fade-down">
                <Link to="/" onClick={scrollToTop}><span>Home</span></Link>
                <img src={Arrow} alt="" />
                <Link to={`/${category}`} onClick={scrollToTop}><span>{category}</span></Link>
                <img src={Arrow} alt="" />  
                <span>{ItemProduct.name}</span>
            </div>
            
        </>
    )
}

export default BreadCrumb