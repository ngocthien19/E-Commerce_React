import React, { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { ShopContext } from "../../context/ShopContext"
import './ModalSearch.css'

const ModalSearch = ({ searchTerm, modalSearch, listNameProduct,
    selectedIndex, setSelectedIndex, setSearchTerm, setModalSearch, 
    setFilteredProducts 
}) => {
    const navigate = useNavigate()
    const { scrollToTop, newProduct } = useContext(ShopContext)

    const handleNavAndScroll = (item) => {
        navigate('/item-search')
        setSearchTerm(item)
        scrollToTop()
        setModalSearch(false)

        const searchInput = document.getElementById("search-input")
        if (searchInput) {
            searchInput.blur()
        }

        const filterItemName = selectedIndex !== -1 
            ? newProduct.filter(product => {
                // Tách từ khóa của listNameProduct[selectedIndex] nếu có
                const searchKeyword = listNameProduct[selectedIndex]?.toLowerCase() || ''
                
                // So khớp sản phẩm dựa trên từ khóa
                return product.name.toLowerCase().includes(searchKeyword)
            })
            : newProduct.filter(product => {
                // Nếu không có selectedIndex (chưa chọn cụ thể), dùng từ khóa đầu vào
                return product.name.toLowerCase().includes(item.toLowerCase())
            })
        setFilteredProducts(filterItemName)
    }

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!modalSearch || listNameProduct.length === 0) return

            if (e.key === "ArrowDown") {
                setSelectedIndex((prevIndex) => 
                    prevIndex < listNameProduct.length - 1 ? prevIndex + 1 : 0
                )
            } else if (e.key === "ArrowUp") {
                setSelectedIndex((prevIndex) => 
                    prevIndex > 0 ? prevIndex - 1 : listNameProduct.length - 1
                )
            } else if (e.key === "Enter" && selectedIndex !== -1) {
                handleNavAndScroll(listNameProduct[selectedIndex])
            } else if (e.key === "Enter" && selectedIndex === -1) {
                handleNavAndScroll(searchTerm)
            } 
        }

        window.addEventListener("keydown", handleKeyDown)
        return () => {
            window.removeEventListener("keydown", handleKeyDown)
        }
    }, [modalSearch, listNameProduct, selectedIndex])
    return (
        <>
            <div className={modalSearch ? "modal-search" : "modal-search hide"}>
                {listNameProduct.length > 0 &&
                    listNameProduct.map((item, i) => (
                        <div
                            className={`modal-search-item ${selectedIndex === i ? "selected" : ""}`}
                            key={i}
                            onClick={() => handleNavAndScroll(item)}
                        >
                            <span className="name">{item}</span>
                            <i className="fa-solid fa-arrow-right"></i>
                        </div>
                    ))
                }
            </div>
        </>
    );
};

export default ModalSearch
