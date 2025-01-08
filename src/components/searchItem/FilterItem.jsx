import React, { useContext, useEffect } from "react"
import './FilterItem.css'
import { ShopContext } from "../../common/context/ShopContext"

const FilterItem = ({ originalProducts, filtered, selectedPrices,  selectedBrands, selectedFrom, setSelectedFrom,
    setSelectedPrices, setSelectedBrands, setFilteredProducts 
}) => {

    const { newProduct } = useContext(ShopContext)
    
    // list chua tat ca brand listItemPerPage
    const branList = []
    const brandSet = new Set()
    newProduct.forEach(item => {
        
        if (item.brand && !brandSet.has(item.brand)) {
            branList.push(item.brand)
            brandSet.add(item.brand)
        }
    })

    branList.sort((a, b) => a.localeCompare(b))

    useEffect(() => {
        filterPriceBrandFromItem()
    }, [selectedPrices, selectedBrands, selectedFrom])
    
    const handleCheckboxChangePrice = (event) => {
        const { value, checked } = event.target
        
        if (checked) {
            setSelectedPrices((prev) => [...prev, value]) // Thêm giá trị nếu checkbox được chọn
        } else {
            setSelectedPrices((prev) => prev.filter((item) => item !== value)) // Xóa giá trị nếu bỏ chọn
        }
    }

    const filterPriceBrandFromItem = () => {
        if (selectedPrices.length === 0 && selectedBrands.length === 0 && selectedFrom.length === 0) {
            setFilteredProducts(originalProducts)
            return
        }

        setFilteredProducts(filtered)
    }

    const handleCheckboxChangeBrand = (event) => {
        const { value, checked } = event.target
        
        if (checked) {
            setSelectedBrands((prev) => [...prev, value]) // Thêm giá trị nếu checkbox được chọn
        } else {
            setSelectedBrands((prev) => prev.filter((item) => item !== value)) // Xóa giá trị nếu bỏ chọn
        }
    }

    const handleCheckboxChangeFrom = (event) => {
        const { value, checked } = event.target
        
        if (checked) {
            setSelectedFrom((prev) => [...prev, value]) // Thêm giá trị nếu checkbox được chọn
        } else {
            setSelectedFrom((prev) => prev.filter((item) => item !== value)) // Xóa giá trị nếu bỏ chọn
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
                        <input type="checkbox" id="below1" value="below1" onChange={handleCheckboxChangePrice} />
                        <label htmlFor="below1">Below 1.000.000đ</label>
                    </div>
                    <div className="checkbox">
                        <input type="checkbox" id="12" value="12" onChange={handleCheckboxChangePrice}/>
                        <label htmlFor="12">1.000.000đ - 2.000.000đ</label>
                    </div>
                    <div className="checkbox">
                        <input type="checkbox" id="23" value="23" onChange={handleCheckboxChangePrice}/>
                        <label htmlFor="23">2.000.000đ - 3.000.000đ</label>
                    </div>
                    <div className="checkbox">
                        <input type="checkbox" id="34" value="34" onChange={handleCheckboxChangePrice}/>
                        <label htmlFor="34">3.000.000đ - 4.000.000đ</label>
                    </div>
                    <div className="checkbox">
                        <input type="checkbox" id="above4" value="above4" onChange={handleCheckboxChangePrice}/>
                        <label htmlFor="above4">Above 4.000.000đ</label>
                    </div>
                </div>
            </div>
            <div className="price-range">
                <div className="box-price">
                    <span>Brand</span>
                    <i class="fa-solid fa-chevron-up"></i>
                </div>
                <div className="checkbox-container brand-container">
                    {branList.map((item, i) => {
                        return (
                        <div className="checkbox" key={i}>
                            <input type="checkbox" id={i} value={item} onChange={handleCheckboxChangeBrand}/>
                            <label htmlFor={i}>
                                {item}
                            </label>
                        </div>
                        )
                    })}
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

export default FilterItem