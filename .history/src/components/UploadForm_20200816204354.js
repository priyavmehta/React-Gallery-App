import React, { useState } from 'react'

const UploadForm = () => {

    const {file, setFile} = useState(null);
    const {error, setError} = useState(null);

    const validTypes = ['image/png', 'image/jpg', 'image/jpeg'];

    const changehandler = (e) => {
        let selected = e.target.files[0];
        
        if (selected && validTypes.includes(selected.type)){
            setFile(selected);
        } else {
            setError("Please upload a valid (png, jpg or jpeg) file")
        }
    }

    return (
        <form>
            <input type="file" onChange = {changehandler} />
        </form>
    )
}

export default UploadForm
