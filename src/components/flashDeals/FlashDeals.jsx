import React from "react"
import './FlashDeals.css'
import FlashCard from "./FlashCard"

const FlashDeals = ({ productItems, handleAddToCart }) => {
    return (
        <>
            <section className="flash background">
                <div className="container">
                    <div className="heading f_flex">
                        <i className="fa fa-bolt"></i>
                        <h1>Flash Deals</h1>
                    </div>
                    <FlashCard 
                        productItems={productItems}
                        handleAddToCart={handleAddToCart}
                    />
                </div>
            </section>
        </>
    )
}

export default FlashDeals