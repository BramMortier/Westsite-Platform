import { useRef, useState } from "react";
import { Button } from "@components";
import "./fileUpload.scss";

const FileUpload = ({ file, onFileChange }) => {
    const fileInput = useRef();

    const [uploadedFiles, setUploadedFiles] = useState({});

    const openFileExplorer = () => {
        fileInput.current.click();
    };

    const handleFileChange = (e) => {
        setUploadedFiles([...e.target.files]);
    };

    const handleFileUploadSubmit = async (e) => {
        e.preventDefault();
    };

    return (
        <section className="file-upload">
            {uploadedFiles.length ? (
                <ul className="file-upload__uploaded-files">
                    {uploadedFiles.map((file, index) => (
                        <li key={index} className="file-upload__uploaded-file">
                            <p>{file.name}</p>
                            <p>{`${(file.size / (1024 * 1024)).toFixed(2)} MB`}</p>
                            <p>{file.name.split(".")[1]}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <div className="file-upload__empty-list-placeholder" onClick={openFileExplorer}>
                    <p>No files selected</p>
                </div>
            )}
            <div className="file-upload__action-buttons">
                <Button type="primary" onClick={openFileExplorer}>
                    Kies bestanden
                    <img src="/icons/upload-dark.svg" alt="upload icon" />
                </Button>
                <Button type="secondary" onClick={handleFileUploadSubmit}>
                    Upload
                </Button>
            </div>

            <input className="file-upload__input" type="file" multiple ref={fileInput} onChange={handleFileChange} />
        </section>
    );
};

export default FileUpload;
