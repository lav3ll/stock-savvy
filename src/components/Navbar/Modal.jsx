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
        <div className="my-modal">
            <div className="my-overlay" onClick={toggleModal}></div>
            <div className="modal-content">
                <h2>Contact Us</h2>
                <p>Contact us here this is all our infodhfgidogmwigowi</p>
                <button className="close-btn" onClick={toggleModal}>Close</button>
            </div>
        </div>
        </>

    )
}