import React from "react"
import banner1 from "../../assets/images/banner-1.png"
import banner2 from "../../assets/images/banner-2.png"
import './Annu.css'

const Annu = () => {
    return (
        <>
            <section className="anno background">
                <div className="container box">
                    <div className="img1">
                        <img src={banner1} width="100%" height="100%"/>
                    </div>
                    <div className="img2">
                        <img src={banner2} width="100%" height="100%"/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Annu