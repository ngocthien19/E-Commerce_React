import React, { useContext, useState } from "react"
import Order from '../../assets/images/order.png'
import { ShopContext } from "../context/ShopContext"
import { useNavigate  } from 'react-router-dom'
import ModalRemoveItem from "../cart/ModalRemoveItem"
import './PayOrder.css'

const PayOrder = ({ cartItem, itemPay, productToRemove, modalRemove, setProductToRemove, setModalRemove,
    setActiveMenu, setCartItem, setItemPay, handleDeleteCart
}) => {
    const navigate  = useNavigate()
    const { scrollToTop, toVND } = useContext(ShopContext)
    const [selectedValue, setSelectedValue] = useState('')

    const getTotalPrice = cartItem.reduce((total, item) => total + (item.sale - item.sale * item.discount / 100) * item.qty, 0)
    const percentList = [10, 25, 30]

    const handleChange = (event) => {
        setSelectedValue(event.target.value)
    }
    
    const totalAmount = getTotalPrice - (getTotalPrice * (selectedValue / 100))

    const handleGoAllProduct = () => {
        navigate('/item-search')
        scrollToTop()
    }

    const handlePay = () => {
        alert("Pay Successfully!")
        setItemPay([...itemPay, ...cartItem])
        setCartItem([])
        setActiveMenu("track-order")
        navigate('/track-order')
        scrollToTop()
    }

    const handleShowModalAndDelete = (item) => {
        setModalRemove(true)
        setProductToRemove(item)
    }
    
    return (
        <>
            <div className="order-pay container">
                <div className="box">
                    <div className="o-left" data-aos="fade-right">
                        <h3 className="order">Order Detail:</h3>
                        <p className="state">State: <strong>Accessed</strong></p>
                        <div className='table1'>
                            <table className="table-sub">
                                <thead>
                                    <tr className="tr">
                                        <th className="th">Name Product</th>
                                        <th className="th">Quantity</th>
                                        <th className="th">Price</th>
                                        <th className="th">Total Price</th>
                                        <th className="th"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cartItem.map((item, i) => {
                                        const productQty = (item.sale - item.sale * item.discount / 100) * item.qty
                                        return (
                                            <tr className="tr">
                                                <td className="td">{item.name}</td>
                                                <td className="td">{item.qty}</td>
                                                <td className="td">{toVND(item.sale - item.sale * item.discount / 100)}</td>
                                                <td className="td">{toVND(productQty)}</td>
                                                <td className="td">
                                                    <i className='fa fa-xmark' onClick={() => handleShowModalAndDelete(item)}></i>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="o-right" data-aos="fade-left">
                        <h2 className="order">Total</h2>
                        <div className="img"><img src={Order}  alt="" /></div>
                        <p className="total">Total Price: ₫{toVND(getTotalPrice)}</p>
                        <p className="promote">Apply promotional code:</p>
                        <select id="options" name="options" value={selectedValue} onChange={handleChange}>
                            <option value="" disabled selected hidden>--Choose--</option>
                            <option value={percentList[0]}>10%</option>
                            <option value={percentList[1]}>25%</option>
                            <option value={percentList[2]}>30%</option>
                        </select>
                        <hr />
                        <p className="amount">Total Amount: <span>₫{toVND(totalAmount)}</span></p>
                        <p className="method">Choose payment method:</p>
                        <select id="options" name="options" required>
                            <option value="" disabled selected hidden>--Choose--</option>
                            <option value="bank-card">Bank Card</option>
                            <option value="upon-receive">Upon Receive</option>
                        </select>
                        <div className="btn-action">
                            <button className="btn-extra" onClick={handleGoAllProduct}>Order extra</button>
                            <button className="btn-pay" onClick={handlePay}>Pay</button>
                        </div>
                    </div>
                </div>
            </div>
            <ModalRemoveItem 
                modalRemove={modalRemove}
                productToRemove={productToRemove}
                setModalRemove={setModalRemove}
                handleDeleteCart={handleDeleteCart}
            />
        </>
    )
}

export default PayOrder