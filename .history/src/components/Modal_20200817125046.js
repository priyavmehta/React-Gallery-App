import React from 'react'
import { motion } from 'framer-motion';

const Modal = ({ imageUrl, setImageUrl }) => {

    const changeImageUrl = (e) => {
        if (e.target.classList.contains('backdrop')) {
            setImageUrl(null);
        }
    }

    return (
        <motion.div className = "backdrop" 
        initial = {{ opacity : 0}}
        animate = {{ opacity : 1}}
        onClick = {changeImageUrl}>
            <motion.img src = {imageUrl} 
            initial = {{ y : "-100vh" }}
            animate = {{ y : }}
            alt="Enlarged image"/>
        </motion.div>
    )
}

export default Modal
