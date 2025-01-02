import React, { createContext } from "react"
import { ShopData, Data, NewArrivals, DiscountData, categoriesNav } from "../../data/data"

export const ShopContext = createContext()

const ShopContextProvider = ({ children }) => {

    const { shopItems } = ShopData
    const { productItems } = Data

    const newProduct = [...shopItems, ...productItems, ...NewArrivals, ...DiscountData, ...categoriesNav]
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth" 
        })
    }

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