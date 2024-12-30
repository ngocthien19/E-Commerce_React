import React, { useContext } from "react"
import { DiscountData } from "../../data/data"
import Slider from "react-slick"
import { Link } from "react-router-dom/cjs/react-router-dom.min"
import { ShopContext } from "../../common/context/ShopContext"
import './Style.css'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const DisCart = () => {
    const { scrollToTop } = useContext(ShopContext)
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
    };
    return(
        <>
            <Slider {...settings}>
                {DiscountData.map((item, i) => {
                    return (
                        <div className="box">
                            <div className="product">
                                <div className="img">
                                    <Link to={`/${item.category}/${item.id}`} onClick={scrollToTop}>
                                        <img src={item.cover} alt="" />
                                    </Link>
                                </div>
                                <h4>{item.name}</h4>
                                <p>${item.price}.00</p>
                            </div>
                        </div>
                    )
                })}
            </Slider>
        </>
    )
}

export default DisCart