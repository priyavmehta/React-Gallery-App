import React from 'react'

const Modal = ({ imageUrl, setImageUrl }) => {

    const changeImageUrl = (e) => {
        if (e.target.classList.contains('backdrop')) {
            setImageUrl(null);
          }
    }

    return (
        <div className = "backdrop" onClick = {changeImageUrl}>
            <img src = {imageUrl} alt="Enlarged image"/>
        </div>
    )
}

export default Modal
