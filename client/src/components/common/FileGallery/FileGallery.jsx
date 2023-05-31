import React, { useState } from "react";
import { FileInfo, FileUpload, Input } from "@components";
import { useFileContext } from "@hooks/useFileContext";
import "./fileGallery.scss";

// TODO check deze file nog ma ke op afwerkingsfouten want twas laat
// TODO rebuilt the filegallery layout so that the filters and file list are one column and the file info is one column

const FileGallery = ({ onFileChange }) => {
    const { files } = useFileContext();

    const [activeTab, setActiveTab] = useState("Files");
    const [fileInfo, setFileInfo] = useState(null);

    const tabs = ["Files", "Upload new files"];

    const showFileInfo = (file) => {
        if (file === fileInfo) {
            setFileInfo(null);
        } else {
            setFileInfo(file);
        }
    };

    return (
        <div className="file-gallery">
            <ul className="file-gallery__tabs">
                {tabs &&
                    tabs.map((tab, index) => (
                        <li
                            key={index}
                            onClick={() => setActiveTab(tab)}
                            className={`file-gallery__tab ${activeTab === tab ? "file-gallery__tab--active" : ""}`}
                        >
                            {tab}
                        </li>
                    ))}
            </ul>
            <div className="file-gallery__content">
                {activeTab === "Files" && (
                    <section className="file-gallery__files">
                        <div className="file-gallery__files-main">
                            <div className="file-gallery__file-filters">
                                <Input type="text" placeholder="Zoeken naar files">
                                    <img className="input__icon" src="/icons/searchglass.svg" alt="searchglass icon" />
                                </Input>
                            </div>
                            <ul className="file-gallery__file-list">
                                {files &&
                                    files.map((file, index) => (
                                        <li key={index} className="file-gallery__file" onClick={() => showFileInfo(file)}>
                                            <img src={`http://localhost:3000/api/files/${file.filename}`} alt="uploaded file" />
                                        </li>
                                    ))}
                            </ul>
                        </div>
                        {fileInfo && <FileInfo onFileChange={onFileChange} fileInfo={fileInfo} setFileInfo={setFileInfo} />}
                    </section>
                )}
                {activeTab === "Upload new files" && <FileUpload setActiveTab={setActiveTab} />}
            </div>
        </div>
    );
};

export default FileGallery;
