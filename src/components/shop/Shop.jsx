import './Style.css'
import React, { useContext } from "react"
import Category from "./Category"
import ShopCart from "./ShopCart"
import { ShopContext } from '../../common/context/ShopContext'
import { useNavigate } from 'react-router-dom'

const Shop = ({ shopItems, handleAddToCart, setSearchTerm }) => {
    const { scrollToTop } = useContext(ShopContext)
    const navigate = useNavigate()
    const handleGoAllProduct = () => {
        setSearchTerm("")
        navigate('/item-search')
        scrollToTop()
    }
    return(
        <>
            <section className="shop background">
                <div className="container flex">
                    <Category />

                    <div className="contentWidth" data-aos="zoom-in-right">
                        <div className="heading d_flex" data-aos="fade-down">
                            <div className="heading-left row f_flex">
                                <h2>Mobile Phones & Hat</h2>
                            </div>
                            <div className="heading-right row" onClick={handleGoAllProduct}>
                                <span>View all</span>
                                <i className="fa fa-caret-right icon"></i>
                            </div>
                        </div>
                        <div className="product-content grid3">
                            <ShopCart 
                                shopItems={shopItems}
                                handleAddToCart={handleAddToCart}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Shop