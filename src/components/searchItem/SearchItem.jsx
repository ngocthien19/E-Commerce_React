import React, { useContext, useEffect, useState } from "react"
import FilterItem from "./FilterItem"
import Item from "../item/Item"
import { ShopContext } from "../../common/context/ShopContext"
import Page from "./Page"
import './SearchItem.css'
import NoItemAndSort from "./NoItemAndSort"

const SearchItem = ({ searchTerm, filteredProducts, selectedPrices, selectedFrom, setSelectedFrom,
    selectedBrands, setSelectedBrands, setSelectedPrices, handleAddToCart, setFilteredProducts 
}) => {
    const { newProduct, scrollToTop } = useContext(ShopContext)

    const [sortValue, setSortValue] = useState("default")
    const [originalProducts, setOriginalProducts] = useState([])

    const [currentPage, setCurrentPage] = useState(1)
    const itemPerPage = 12

    const lastIndexItem = currentPage * itemPerPage
    const firstIndexItem = lastIndexItem - itemPerPage

    const listItemPerPage = filteredProducts.slice(firstIndexItem, lastIndexItem)

    const totalPages = Math.ceil(filteredProducts.length / itemPerPage)

    const handleChangePage = (pageNumber) => setCurrentPage(pageNumber)

    const handleSetPageAndScroll = (pageNumber) => {
        if (0 < pageNumber && pageNumber < totalPages + 1) {
            handleChangePage(pageNumber)
            scrollToTop()
        } 
    }

    useEffect(() => {
        if (originalProducts.length === 0 && filteredProducts.length > 0) {
            setOriginalProducts([...filteredProducts])
        }
    }, [filteredProducts])

    useEffect(() => {
        if (searchTerm.trim() === "") {
            setOriginalProducts(newProduct)
            setFilteredProducts(newProduct)
        } else {
            const filteredBySearch = newProduct.filter((product) =>
                product.name.toLowerCase().includes(searchTerm.toLowerCase().trim())
            )
            setOriginalProducts(filteredBySearch) // Cập nhật sản phẩm phù hợp với từ khóa
            setFilteredProducts(filteredBySearch) // Hiển thị kết quả tìm kiếm ban đầu
        }
        setSelectedPrices([]) // Reset bộ lọc giá khi thay đổi từ khóa
        setSelectedBrands([])
    }, [searchTerm, newProduct]) 

    const filtered = originalProducts.filter((product) => {
        const price = product.sale - (product.sale * product.discount) / 100

        // Điều kiện lọc theo giá
        const matchesPrice =
            selectedPrices.length === 0 || // Nếu không chọn giá, bỏ qua điều kiện giá
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

        // Điều kiện lọc theo thương hiệu
        const matchesBrand =
            selectedBrands.length === 0 || // Nếu không chọn thương hiệu, bỏ qua điều kiện thương hiệu
            selectedBrands.includes(product.brand)

        // Loc theo From
        const matchesFrom =
            selectedFrom.length === 0 || 
            selectedFrom.includes(product.from)

        // Kết hợp cả hai điều kiện (giá và thương hiệu)
        return matchesPrice && matchesBrand && matchesFrom
    })
    
    return(
        <>
            <section className="search-item">
                <div className="container fl">
                    <div className="search-item-left">
                        <FilterItem 
                            originalProducts={originalProducts}
                            filtered={filtered}
                            selectedBrands={selectedBrands}
                            selectedPrices={selectedPrices}
                            selectedFrom={selectedFrom}
                            setFilteredProducts={setFilteredProducts}
                            setSelectedPrices={setSelectedPrices}
                            setSelectedBrands={setSelectedBrands}
                            setSelectedFrom={setSelectedFrom}
                        />
                    </div>
                    <div className="search-item-right">
                        <NoItemAndSort 
                            sortValue={sortValue}
                            searchTerm={searchTerm}
                            listItemPerPage={listItemPerPage}
                            filtered={filtered}
                            filteredProducts={filteredProducts}
                            selectedBrands={selectedBrands}
                            selectedPrices={selectedPrices}
                            originalProducts={originalProducts}
                            setFilteredProducts={setFilteredProducts}
                            setSortValue={setSortValue}
                        />
                        <div className="search-item-container">
                            {listItemPerPage.map((product, i) => {
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
                        {listItemPerPage.length > 0 && 
                            <Page 
                                currentPage={currentPage}
                                totalPages={totalPages}
                                filteredProducts={filteredProducts}
                                handleSetPageAndScroll={handleSetPageAndScroll}
                            />
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default SearchItem