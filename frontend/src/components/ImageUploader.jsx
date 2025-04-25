import React, { useRef, useState } from 'react';

function ImageUploader() {
  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current.click(); // triggers the hidden file input
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="p-4">
      <div
        className="w-64 h-64 border-2 border-dashed border-gray-400 flex items-center justify-center cursor-pointer rounded-lg hover:border-blue-400"
        onClick={handleClick}
      >
        {imagePreview ? (
          <img src={imagePreview} alt="Preview" className="w-full h-full object-cover rounded-lg" />
        ) : (
          <span className="text-gray-500">Click to upload an image</span>
        )}
      </div>
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleImageChange}
        style={{ display: 'none' }}
      />
    </div>
  );
}

export default ImageUploader;
