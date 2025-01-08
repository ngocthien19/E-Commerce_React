import React, { useContext, useEffect, useMemo, useState } from "react"
import { ShopContext } from "../../common/context/ShopContext"
import Item from "../item/Item"
import FilterProCat from "./FilterProCat"
import order from '../../assets/images/order.png'
import './Product.css'
import NoProAndSort from "./NoProAndSort"

const Product = ({ category, banner, selectedPrices, selectedBrands, selectedFrom,
    setSelectedBrands, setSelectedPrices, setSelectedFrom, handleAddToCart 
}) => {
    const { newProduct } = useContext(ShopContext)
    const [sortValue, setSortValue] = useState("default")

    const productsItem = useMemo(() => {
        return newProduct.filter((item) => item.category === category)
    }, [newProduct, category])

    const [filterProCategory, setFilterProCategory] = useState(productsItem)
    const [originalProducts, setOriginalProducts] = useState([])

    useEffect(() => {
        setFilterProCategory(productsItem)
        setOriginalProducts([...productsItem])
    }, [productsItem])

    useEffect(() => {
        if (selectedPrices.length === 0 && selectedBrands.length === 0 && selectedFrom.length === 0) {
            setFilterProCategory(productsItem)
        } else {
            if (filtered && filtered.length > 0) {
                setFilterProCategory(filtered) 
            } else if (filtered && filtered.length === 0) {
                setFilterProCategory([])
            }
        }
    }, [selectedPrices, selectedBrands, selectedFrom, productsItem])

    const filtered = productsItem.filter((product) => {
        const price = product.sale - (product.sale * product.discount) / 100

        const matchesPrice = 
            selectedPrices.length === 0 ||
            selectedPrices.some((priceRange) => {
            switch (priceRange) {
                case "below1":
                    return price < 1000000
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

        const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand)

        const matchesFrom = selectedFrom.length === 0 || selectedFrom.includes(product.from)

        return matchesPrice && matchesBrand && matchesFrom
    })

    return(
        <>
            <div className="product-detail">
                <img src={banner} alt="" className="banner" data-aos="fade-down" />
                <h2 className="title" data-aos="fade-down">{category} Product</h2>
                <div className="content">
                    <div className="product-detail-left">
                        <FilterProCat 
                            productsItem={productsItem}
                            setSelectedPrices={setSelectedPrices}
                            setSelectedBrands={setSelectedBrands}
                            setSelectedFrom={setSelectedFrom}
                        />
                    </div>
                    <div className="product-detail-right">
                        <NoProAndSort 
                            filterProCategory={filterProCategory}
                            sortValue={sortValue}
                            selectedPrices={selectedPrices}
                            filtered={filtered}
                            originalProducts={originalProducts}
                            setSortValue={setSortValue}
                            setFilterProCategory={setFilterProCategory}
                        />
                        <div className="container-product">
                            {filterProCategory.map((product, i) => {
                                return (
                                    <Item 
                                        key={i}
                                        product={product}
                                        discount={product.discount}
                                        category={product.category}
                                        id={product.id}
                                        cover={product.cover}
                                        like={product.like}
                                        name={product.name}
                                        from={product.from}
                                        sale={product.sale}
                                        handleAddToCart={handleAddToCart}
                                    />
                                )
                            })}
                        </div>
    
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product