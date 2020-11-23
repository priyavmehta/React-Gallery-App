import React from 'react'

const Modal = ({ imageUrl, setImageUrl }) => {
    return (
        <div className = "backdrop">
            <img src = {imageUrl} alt="Enlarged image"/>
        </div>
    )
}

export default Modal
