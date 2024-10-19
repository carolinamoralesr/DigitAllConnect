import React, { useState } from 'react';
import './FileUploadButton.css';

const FileUploadButton = ({ id }) => {
    const [fileNames, setFileNames] = useState([]);

    const handleFileChange = (event) => {
        setFileNames(Array.from(event.target.files).map(file => file.name));
    };

    return (
        <div className="form-group file-upload-button">
            <input 
                type="file" 
                id={id} 
                className="file-input" 
                multiple
                onChange={handleFileChange}
            />
            <label htmlFor={id} className="form-control custom-file-upload">
                Subir archivos
            </label>
            <ul className="file-names">
                {fileNames.map((name, index) => (
                    <li key={index} className="file-name">{name}</li>
                ))}
            </ul>
        </div>
    );
};

export default FileUploadButton;



