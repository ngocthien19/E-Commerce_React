import './Style.css'
import React from "react"
import Category from "./Category"
import ShopCart from "./ShopCart"

const Shop = ({ shopItems, handleAddToCart }) => {
    return(
        <>
            <section className="shop background">
                <div className="container flex">
                    <Category />

                    <div className="contentWidth">
                        <div className="heading d_flex">
                            <div className="heading-left row f_flex">
                                <h2>Mobile Phones</h2>
                            </div>
                            <div className="heading-right row">
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