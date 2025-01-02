import React from "react"
import { TopCates } from "../../data/data"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const TopCart = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        appendDots: (dots) => {
            return <ul style={{ margin: "0px" }}>{dots}</ul>;
        },
    };
    return(
        <>
            <Slider {...settings}>
                {TopCates.map((item, i) => {
                    return (
                        <div className="box" key={i} data-aos="flip-right">
                            <div className="product">
                                <div className="nameTop d_flex">
                                    <span className="t-left">{item.para}</span>
                                    <span className="t-right">{item.desc}</span>
                                </div>
                                <div className="img">
                                    <img src={item.cover} alt="" />
                                </div>
                            </div>
                        </div>
                    )
                })}
            </Slider>
        </>
    )
}

export default TopCart