import React, { useContext, useState } from "react"
import logo from '../../assets/logo.svg'
import { Link } from "react-router-dom"
import { ShopContext } from "../context/ShopContext"
import ModalSearch from "./ModalSearch/ModalSearch"

const Search = ({ cartItem, modalSearch, searchTerm,
    setActiveMenu, setFilteredProducts, setModalSearch, setSearchTerm 
}) => { 
    const [listNameProduct, setListNameProduct] = useState([])
    const [selectedIndex, setSelectedIndex] = useState(-1)
    const { scrollToTop, newProduct } = useContext(ShopContext)

    window.addEventListener("scroll", function() {
        const search = this.document.querySelector('.search')
        search.classList.toggle("active", window.scrollY > 100)
    })

    const handleScrollAndActiveMenu = () => {
        setActiveMenu("home")
        scrollToTop()
    }

    const getTotalQty = () => {
        return cartItem.reduce((total, item) => total + item.qty, 0);
    }

    const handleInputChange = (event) => {
        const value = event.target.value
        setSearchTerm(value)

        if (value.trim()) {
            setModalSearch(true)

            // Tách từ khóa nhập vào thành các từ
            const searchKeywords = value.toLowerCase().split(/\s+/)

            const suggestions = newProduct
                .map((product) => product.name)
                .filter((name) => {
                    // Tách tên sản phẩm thành các từ
                    const productWords = name.toLowerCase().split(/\s+/)

                    // Kiểm tra nếu tất cả từ trong từ khóa khớp với bất kỳ từ nào trong tên sản phẩm
                    return searchKeywords.every(keyword =>
                        productWords.some(word => word.startsWith(keyword))
                    )
                })

            const uniqueSuggestions = [...new Set(suggestions)]

            setListNameProduct(uniqueSuggestions)
        } else {
            setModalSearch(false)
            setListNameProduct([])
        }
    }

    const handleFocusInput = () => {
        setModalSearch(true)
        setSelectedIndex(-1)
    }

    return(
        <>
            <section className="search">
                <div className="container c_flex">
                    <div className="logo width" data-aos="fade-right">
                        <Link to="/" onClick={handleScrollAndActiveMenu}>
                            <img src={logo} alt="" />
                        </Link>
                    </div>
                    <div className="search-box f_flex" data-aos="fade-left">
                        <i className="fa fa-search"></i>
                        <input
                            id="search-input"
                            type="text"
                            placeholder="Search and hit enter..."
                            value={searchTerm}
                            onChange={handleInputChange}
                            onFocus={handleFocusInput} 
                        />
                        <span>All Categories</span>
                        <ModalSearch 
                            modalSearch={modalSearch}
                            searchTerm={searchTerm}
                            listNameProduct={listNameProduct}
                            selectedIndex={selectedIndex}
                            setSelectedIndex={setSelectedIndex}
                            setModalSearch={setModalSearch}
                            setFilteredProducts={setFilteredProducts}
                            setSearchTerm={setSearchTerm}
                        />
                    </div>

                    <div className="icon f_flex width" data-aos="fade-left">
                        <i className="fa fa-user icon-circle"></i>
                        <div className="cart">
                            <Link to="/cart" onClick={scrollToTop}>
                                <i className="fa fa-shopping-bag icon-circle"></i>
                                <span>{getTotalQty() > 0 ? getTotalQty() : ""}</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Search