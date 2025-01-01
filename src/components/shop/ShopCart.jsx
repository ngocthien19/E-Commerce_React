import React, { useContext, useState } from "react"
import './Style.css'
import { ShopContext } from "../../common/context/ShopContext"

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

    const { toVND } = useContext(ShopContext)
    return(
        <>
            {items.map((product) => {
                return (
                    <div className="box" key={product.id}>
                        <div className="product">
                            <div className="img">
                                <div className="discount">
                                    <span className="percent">{product.discount}%</span>
                                    <span className="off">OFF</span>
                                </div>
                                <img src={product.cover} alt="" />
                                <div className="product-like">
                                    <label>{product.like}</label> <br />
                                    <i
                                        className="fa-regular fa-heart"
                                        onClick={() => handleIncrement(product.id)}
                                    ></i>
                                </div>
                            </div>

                            <div className="product-details">
                                <h3>{product.name}</h3>
                                <div className="rate">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                </div>
                                <div className="price">
                                    <div className="p-price">
                                        <h4>₫{toVND(product.price)}</h4>
                                        <h4 className="sale">₫{toVND(product.sale)}</h4>
                                    </div>
                                    <button onClick={() => handleAddToCart(product)}>
                                        <i className="fa fa-plus"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default ShopCart