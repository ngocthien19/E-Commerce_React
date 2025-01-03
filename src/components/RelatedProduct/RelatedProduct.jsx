import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { ShopContext } from "../../common/context/ShopContext"
import './RelatedProduct.css'

const RelatedProduct = ({ newProduct, ItemProduct, handleAddToCart }) => {
    const newProductExcept = newProduct.filter(item => item.id !== ItemProduct.id && item.category === ItemProduct.category)
    const { scrollToTop, toVND } = useContext(ShopContext)
    
    return(
        <>
            <div className="related-products">
                <h2 className="title" data-aos="fade-down">Related Products</h2>
                <div className="related-gird5">
                        {newProductExcept.map((product, i) => {
                            return (
                                <div className="box" key={product.id}>
                                    <div className="product" data-aos="flip-right">
                                        <div className="img">
                                            <div className="discount">
                                                <span className="percent">{product.discount}%</span>
                                                <span className="off">OFF</span>
                                            </div>
                                            <Link to={`/${product.category}/${product.id}`} onClick={scrollToTop}>
                                                <img src={product.cover} alt="" className="related-img"/>
                                            </Link>
                                            <div className="product-like">
                                                <label>{product.like}</label> <br />
                                                <i
                                                    className="fa-regular fa-heart"
                                                        // onClick={() => handleIncrement(product.id)}
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
                                                    <h4>₫{toVND(product.price)}</h4>
                                                    <h4 className="sale">₫{toVND(product.sale)}</h4>
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

export default RelatedProduct