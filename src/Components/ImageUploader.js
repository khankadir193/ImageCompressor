import React, { useState } from 'react';
import ImageCompressor from './ImageCompressor';

const ImageUploader = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [blobURL,setBlobURL] = useState();
  const [isBlob,setIsBlob] = useState();
  const [originalImgSize,setOriginalImgSize] = useState();
  const [imageType,setImageType] = useState();

  


  const handleImageChange = (event) => {
    const file = event.target.files[0];
    console.log('file...',file);
    console.log('OriginalSize..',file.size,'bytes');
    // console.log('fileSize:',String(Math.round(file.size/1024/1024)).trim(),'MB');
    console.log('URL.createObjectURL(selectedImage)',URL.createObjectURL(file));
    setBlobURL(URL.createObjectURL(file));
    setSelectedImage(file);
    setIsBlob(true);
    setOriginalImgSize(file.size);
    // Accessing the webkitRelativePath property
    console.log('webkitRelativePath:', file.webkitRelativePath);
    setImageType(file.type);
  };

  return (
    <div>
      <h2>Image Uploader</h2>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
      />
      {selectedImage && (
        <div>
          <h3>Selected Image</h3>
          <img src={URL.createObjectURL(selectedImage)} alt="Selected" style={{ maxWidth: '100%', maxHeight: '200px' }} />
          <h2>{`OriginalImageSize:-${originalImgSize && originalImgSize} Bytes`}</h2>
        </div>
      )}
      {
        isBlob && <ImageCompressor blobUrl={blobURL} imageType={imageType} />
      }
    </div>
  );
};

export default ImageUploader;
