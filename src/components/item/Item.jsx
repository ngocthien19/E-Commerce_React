import React, { useContext } from "react"
import { ShopContext } from "../../common/context/ShopContext"
import { Link } from "react-router-dom"
import './Item.css'

const Item = ({ discount, category, id, from, cover, sale, name, like, product, handleAddToCart }) => {
    const { toVND, scrollToTop } = useContext(ShopContext)

    const formatNumber = (number) => {
        if (number >= 1000000) {
            return `${(number / 1000000).toFixed(1)}M`
        }
        if (number >= 1000) {
            return `${(number / 1000).toFixed(1)}K`
        }
        return number.toString()
    }
    
    return(
        <>
            <div className="box-item" data-aos="flip-left">
                <div className="product-item">
                    <div className="img-item">
                        <div className="discount-item">
                            <span className="percent-item">{discount}%</span>
                            <span className="off-item">OFF</span>
                        </div>
                        <Link to={`/${category}/${id}`} onClick={scrollToTop}>
                            <img src={cover} alt=""/>
                        </Link>
                        <div className="product-like-item">
                            <label>{formatNumber(like)}</label> <br />
                            <i
                                className="fa-regular fa-heart"
                                // onClick={() => increment(product.id)}
                            ></i>
                        </div>
                    </div>
    
                    <div className="product-details-item">
                        <Link to={`/${category}/${id}`} onClick={scrollToTop}>
                            <h3>{name}</h3>
                        </Link>
                        <div className="rate-item">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                        </div>
                        <div className="price-item">
                            <div className="p-price-item">
                                <h4>₫{toVND(sale - sale * discount / 100)}</h4>
                                <h4 className="sale-item">₫{toVND(sale)}</h4>
                            </div>
                            <button onClick={() => handleAddToCart(product)}>
                                <i className="fa fa-plus"></i>
                            </button>
                        </div>
                        <div className="from">
                            <span>{from}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Item