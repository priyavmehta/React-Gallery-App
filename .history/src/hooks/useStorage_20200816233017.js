import React, { useEffect, useState } from 'react'
import { projectStorage, projectFireStore, timestamp } from '../firebase/config'

const useStorage = (file) => {

    const [progress, setProgress] = useState(null);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);
    
    useEffect (() => {
        const storageRef = projectStorage.ref(file.name);
        const collectionRef = projectFireStore.collection('images');

        storageRef.put(file).on('state_changed', (snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage);
        }, (err) =>{
            setError(err);
        }, async () => {
            const url = await storageRef.getDownloadURL();
            const createdAt = timestamp();
            console.log("over here");
            await collectionRef.add({ "url" : url, "createdAt" : createdAt });
            console.log("done")
            setUrl(url);
        })
    }, [file]);

    return {progress, url, error};
}

export default useStorage;
