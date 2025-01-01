import React, { useContext } from "react"
import Cart from "./Cart"
import './Style.css'
import { useNavigate } from "react-router-dom"
import { ShopContext } from "../../common/context/ShopContext"

const NewArrivals = () => {
    const { scrollToTop } = useContext(ShopContext)
    const navigate = useNavigate()
    const handleGoAllProduct = () => {
        navigate('/menu')
        scrollToTop()
    }
    return(
        <>
            <section className="topArrival background">
                <div className="container">
                    <div className="heading d_flex">
                        <div className="heading-left row f_flex">
                            <i class="fa-duotone fa-regular fa-newspaper"></i>  
                            <h2>New Arrivals</h2>
                        </div>
                        <div className="heading-right row" onClick={handleGoAllProduct}>
                            <span>View all</span>
                            <i className="fa fa-caret-right"></i>
                        </div>
                    </div>
                    <Cart />
                </div>
            </section>
        </>
    )
}

export default NewArrivals