import React from "react"
import { createPortal } from "react-dom"
import './Modal.css'

function Modal ({ children }) {
    return createPortal(
        <div className="modal">
            <div className="modal-background">
               { children } 
            </div> 
        </div>,
        document.getElementById('modal')
    )
}

export { Modal }