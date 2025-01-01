import React, { useContext } from "react"
import './Style.css'
import TopCart from "./TopCart"
import { useNavigate } from "react-router-dom"
import { ShopContext } from "../../common/context/ShopContext"

const TopCate = () => {
    const { scrollToTop } = useContext(ShopContext)
    const navigate = useNavigate()
    const handleGoAllProduct = () => {
        navigate('/menu')
        scrollToTop()
    }
    return(
        <>
            <section className="topCat background">
                <div className="container">
                    <div className="heading d_flex">
                        <div className="heading-left row f_flex">
                            <i className="fa fa-border-all"></i>
                            <h2>Top Categories</h2>
                        </div>
                        <div className="heading-right row" onClick={handleGoAllProduct}>
                            <span>View all</span>
                            <i className="fa fa-caret-right"></i>
                        </div>
                    </div>
                    <TopCart />
                </div>
            </section>
        </>
    )
}

export default TopCate