import React, { useContext } from 'react'
import './TableItemPay.css'
import { ShopContext } from '../context/ShopContext'
import { useNavigate } from 'react-router-dom'

const TableItemPay = ({ itemPay }) => {
    const { toVND, scrollToTop } = useContext(ShopContext)
    const navigate = useNavigate()

    const handleNavigateAndScroll = (item) => {
        navigate(`/${item.category}/${item.id}`)
        scrollToTop()
    }

    const getTotalQty = () => itemPay.reduce((total, item) => total + item.qty, 0)
    const getTotalPrice = () => itemPay.reduce((total, item) => total + (item.sale - item.sale * item.discount / 100) * item.qty, 0)
    return (
        <>
            <div className='table1 container'>
                <h2 className='title' data-aos="fade-down">My order</h2>
                <div className='table' data-aos="fade-down">
                    <table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Image</th>
                                <th>Name Product</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Total Price</th>
                                <th>State</th>
                            </tr>
                        </thead>
                        <tbody>
                            {itemPay.map((item, i) => {
                                const productQty = (item.sale - item.sale * item.discount / 100) * item.qty
                                return (
                                    <tr>
                                        <td>{item.id}</td>
                                        <td onClick={() => handleNavigateAndScroll(item)}>
                                            <img src={item.cover} alt='' />
                                        </td>   
                                        <td>{item.name}</td>
                                        <td>{item.qty}</td>
                                        <td>{toVND((item.sale - item.sale * item.discount / 100))}</td>
                                        <td>{toVND(productQty)}</td>
                                        <td>Accessed</td>
                                    </tr>
                                )
                            })}
                            {itemPay.length > 0 && 
                                    <tr className='tr-color'>
                                    <td className='total'>Total:</td>
                                    <td></td>   
                                    <td></td>
                                    <td className='total'>{getTotalQty() > 0 && getTotalQty()}</td>
                                    <td></td>
                                    <td className='total'>{toVND(getTotalPrice() > 0 && getTotalPrice())}</td>
                                    <td></td>
                                </tr>
                            }
                        </tbody>
                    </table>
                </div>
                {itemPay.length === 0 &&
                    <div data-aos="zoom-out"><span className='no-product'>No products are ordered</span></div>
                }
            </div>
        </>
    )
}

export default TableItemPay