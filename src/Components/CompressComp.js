import React,{useState} from 'react';
import { ImageCompressor } from 'image-compressor';

export const CompressComp = () => {
    const [compressedImage, setCompressedImage] = useState(null);

  const handleImageUpload = async (e) => {
    console.log('e....???',e.target);
    const file = e.target.files[0];
    const compressor = new ImageCompressor();
    const compressedFile = await compressor.compress(file);
    setCompressedImage(compressedFile);
  };
    return (
        <div>
            <div>
                <input type="file" accept="image/*" onChange={handleImageUpload} />
                {compressedImage && (
                    <div>
                        <img src={URL.createObjectURL(compressedImage)} alt="Compressed" />
                        <a href={URL.createObjectURL(compressedImage)} download="compressed_image.jpg">
                            Download Compressed Image
                        </a>
                    </div>
                )}
            </div>
        </div>
    )
}
