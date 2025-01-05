import React, { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import order from '../../assets/images/order.png'
import { ShopContext } from "../../common/context/ShopContext"
import './SearchItem.css'

const SearchItem = ({ searchTerm, filteredProducts, handleAddToCart, setFilteredProducts }) => {
    const { toVND, scrollToTop } = useContext(ShopContext)

    const [sortValue, setSortValue] = useState("default")
    const [originalProducts, setOriginalProducts] = useState([])
    const [selectedPrices, setSelectedPrices] = useState([])

    useEffect(() => {
        if (originalProducts.length === 0 && filteredProducts.length > 0) {
            setOriginalProducts([...filteredProducts])
        }
    }, [filteredProducts])

    useEffect(() => {
        filterPriceItem()
    }, [selectedPrices])
    
    const handleSort = (value) => {
        setSortValue(value)

        if (value === "default") {
            setFilteredProducts([...originalProducts])
            return
        }

        const sortProduct = [...filteredProducts];
        if (value === "asc") {
            sortProduct.sort((a, b) =>
                (a.sale - a.sale * a.discount / 100) - (b.sale - b.sale * b.discount / 100)
            )
        } else if (value === "dsc") {
            sortProduct.sort((a, b) =>
                (b.sale - b.sale * b.discount / 100) - (a.sale - a.sale * a.discount / 100)
            )
        }
        setFilteredProducts(sortProduct)
    }

    const handleCheckboxChange = (event) => {
        const { value, checked } = event.target

        if (checked) {
            setSelectedPrices((prev) => [...prev, value]) // Thêm giá trị nếu checkbox được chọn
        } else {
            setSelectedPrices((prev) => prev.filter((item) => item !== value)) // Xóa giá trị nếu bỏ chọn
        }
    }


    const filterPriceItem = () => {
        if (selectedPrices.length === 0) {
            setFilteredProducts(originalProducts)
            return
        }

        const filtered = originalProducts.filter((product) => {
            const price = product.sale - product.sale * product.discount / 100

            return selectedPrices.some((priceRange) => {
                switch (priceRange) {
                    case "below1":
                        return price < 1000000;
                    case "12":
                        return price >= 1000000 && price <= 2000000
                    case "23":
                        return price > 2000000 && price <= 3000000
                    case "34":
                        return price > 3000000 && price <= 4000000
                    case "above4":
                        return price > 4000000
                    default:
                        return false
                }
            })
        })

        setFilteredProducts(filtered)
    }
    
    return(
        <>
            <section className="search-item">
                <div className="container fl">
                    <div className="search-item-left">
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
                    </div>
                    <div className="search-item-right">
                        {filteredProducts.length === 0 &&
                            <div className="no-found">
                                <span className="no-item">No Items are founded</span>
                                <img src={order} alt="" />
                            </div>
                        }
                        {filteredProducts.length > 0 && 
                            <div className="content">
                                <div className="content-left">
                                    <h2 className="title">{searchTerm.trim()}</h2>
                                </div>
                                <div className="content-right">
                                    <span className="desc">{filteredProducts && filteredProducts.length} items found "{searchTerm.trim()}"</span>
                                    <div className="sort-by">
                                        <span>Sort By:</span>
                                        <select value={sortValue} onChange={(e) => handleSort(e.target.value)}>
                                            <option value="default">Best match</option>
                                            <option value="asc">Price low to high</option>
                                            <option value="dsc">Price high to low</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        }
                        <div className="search-item-container">
                            {filteredProducts.map((product) => {
                                return (
                                    <div className="box" key={product.id} data-aos="flip-left">
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
                                                        // onClick={() => increment(product.id)}
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
                                                        <h4>₫{toVND(product.sale - product.sale * product.discount / 100)}</h4>
                                                        <h4 className="sale">₫{toVND(product.sale)}</h4>
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
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SearchItem