import React, { createContext } from "react"
import { ShopData } from "../../data/data"
import { Data } from "../../data/data"
import { NewArrivals } from "../../data/data"
import { DiscountData } from "../../data/data"
import { animate } from "framer-motion"

export const ShopContext = createContext()

const ShopContextProvider = ({ children }) => {

    const { shopItems } = ShopData
    const { productItems } = Data

    const newProduct = [...shopItems, ...productItems, ...NewArrivals, ...DiscountData]
    const scrollToTop = () => {
        const scrollAnimation = { from: window.scrollY, to: 0 };

        animate(scrollAnimation.from, scrollAnimation.to, {
            duration: 0.5, 
            onUpdate: (latest) => window.scrollTo(0, latest), 
        });
    };

    const toVND = (value) => {
        value = value.toString().replace(/\./g, "");
        const formatted = new Intl.NumberFormat("it-IT", {
            style: "currency",
            currency: "VND",
            })
            .format(value)
            .replace("₫", "")
            .trim();
        
        return formatted;
    }

    const valueContext = {newProduct, scrollToTop, toVND}
    return (
        <ShopContext.Provider value={valueContext}>
            {children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider