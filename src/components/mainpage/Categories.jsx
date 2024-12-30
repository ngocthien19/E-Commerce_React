import React from "react"
import { category } from "../../data/data"

const Categories = () => {
    
    return (
        <>
            <div className="category">
                {category.map((item, i) => (
                    <div className="box f_flex" key={i}>
                        <img src={item.cateImg} alt={item.cateName} />
                        <span>{item.cateName}</span>
                    </div>
                ))}
            </div>
        </> 
    )
}

export default Categories