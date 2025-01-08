import React, { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { ShopContext } from "../context/ShopContext"
import ModalRemoveItem from "./ModalRemoveItem"
import './Cart.css'

const Cart = ({ cartItem, modalRemove, productToRemove, setProductToRemove, setModalRemove, handleAddToCart, handleDeleteCart, handleDeleteQty }) => {
    const { scrollToTop, toVND } = useContext(ShopContext)
    const totalPrice = cartItem.reduce((price, item) => price + (item.sale - item.sale * item.discount / 100) * item.qty, 0)
    return (
        <>
            <section className="cart-items">
                <div className="container cart">
                    <div className="cart-details" data-aos="zoom-in-right">
                        {cartItem.length === 0 && 
                            <h1 className="no-items cart-list" data-aos="zoom-in-right">No Items are added in Cart</h1>
                        }
                        {cartItem.map(item => {
                            const productQty = (item.sale - item.sale * item.discount / 100) * item.qty
                            return (
                                <div className="cart-list f_flex">
                                    <div className="img">
                                        <img src={item.cover} alt="" />
                                    </div>
                                    <div className="cart-info">
                                        <h3>{item.name}</h3>
                                        <div className="cart-price">
                                            <h4 className="price1">Price: {toVND(item.sale - item.sale * item.discount / 100)}</h4>
                                            <h4 className="total1">Total: {toVND(productQty)}</h4>
                                        </div>
                                    </div>
                                    <div className="cart-action">
                                        <div>
                                            <button className="remove-cart" onClick={() => {
                                                setProductToRemove(item)
                                                setModalRemove(true)
                                            }}>
                                                <i className="fa-solid fa-xmark"></i>
                                            </button>
                                        </div>
                                        <div className="cartControl d_flex">
                                            <button className="inCart" onClick={() => {
                                                setProductToRemove(item)
                                                handleDeleteQty(item)
                                            }}>
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
                                <h4>Product Quantity</h4>
                                <h3>{cartItem.length}</h3>
                            </div>
                            <div className="cart-total-content d_flex">
                                <h4>Total Price</h4>
                                <h3>{toVND(totalPrice)}</h3>
                            </div>
                            <div className="cart-total-content d_flex">
                                <h4>Fee</h4>
                                <span className="fee">Free</span>
                            </div>
                            <div className="cart-total-content d_flex">
                                <h4>Pay Total Price</h4>
                                <h3 className="color-price">{toVND(totalPrice)}</h3>
                            </div>
                            <Link to="/order" onClick={scrollToTop}><button className="pay">Order</button></Link>
                        </div>
                    }
                </div>
            </section>
            <ModalRemoveItem 
                modalRemove={modalRemove}
                productToRemove={productToRemove}
                setModalRemove={setModalRemove}
                handleDeleteCart={handleDeleteCart}
            />
        </>
    )
}

export default Cart