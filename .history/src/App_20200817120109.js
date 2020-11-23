import React, { useState } from 'react';
import Title from './components/Title';
import UploadForm from './components/UploadForm';
import ImageGrid from './components/ImageGrid';
import Modal from './components/Modal';

function App() {

  const [imageUrl, setImageUrl] = useState(null);

  return (
    <div className="App">
      <Title/>
      <UploadForm />
      <ImageGrid setImageUrl= {setImageUrl}/>
      <Modal />
    </div>
  );
}

export default App;
