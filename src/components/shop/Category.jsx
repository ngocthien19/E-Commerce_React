import React from "react"
import { BrandData } from "../../data/data"
import './Style.css'

const Category = () => {
    return(
        <>
            <div className="category" data-aos="zoom-in-right">
                <div className="brand d_flex">
                    <h1>Brands</h1>
                    <h1>Shops</h1>
                </div>
                <div className="mb100">
                    {BrandData.map((item, i) => {
                        return (
                            <div className="box1 f_flex" key={i}>
                                <img src={item.cateImg} alt="" />
                                <span>{item.cateName}</span>
                            </div>
                        )
                    })}
                </div>
                <button className="btn-action">View All Brands</button>
            </div>
        </>
    )
}

export default Category