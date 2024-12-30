import React, { useContext } from "react"
import { NewArrivals } from "../../data/data"
import { Link } from "react-router-dom"
import { ShopContext } from "../../common/context/ShopContext"
import './Style.css'

const Cart = () => {
    const { scrollToTop } = useContext(ShopContext)
    return(
        <>
            <div className="content gird">
                {NewArrivals.map((item, i) => {
                    return (
                        <div className="box">     
                            <Link to={`/${item.category}/${item.id}`} onClick={scrollToTop}>
                                <img src={item.cover} alt="" className="icon"/>
                            </Link>          
                            <h4>{item.name}</h4>
                            <p>${item.price}.00</p>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Cart