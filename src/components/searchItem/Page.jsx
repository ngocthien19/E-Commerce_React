import React, { useContext, useState } from "react"
import './Page.css'
import { ShopContext } from "../../common/context/ShopContext"

const Page = ({ currentPage, totalPages, handleSetPageAndScroll }) => { 

    return(
        <>
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
        </>
    )
}

export default Page