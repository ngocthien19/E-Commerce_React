import React, { useContext, useEffect, useMemo, useState } from "react"
import order from '../../assets/images/order.png'
import './SearchItem.css'

const NoItemAndSort = ({ searchTerm, sortValue, listItemPerPage, selectedPrices, originalProducts, filtered,
    filteredProducts, selectedBrands, setSortValue , setFilteredProducts
}) => {
    
    const handleSort = (value) => {
        setSortValue(value)

        if (value === "default" && selectedPrices.length === 0) {
            setFilteredProducts([...originalProducts])
            return
        }

        if (value === "default" && selectedPrices.length > 0) {
            if(filtered && filtered.length > 0) {
                setFilteredProducts(filtered)
                return
            }

        }

        const sortProduct = [...filteredProducts];
        if (value === "asc-price") {
            sortProduct.sort((a, b) =>
                (a.sale - a.sale * a.discount / 100) - (b.sale - b.sale * b.discount / 100)
            )
        } else if (value === "dsc-price") {
            sortProduct.sort((a, b) =>
                (b.sale - b.sale * b.discount / 100) - (a.sale - a.sale * a.discount / 100)
            )
        } else if (value === "asc-name") {
            sortProduct.sort((a, b) => a.name.localeCompare(b.name))
        } else if (value === "dsc-name") {
            sortProduct.sort((a, b) => b.name.localeCompare(a.name))
        } else if (value === "asc-like") {
            sortProduct.sort((a, b) => a.like - b.like)
        } else {
            sortProduct.sort((a, b) => b.like - a.like)
        }
        setFilteredProducts(sortProduct)
    }

    return(
        <>
            <div className="content">   
                <div className="content-right">
                    <span className="desc">
                        {filteredProducts && filteredProducts.length} items {searchTerm ? `"${searchTerm}"` : "(All Product)"}
                    </span>
                    <div className="sort-by">
                        <span>Sort By:</span>
                        <select value={sortValue} onChange={(e) => handleSort(e.target.value)}>
                            <option value="default">Best match</option>
                            <option value="asc-name">Name Product(A-Z)</option>
                            <option value="dsc-name">Name Product(Z-A)</option>
                            <option value="asc-price">Price low to high</option>
                            <option value="dsc-price"> <i class="fa-solid fa-money-bill"></i>Price high to low</option>
                            <option value="asc-like">Liked low to high</option>
                            <option value="dsc-like">Liked high to low</option>
                        </select>
                    </div>
                </div>
            </div>
            {listItemPerPage.length === 0 &&
                <div className="no-found">
                    <span className="no-item">Search No Result</span>
                    <p className="no-item-desc">We're sorry. We cannot find any matches for your search term.</p>
                    <img src={order} alt="" />
                </div>
            } 
        </>
    )
}

export default NoItemAndSort