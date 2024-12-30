import React from "react"
import './Style.css'
import DisCart from "./DisCart"

const Discount = () => {
    return(
        <>
            <section className="topDiscount background">
                <div className="container">
                    <div className="heading d_flex">
                        <div className="heading-left row f_flex">
                            <i class="fa-solid fa-gift"></i>
                            <h2>Big Discount</h2>
                        </div>
                        <div className="heading-right row">
                            <span>View all</span>
                            <i className="fa fa-caret-right"></i>
                        </div>
                    </div>
                    <DisCart />
                </div>
            </section>
        </>
    )
}

export default Discount