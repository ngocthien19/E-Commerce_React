import React from "react"
import BreadCrumb from "../breadcrumb/BreadCrumb"
import BannerCat from './BannerCat'
import './Describe.css'

const Describe = ({ category, ItemProduct }) => {
    
    return(
        <>
            <div className="describe-container">
                <div className="desc-left">
                    <h2 className="title">PRODUCT DETAIL</h2>
                    <div className="box-desc">
                        <span className="sub-title">Directory</span>
                        <span className="details-desc">
                            <BreadCrumb 
                                category={category}
                                ItemProduct={ItemProduct}
                            />
                        </span>
                    </div>
                    <div className="box-desc">
                        <span className="sub-title">Quantity of promotional items</span>
                        <span className="details-desc">{ItemProduct.promote}</span>
                    </div>
                    <div className="box-desc">
                        <span className="sub-title">Quantity of goods remaining</span>
                        <span className="details-desc">{ItemProduct.remain}</span>
                    </div>
                    <div className="box-desc">
                        <span className="sub-title">Guarantee</span>
                        <span className="details-desc">{ItemProduct.guarantee}</span>
                    </div>
                    <h2 className="title mt">DESCRIBE PRODUCT</h2>
                    <p className="desc">- {ItemProduct.blog1}</p>
                    <p className="desc">- {ItemProduct.blog2}</p>
                    <p className="desc">- {ItemProduct.blog3}</p>
                    <p className="desc">- {ItemProduct.blog4}</p>
                </div>
                <div className="d-right">
                    <BannerCat 
                        ItemProduct={ItemProduct}
                    />
                </div>
            </div>
        </>
    )
}

export default Describe