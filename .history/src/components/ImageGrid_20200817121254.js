import React from 'react'
import useFirestore from '../hooks/useFirestore'

const ImageGrid = ({ setImageUrl }) => {

    const { docs } = useFirestore('images');
    console.log(docs);

    return (
        <div className = "img-grid" onClick={() => setImageUrl(doc.url)}>
            { docs && docs.map(doc => (
                <div className="img-wrap" key = {doc.id}>
                    <img src = {doc.url} alt="Uploaded image"></img>
                </div>
            ))}
        </div>
    )
}

export default ImageGrid
