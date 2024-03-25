import React, { useState } from 'react';

const ImageCompressor = ({ blobUrl }) => {
  const [compressedBlobUrl, setCompressedBlobUrl] = useState(null);

  const compressImage = () => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0, img.width, img.height);
      canvas.toBlob(
        (blob) => {
          setCompressedBlobUrl(URL.createObjectURL(blob));
        },
        'image/jpeg', // Change to desired output format (e.g., 'image/png')
        0.5 // Adjust compression quality (0.0 - 1.0)
      );
    };
    img.src = blobUrl;
    getImageSize(compressedBlobUrl);
  };

  const getImageSize = async (blobUrl) => {
    try {
      const response = await fetch(blobUrl);
      const blob = await response.blob();
      const imageSize = blob.size;
      console.log('CompressedSize..',imageSize/1024,'MB');
      // console.log('Image size:', imageSize, 'bytes');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2>Image Compressor</h2>
      <div>
        <button onClick={compressImage}>Compress Image</button>
      </div>
      {compressedBlobUrl && (
        <div>
          <h3>Compressed Image</h3>
          <img src={compressedBlobUrl} alt="Compressed" style={{ maxWidth: '100%', maxHeight: '200px' }} />
        </div>
      )}
    </div>
  );
};

export default ImageCompressor;
