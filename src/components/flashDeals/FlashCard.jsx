import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import React, { useContext, useState } from "react"
import Slider from "react-slick"
import Item from "../item/Item"

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

    return (
        <>
            <Slider {...settings}>
                {products.map((product, i) => {
                    return (
                        <Item 
                            key={i}
                            product={product}
                            discount={product.discount}
                            category={product.category}
                            id={product.id}
                            cover={product.cover}
                            like={product.like}
                            from={product.from}
                            name={product.name}
                            sale={product.sale}
                            handleAddToCart={handleAddToCart}
                        />
                    )
                })}
            </Slider>
        </>
    )
}

export default FlashCard
