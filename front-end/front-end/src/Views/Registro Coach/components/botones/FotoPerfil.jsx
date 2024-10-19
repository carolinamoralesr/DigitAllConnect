import React, { useState } from 'react';
import './FotoPerfil.css';

const FotoPerfil = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [showImage, setShowImage] = useState(false);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedImage(reader.result);
                setShowImage(false);
            };
            reader.readAsDataURL(file);
        }
    };

    const toggleImage = () => {
        setShowImage(!showImage);
    };

    return (
        <div className="form-group file-upload-button">
            <input 
                type="file" 
                id="fileInput" 
                className="file-input" 
                onChange={handleFileChange}
                accept="image/*"
            />
            <label htmlFor="fileInput" className="form-control custom-file-upload-FOTO">
                Subir Foto
            </label>
            {selectedImage && (
                <div className="image-preview-container">
                    {!showImage ? (
                        <p onClick={toggleImage} className="toggle-photo-button">Ver Foto</p>
                    ) : (
                        <div>
                            <img src={selectedImage} alt="Selected" className="image-preview"/>
                            <p onClick={toggleImage} className="toggle-photo-button">Cerrar</p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default FotoPerfil;



