import React from "react"
import Item from "../item/Item"
import './RelatedProduct.css'

const RelatedProduct = ({ newProduct, ItemProduct, handleAddToCart }) => {
    const newProductExcept = newProduct.filter(item => item.id !== ItemProduct.id && item.category === ItemProduct.category)
    
    return(
        <>
            <div className="related-products">
                <h2 className="title" data-aos="fade-down">Related Products</h2>
                <div className="related-gird5">
                        {newProductExcept.map((product, i) => {
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
                                    sale={product.sale}
                                    handleAddToCart={handleAddToCart}
                                />
                            )
                        })}
                </div>
            </div>
        </>
    )
}

export default RelatedProduct