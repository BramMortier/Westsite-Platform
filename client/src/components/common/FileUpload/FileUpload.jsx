import { useRef, useState } from "react";
import { Button } from "@components";
import { useFileContext } from "@hooks/useFileContext";
import "./fileUpload.scss";

// TODO add a warning for user (max file size = 1MB)
// TODO when there are selected files and the user uploads more they get reset change the handleFileChange function so that it keeps the previous selected files

const FileUpload = ({ file, onFileChange, setActiveTab }) => {
    const { createFiles } = useFileContext();
    const fileInput = useRef();

    const [selectedFiles, setSelectedFiles] = useState({});
    const [fileUploadMessage, setFileUploadMessage] = useState(null);

    const openFileExplorer = () => {
        fileInput.current.click();
    };

    const handleFileChange = (e) => {
        setSelectedFiles([...e.target.files]);
    };

    const handleFileUploadSubmit = async (e) => {
        e.preventDefault();

        setFileUploadMessage(null);

        const fileData = new FormData();
        selectedFiles.forEach((file) => fileData.append("files", file));

        const response = await createFiles(fileData);
        setFileUploadMessage({ type: response.status, content: response.message });

        if (response.status === "OK") {
            setTimeout(() => {
                setActiveTab("Files");
                setFileUploadMessage(null);
                setSelectedFiles({});
            }, 1000);
        }
    };

    return (
        <section className="file-upload">
            {fileUploadMessage && (
                <div
                    className={`file-upload__general-message ${
                        fileUploadMessage.type === "OK" ? "file-upload__general-message--ok" : "file-upload__general-message--error"
                    }`}
                >
                    {fileUploadMessage.content}
                </div>
            )}
            {selectedFiles.length ? (
                <ul className="file-upload__uploaded-files">
                    {selectedFiles.map((file, index) => (
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

            <input className="file-upload__input" type="file" name="files" multiple ref={fileInput} onChange={handleFileChange} />
        </section>
    );
};

export default FileUpload;
