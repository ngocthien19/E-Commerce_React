import React from "react"
import Home from "../components/mainpage/Home"
import FlashDeals from "../components/flashDeals/FlashDeals"
import TopCate from "../components/top/TopCate"
import NewArrivals from "../components/newArrivals/NewArrivals"
import Discount from "../components/discount/Discount"
import Shop from "../components/shop/Shop"
import Annu from "../components/Annocuments/Annu"
import Wrapper from "../components/wrapper/Wrapper"

const Pages = ({ productItems, handleAddToCart, shopItems }) => {

    return (
        <>
            <Home />
            <FlashDeals 
                productItems={productItems}
                handleAddToCart={handleAddToCart}
            />
            <TopCate />
            <NewArrivals />
            <Discount />
            <Shop 
                shopItems={shopItems}
                handleAddToCart={handleAddToCart}
            />
            <Annu />
            <Wrapper />
        </>
    )
}

export default Pages