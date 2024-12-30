import React, { useContext } from "react"
import { ShopContext } from "../../context/ShopContext"
import { motion } from "framer-motion"
import './ModalCategory.css'
import { Link } from "react-router-dom"

const ModalCategory = ({ showCategory, setShowCategory }) => {

    const { newProduct } = useContext(ShopContext)

    const uniqueCategories = [];
    const categoriesSet = new Set();

    newProduct.forEach(item => {
        if (item.category && !categoriesSet.has(item.category)) {
            categoriesSet.add(item.category);
            uniqueCategories.push(item);
        }
    });

    return(
        <>
            <motion.div 
                className={showCategory ? "modal-category" : "modal-category hide"}
                initial={{ opacity: 0, scale: 0.8, y: -50 }} 
                animate={{ opacity: showCategory ? 1 : 0, scale: showCategory ? 1 : 0.8, y: showCategory ? 0 : -50 }}
                exit={{ opacity: 0, scale: 0.8, y: -50 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
            >
                <ul className="modal-list">
                    {uniqueCategories.map((item, i) => {
                        return (
                            <Link to={`/${item.category}`} onClick={() => setShowCategory(false)}>
                                <li className="modal-item" key={i}>
                                    {item.icon} {item.category}
                                </li>
                            </Link>
                        )
                    })}
                </ul>
            </motion.div>
        </>
    )
}

export default ModalCategory