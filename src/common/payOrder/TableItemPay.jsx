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
    return (
        <>
            <div className='table1 container'>
                <h2 className='title'>My order</h2>
                <div className='table'>
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
                                const productQty = item.price * item.qty
                                return (
                                    <tr>
                                        <td>{item.id}</td>
                                        <td onClick={() => handleNavigateAndScroll(item)}>
                                            <img src={item.cover} alt='' />
                                        </td>
                                        <td>{item.name}</td>
                                        <td>{item.qty}</td>
                                        <td>{toVND(item.price)}</td>
                                        <td>{toVND(productQty)}</td>
                                        <td>Accessed</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                {itemPay.length === 0 &&
                    <span className='no-product'>No products are ordered</span>
                }
            </div>
        </>
    )
}

export default TableItemPay