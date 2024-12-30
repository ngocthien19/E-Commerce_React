import React from "react"
import './Cart.css'

const Cart = ({ cartItem, handleAddToCart, handleDeleteCart, handleDeleteQty }) => {
    const totalPrice = cartItem.reduce((price, item) => price + item.price * item.qty, 0)
    return (
        <>
            <section className="cart-items">
                <div className="container cart">
                    <div className="cart-details">
                        {cartItem.length === 0 && 
                            <h1 className="no-items cart-list">No Items are added in Cart</h1>
                        }
                        {cartItem.map(item => {
                            const productQty = item.price * item.qty
                            return (
                                <div className="cart-list f_flex">
                                    <div className="img">
                                        <img src={item.cover} alt="" />
                                    </div>
                                    <div className="cart-info">
                                        <h3>{item.name}</h3>
                                        <div className="cart-price">
                                            <h4 className="price1">Price: ${item.price}.00</h4>
                                            <h4 className="total1">Total: ${productQty}.00</h4>
                                        </div>
                                    </div>
                                    <div className="cart-action">
                                        <div>
                                            <button className="remove-cart" onClick={() => handleDeleteCart(item)}>
                                                <i className="fa-solid fa-xmark"></i>
                                            </button>
                                        </div>
                                        <div className="cartControl d_flex">
                                            <button className="inCart" onClick={() => handleDeleteQty(item)}>
                                                <i className="fa fa-minus"></i>
                                            </button>
                                            <span className="qty">{item.qty}</span>
                                            <button className="inCart" onClick={() => handleAddToCart(item)}>
                                                <i className="fa fa-plus"></i>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="cart-item-price"></div>
                                </div>
                            )
                        })}
                    </div>
                    {cartItem.length > 0 && 
                        <div className="cart-total">
                            <h2>Cart Summary</h2>
                            <div className="cart-total-content d_flex">
                                <h4>Total Price</h4>
                                <h3>${totalPrice}.00</h3>
                            </div>
                            <div className="cart-total-content d_flex">
                                <h4>Fee</h4>
                                <span className="fee">Free</span>
                            </div>
                            <div className="cart-total-content d_flex">
                                <h4>Pay Total Price</h4>
                                <h3>${totalPrice}.00</h3>
                            </div>
                        </div>
                    }
                </div>
            </section>
        </>
    )
}

export default Cart