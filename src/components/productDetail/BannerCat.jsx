import React, { useContext } from "react"
import './BannerCat.css'
import { Link } from "react-router-dom"
import { ShopContext } from "../../common/context/ShopContext"


const BannerCat = ({ ItemProduct }) => {

    const {scrollToTop, newProduct, toVND} = useContext(ShopContext) 

    const randomIntFromInterval = (min, max) => { 
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    const getRandomItems =(arr, count) => {
        const randomIds = new Set()

        while (randomIds.size < count) {
            randomIds.add(randomIntFromInterval(1, 55))
            if (randomIds.has(ItemProduct?.id)) {
                randomIds.delete(ItemProduct.id)
            }
        }

        return arr.filter(item => randomIds.has(item?.id))
    }

    const listBannerCat = getRandomItems(newProduct, 3) 

    return(
        <>
            <div className="banner-cat" data-aos="zoom-out-left">
                <h3 className="title">Top Highlight Category</h3>
                {listBannerCat.map((item, i) => {
                    return (
                        <div className="box" key={i}>     
                            <Link to={`/${item.category}/${item.id}`} onClick={scrollToTop}>
                                <img src={item.cover} alt="" className="icon-img"/>
                            </Link>          
                            <h4 className="name">{item.name}</h4>
                            <p className="name-price">₫{toVND(item.price)}</p>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default BannerCat