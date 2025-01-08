import React, { useState } from "react"
import Item from "../item/Item"
import './Style.css'

const ShopCart = ({ shopItems, handleAddToCart }) => {
    const [items, setItems] = useState(shopItems)
    
    const handleIncrement = (id) => {
        const newItem = items.map(item => {
            if (item.id === id) {
                return {...item, like: item.like + 1} 
            } else {
                return item
            }
        })
        setItems(newItem)
    }

    return(
        <>
            {items.map((product, i) => {
                return (
                    <Item 
                        key={i}
                        product={product}
                        discount={product.discount}
                        category={product.category}
                        id={product.id}
                        cover={product.cover}
                        like={product.like}
                        from={product.from}
                        name={product.name}
                        sale={product.sale}
                        handleAddToCart={handleAddToCart}
                    />
                )
            })}
        </>
    )
}

export default ShopCart