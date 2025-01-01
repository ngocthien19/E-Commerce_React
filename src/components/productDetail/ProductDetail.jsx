import './ProductDetail.css'
import React, { useContext } from "react"
import BreadCrumb from "../breadcrumb/BreadCrumb"
import { useParams } from "react-router-dom"
import { ShopContext } from "../../common/context/ShopContext"
import RelatedProduct from "../RelatedProduct/RelatedProduct"
import Describe from "./Describe"


const ProductDetail = ({ category, handleAddToCart }) => {
    const { id } = useParams()
    const { newProduct, toVND } = useContext(ShopContext)
    
    const ItemProduct = newProduct.find(item => item.id === (+id))
    
    return(
        <>
            <section className="details">
                <div className="container">
                    <BreadCrumb 
                        category={category}
                        ItemProduct={ItemProduct}
                    />
                    <div className="details-container">
                        <div className="d-left">
                            <img src={ItemProduct.cover} alt={ItemProduct.name} className="img-large" />
                            <div className="box-img">
                                <img src={ItemProduct.cover} alt={ItemProduct.name} />
                                <img src={ItemProduct.cover} alt={ItemProduct.name} />
                                <img src={ItemProduct.cover} alt={ItemProduct.name} />
                                <img src={ItemProduct.cover} alt={ItemProduct.name} />
                            </div>
                        </div>
                        <div className="d-right">
                            <h2 className="title">{ItemProduct.name}</h2>
                            <div className="box-rate">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <span className="sold">({ItemProduct.sold})</span>
                            </div>
                            <div className="price">
                                <span className="under">₫{toVND(ItemProduct.price)}</span>
                                <span className="sale">₫{toVND(ItemProduct.sale)}</span>
                                <span className="off-price">(-{ItemProduct.discount}%)</span>
                            </div>
                            <p className="desc">{ItemProduct.desc}</p>
                            <button onClick={() => handleAddToCart(ItemProduct)} className="btn_action">Add to Cart</button>
                            <h4 className="sub-desc">Category: <span>{category}</span></h4>
                        </div>
                    </div>
                    <Describe 
                        category={category}
                        ItemProduct={ItemProduct}
                    />
                    <RelatedProduct 
                        newProduct={newProduct}
                        ItemProduct={ItemProduct}
                        handleAddToCart={handleAddToCart}
                    />
                </div>
            </section>
        </>
    )
}

export default ProductDetail