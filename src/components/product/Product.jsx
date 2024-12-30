import React, { useContext } from "react"
import { ShopContext } from "../../common/context/ShopContext"
import { Link } from "react-router-dom"
import './Product.css'

const Product = ({ category, banner, handleAddToCart }) => {
    const { newProduct } = useContext(ShopContext)
    const productsItem = newProduct.filter(item => item.category === category)

    const { scrollToTop } = useContext(ShopContext)
    
    return(
        <>
            <div className="product-detail">
                <img src={banner} alt={category} className="banner" />
                <h2 className="title">{category} Product</h2>
                <div className="container-product">
                    {productsItem.map((product) => {
                        return (
                            <div className="box" key={product.id}>
                                <div className="product">
                                    <div className="img">
                                        <div className="discount">
                                            <span className="percent">{product.discount}%</span>
                                            <span className="off">OFF</span>
                                        </div>
                                        <Link to={`/${category}/${product.id}`} onClick={scrollToTop}>
                                            <img src={product.cover} alt="" />
                                        </Link>
                                        <div className="product-like">
                                            <label>{product.like}</label> <br />
                                            <i
                                                className="fa-regular fa-heart"
                                                // onClick={() => handleIn(product.id)}
                                            ></i>
                                        </div>
                                    </div>

                                    <div className="product-details">
                                        <h3>{product.name}</h3>
                                        <div className="rate">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                        <div className="price">
                                            <div className="p-price">
                                                <h4>{product.price}.00</h4>
                                                <h4 className="sale">{product.sale}.00</h4>
                                            </div>
                                            <button onClick={() => handleAddToCart(product)}>
                                                <i className="fa fa-plus"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Product