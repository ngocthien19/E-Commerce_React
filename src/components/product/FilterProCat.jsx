import React from "react"
import './FilterProCat.css'

const FilterProCat = ({ productsItem, setSelectedBrands, setSelectedPrices, setSelectedFrom }) => {

    const setBrand = new Set()
    const listBrand =  []
    productsItem.forEach(product => {
        if (product.brand && !setBrand.has(product.brand)) {
            listBrand.push(product.brand)
            setBrand.add(product.brand)
        }
    })

    console.log(listBrand)
    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target

        if (checked) {
            setSelectedPrices(prev => [...prev, value])
        } else {
            setSelectedPrices(prev => prev.filter(price => price!== value))
        }
    }

    const handleCheckboxBrand = (e) => {
        const { value, checked } = e.target

        if (checked) {
            setSelectedBrands(prev => [...prev, value])
        } else {
            setSelectedBrands(prev => prev.filter(price => price!== value))
        }
    }

    const handleCheckboxChangeFrom = (e) => {
        const { value, checked } = e.target

        if (checked) {
            setSelectedFrom(prev => [...prev, value])
        } else {
            setSelectedFrom(prev => prev.filter(price => price!== value))
        }
    }

    return(
        <>
            <div className="price-range">
                <div className="box-price">
                    <span>Price</span>
                    <i class="fa-solid fa-chevron-up"></i>
                </div>
                <div className="checkbox-container">
                    <div className="checkbox">
                        <input type="checkbox" id="below1" value="below1" onChange={handleCheckboxChange} />
                        <label htmlFor="below1">Below 1.000.000đ</label>
                    </div>
                    <div className="checkbox">
                        <input type="checkbox" id="12" value="12" onChange={handleCheckboxChange}/>
                        <label htmlFor="12">1.000.000đ - 2.000.000đ</label>
                    </div>
                    <div className="checkbox">
                        <input type="checkbox" id="23" value="23" onChange={handleCheckboxChange}/>
                        <label htmlFor="23">2.000.000đ - 3.000.000đ</label>
                    </div>
                    <div className="checkbox">
                        <input type="checkbox" id="34" value="34" onChange={handleCheckboxChange}/>
                        <label htmlFor="34">3.000.000đ - 4.000.000đ</label>
                    </div>
                    <div className="checkbox">
                        <input type="checkbox" id="above4" value="above4" onChange={handleCheckboxChange}/>
                        <label htmlFor="above4">Above 4.000.000đ</label>
                    </div>
                </div>
            </div>
            <div className="price-range">
                <div className="box-price">
                    <span>Brand</span>
                    <i class="fa-solid fa-chevron-up"></i>
                </div>
                <div className="checkbox-container">
                    {listBrand && 
                        listBrand.map((item, i) => {
                            return (
                                <div className="checkbox">
                                    <input type="checkbox" id={i} value={item} onChange={handleCheckboxBrand}/>
                                    <label htmlFor={i}>{item}</label>
                                </div>
                            )  
                        })
                    }
                </div>
            </div>
            <div className="price-range">
                <div className="box-price">
                    <span>Ship From</span>
                    <i class="fa-solid fa-chevron-up"></i>
                </div>
                <div className="checkbox-container from-container">
                    <div className="checkbox">
                        <input type="checkbox" id="vn" value="Việt Nam" onChange={handleCheckboxChangeFrom} />
                        <label htmlFor="vn">Việt Nam</label>
                    </div>
                    <div className="checkbox">
                        <input type="checkbox" id="china" value="China" onChange={handleCheckboxChangeFrom}/>
                        <label htmlFor="china">China</label>
                    </div>
                    <div className="checkbox">
                        <input type="checkbox" id="hq" value="Hàn Quốc" onChange={handleCheckboxChangeFrom}/>
                        <label htmlFor="hq">Hàn Quốc</label>
                    </div>
                    <div className="checkbox">
                        <input type="checkbox" id="nb" value="Nhật Bản" onChange={handleCheckboxChangeFrom}/>
                        <label htmlFor="nb">Nhật Bản</label>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FilterProCat