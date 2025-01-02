import React, { useContext } from "react"
import { category } from "../../data/data"
import { useNavigate } from "react-router-dom"
import { ShopContext } from "../../common/context/ShopContext"

const Categories = () => {
    const navigate = useNavigate()

    const {scrollToTop} = useContext(ShopContext)
    
    const handleNavigate = (category) => {
        navigate(`/${category}`)
        scrollToTop()
    }
    return (
        <>
            <div className="category" data-aos="zoom-in-right">
                {category.map((item, i) => (
                    <div className="box f_flex" key={i} onClick={() => handleNavigate(item.cateName)}>
                        <img src={item.cateImg} alt={item.cateName} />
                        <span>{item.cateName}</span>
                    </div>
                ))}
            </div>
        </> 
    )
}

export default Categories