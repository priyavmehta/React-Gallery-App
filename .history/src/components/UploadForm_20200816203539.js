import React, { useState } from 'react'

const UploadForm = () => {

    const {file, changeFile} = useState(null);

    const changehandler = (e) => {
        let selected = e.target.files[0];
        console.log(selected);
    }

    return (
        <form>
            <input type="file" onChange = {changehandler} />
        </form>
    )
}

export default UploadForm
