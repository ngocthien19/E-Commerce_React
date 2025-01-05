import React, { useContext, useState } from "react"
import { ShopContext } from "../../common/context/ShopContext"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import './AllProduct.css'

const AllProduct = ({ handleAddToCart }) => {

    const { newProduct, scrollToTop, toVND } = useContext(ShopContext)

    const [allProduct, setAllProduct] = useState(newProduct)
    const [sortOrder, setSortOrder] = useState(true);
    const [modalSort, setModalSort] = useState(false)
    const [currentPage, setCurrentPage] = useState(1);

    const itemsPerPage = 15;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = allProduct.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(newProduct.length / itemsPerPage);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const handleSetPageAndScroll = (pageNumber) => {
        if (pageNumber > 0 && pageNumber < totalPages + 1) {
            paginate(pageNumber)
            scrollToTop()
        }
    }

    const handleClickToIncLike = (id) => {
        const newList = allProduct.map(item => {
            if (item.id === id) {
                return {...item, like: item.like + 1 }
            }
            return item
        })
        setAllProduct(newList)
    }

    const handleGoSort = (value) => {
        setModalSort(false)
        scrollToTop()

        let sortedProducts = [...allProduct]

        switch (value) {
            case "sort-name":
                sortedProducts.sort((a, b) =>
                    sortOrder ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
                );
                setAllProduct(sortedProducts)
                setSortOrder(!sortOrder)
                break
            case "sort-price":
                sortedProducts.sort((a, b) => 
                    sortOrder ? (a.sale - a.sale * a.discount / 100) - (b.sale - b.sale * b.discount / 100) 
                    : 
                    (b.sale - b.sale * b.discount / 100)  - (a.sale - a.sale * a.discount / 100)
                )
                setAllProduct(sortedProducts)
                setSortOrder(!sortOrder)
                break;
            case "cancel-sort":
                setAllProduct(newProduct);
                setSortOrder(true); 
                break
            default:
                break
        }
    }
    
    return (
        <>
            <section className="all-product">
                <div className="container">
                    <h2 className="title" data-aos="fade-down">All Product</h2>
                    <div className="icon">
                        <i className={`fa-solid fa-sort`} onClick={() => setModalSort(!modalSort)}></i>
                        <motion.div 
                            className={modalSort ? "modal-sort" : "modal-sort hide"}
                            initial={{ opacity: 0, scale: 0.8, y: -40 }} 
                            animate={{ opacity: modalSort ? 1 : 0, scale: modalSort ? 1 : 0.8, y: modalSort ? 0 : -40 }}
                            exit={{ opacity: 0, scale: 0.8, y: -40 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                        >
                            <p className="sort-name" onClick={() => handleGoSort("sort-name")}>Name Product</p>
                            <p className="sort-price" onClick={() => handleGoSort("sort-price")}>Price</p>
                            <p className="cancel-sort" onClick={() => handleGoSort("cancel-sort")}>Cancel Sort</p>
                        </motion.div>
                    </div>
                    <div className="grid5" data-aos="zoom-in-down">
                        {currentItems.map((product) => {
                            return (
                                <div className="box" key={product.id}>
                                    <div className="product">
                                        <div className="img">
                                            <div className="discount">
                                                <span className="percent">{product.discount}%</span>
                                                <span className="off">OFF</span>
                                            </div>
                                            <Link to={`/${product.category}/${product.id}`} onClick={scrollToTop}>
                                                <img src={product.cover} alt="" loading="lazy" />
                                            </Link>
                                            <div className="product-like">
                                                <label>{product.like}</label> <br />
                                                <i
                                                    className="fa-regular fa-heart"
                                                    onClick={() => handleClickToIncLike(product.id)}
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
                    <div className="pagination">
                        <div 
                            className="arrow-left"
                            onClick={() => handleSetPageAndScroll(currentPage - 1)}
                        >
                            <i class="fa-solid fa-arrow-left-long"></i>
                        </div>
                        {[...Array(totalPages)].map((_, index) => (
                            <button
                                key={index + 1}
                                onClick={() => handleSetPageAndScroll(index + 1)}
                                className={currentPage === index + 1 ? 'active' : ''}
                            >
                                {index + 1}
                            </button>
                        ))}
                        <div 
                            className="arrow-right"
                            onClick={() => handleSetPageAndScroll(currentPage + 1)}
                        >
                            <i class="fa-solid fa-arrow-right-long"></i>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AllProduct