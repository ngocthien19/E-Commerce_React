import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import React, { useContext, useState } from "react"
import Slider from "react-slick"
import { Link } from "react-router-dom"
import { ShopContext } from "../../common/context/ShopContext"

const FlashCard = ({ productItems, handleAddToCart }) => {

    const [products, setProducts] = useState(productItems)

    const increment = (id) => {
        const updatedProducts = products.map((product) => {
            if (product.id === id) {
                return { ...product, like: product.like + 1 }; 
            }
            return product; 
        });
        setProducts(updatedProducts); 
    };

    const NextArrow = ({ onClick }) => {
        return (
            <div className="control-btn" onClick={onClick}>
                <button className="next">
                    <i className="fa fa-long-arrow-alt-right"></i>
                </button>
            </div>
        );
    };

    const PrevArrow = ({ onClick }) => {
        return (
            <div className="control-btn" onClick={onClick}>
                <button className="prev">
                    <i className="fa fa-long-arrow-alt-left"></i>
                </button>
            </div>
        );
    };

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        appendDots: (dots) => {
            return <ul style={{ margin: "0px" }}>{dots}</ul>;
        },
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    const { scrollToTop } = useContext(ShopContext)

    return (
        <>
            <Slider {...settings}>
                {products.map((product) => {
                    return (
                        <div className="box" key={product.id}>
                            <div className="product">
                                <div className="img">
                                    <div className="discount">
                                        <span className="percent">{product.discount}%</span>
                                        <span className="off">OFF</span>
                                    </div>
                                    <Link to={`/${product.category}/${product.id}`} onClick={scrollToTop}>
                                        <img src={product.cover} alt="" />
                                    </Link>
                                    <div className="product-like">
                                        <label>{product.like}</label> <br />
                                        <i
                                            className="fa-regular fa-heart"
                                            onClick={() => increment(product.id)}
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
            </Slider>
        </>
    )
}

export default FlashCard
