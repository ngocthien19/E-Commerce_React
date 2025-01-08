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
            <section className="details">
                <div className="container">
                    <BreadCrumb 
                        category={category}
                        ItemProduct={ItemProduct}
                    />
                    <div className="details-container">
                        <div className="d-left" data-aos="zoom-out-right">
                            <img src={ItemProduct.cover} alt={ItemProduct.name} className="img-large" />
                            <div className="box-img">
                                <img src={ItemProduct.cover} alt={ItemProduct.name} />
                                <img src={ItemProduct.cover} alt={ItemProduct.name} />
                                <img src={ItemProduct.cover} alt={ItemProduct.name} />
                                <img src={ItemProduct.cover} alt={ItemProduct.name} />
                            </div>
                        </div>
                        <div className="d-right" data-aos="zoom-out-left">
                            <h2 className="title">{ItemProduct.name}</h2>
                            <div className="box-rate">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <span className="sold">({ItemProduct.sold})</span>
                                <span className='like'>Liked: {formatNumber(ItemProduct.like)}</span>
                            </div>
                            <div className="price">
                                <span className="under">₫{toVND(ItemProduct.sale - ItemProduct.sale * ItemProduct.discount / 100)}</span>
                                <span className="sale">₫{toVND(ItemProduct.sale)}</span>
                                <span className="off-price">(-{ItemProduct.discount}%)</span>
                            </div>
                            <p className="desc">{ItemProduct.desc}</p>
                            <p className='brand'>Brand: <span>{ItemProduct.brand}</span></p>
                            <p className='from'>From: <span>{ItemProduct.from}</span></p>
                            <h4 className="sub-desc">Category: <span>{category}</span></h4>
                            <button onClick={() => handleAddToCart(ItemProduct)} className="btn_action">Add to Cart</button>
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