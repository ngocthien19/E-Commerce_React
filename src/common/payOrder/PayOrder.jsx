import React, { useContext, useState } from "react"
import Order from '../../assets/images/order.png'
import { ShopContext } from "../context/ShopContext"
import { useNavigate  } from 'react-router-dom'
import './PayOrder.css'

const PayOrder = ({ cartItem, setCartItem, setItemPay, handleDeleteCart }) => {
    const navigate  = useNavigate()
    const { scrollToTop, toVND } = useContext(ShopContext)
    const [selectedValue, setSelectedValue] = useState('')

    const getTotalPrice = cartItem.reduce((total, item) => total + item.price * item.qty, 0)
    const percentList = [10, 25, 30]

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };
    
    const totalAmount = getTotalPrice - (getTotalPrice * (selectedValue / 100))

    const handleGoAllProduct = () => {
        navigate('/menu')
        scrollToTop()
    }

    const handlePay = () => {
        alert("Pay Successfully!")
        setItemPay(cartItem)
        setCartItem([])
        navigate('/track-order')
        scrollToTop()
    }
    
    return (
        <>
            <div className="order-pay container">
                <div className="box">
                    <div className="o-left">
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
                                        <th className="th">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cartItem.map((item, i) => {
                                        const productQty = item.price * item.qty
                                        return (
                                            <tr className="tr">
                                                <td className="td">{item.name}</td>
                                                <td className="td">{item.qty}</td>
                                                <td className="td">{toVND(item.price)}</td>
                                                <td className="td">{toVND(productQty)}</td>
                                                <td className="td">
                                                    <i className='fa fa-xmark' onClick={() => handleDeleteCart(item)}></i>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="o-right">
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
                        <p className="amount">Total Amount: ₫{toVND(totalAmount)}</p>
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
        </>
    )
}

export default PayOrder