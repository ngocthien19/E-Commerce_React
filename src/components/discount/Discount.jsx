import React, { useContext } from "react"
import DisCart from "./DisCart"
import './Style.css'
import { useNavigate } from "react-router-dom"
import { ShopContext } from "../../common/context/ShopContext"

const Discount = ({ setSearchTerm }) => {
    const { scrollToTop } = useContext(ShopContext)
    const navigate = useNavigate()
    const handleGoAllProduct = () => {
        setSearchTerm("")
        navigate('/item-search')
        scrollToTop()
    }
    return(
        <>
            <section className="topDiscount background">
                <div className="container">
                    <div className="heading d_flex">
                        <div className="heading-left row f_flex" data-aos="fade-down">
                            <i class="fa-solid fa-gift"></i>
                            <h2>Big Discount</h2>
                        </div>
                        <div className="heading-right row" onClick={handleGoAllProduct} data-aos="fade-down"> 
                            <span>View all</span>
                            <i className="fa fa-caret-right"></i>
                        </div>
                    </div>
                    <DisCart />
                </div>
            </section>
        </>
    )
}

export default Discount