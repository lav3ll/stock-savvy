import React, { useState} from "react";
import "./Modal.css"

export default function Modal() {

    const [modal, setModal] = useState(false)

    const toggleModal = () => {
        setModal(!modal)
    }

    return (
        <>
        <div className="div-modal" onClick={toggleModal}>
            Contact Us
        </div>

    {modal && (
        <div className="my-modal">
            <div className="my-overlay" onClick={toggleModal}></div>
            <div className="modal-content text-black">
                <h2 className="modal-header"><b>Contact Us</b></h2>
                <p><b>Email: </b>customersupport@stocksavvy.com</p>
                <p><b>Phone: </b>01483 123456</p>
                <p><b>Intsagram: </b>@stock_savvy</p>
                <button className="close-btn" onClick={toggleModal}>Close</button>
            </div>
        </div>  
    )}
        </>

    )
}