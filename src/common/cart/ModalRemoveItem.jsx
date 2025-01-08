import React from "react"
import './ModalRemoveItem.css'

const ModalRemoveItem = ({ modalRemove, productToRemove, setModalRemove, handleDeleteCart }) => {
    
    const handleDeleteWhenClickRemove = (productToRemove) => {
        if (productToRemove) {
            handleDeleteCart(productToRemove)
            setModalRemove(false)
        } 
    }
    return (
        <>
            {modalRemove && 
                <div className="modal-remove">
                    <div className="remove-container" data-aos="fade-down">
                        <div className="remove-heading">
                            <span>Item(s) will be removed from cart</span>
                            <i className="fa-solid fa-xmark" onClick={() => setModalRemove(false)}></i>
                        </div>
                        <div className="remove-content">
                            <div className="remove-center">
                                <img src={productToRemove.cover} alt="" className="img"/>
                                <h3>Are you sure you want to remove <span>"{productToRemove?.name}"</span> from the cart?</h3>
                            </div>
                            <button className="remove-item" onClick={() => handleDeleteWhenClickRemove(productToRemove)}>REMOVE</button>
                            <button className="cancel" onClick={() => setModalRemove(false)}>CANCEL</button>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default ModalRemoveItem