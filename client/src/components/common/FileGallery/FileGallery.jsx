import React, { useState, useEffect } from "react";
import { FileInfo, FileUpload, Input } from "@components";
import axios from "@config/axios";
import "./fileGallery.scss";

// TODO check deze file nog ma ke op afwerkingsfouten want twas laat

const FileGallery = () => {
    const [activeTab, setActiveTab] = useState("Files");
    const [fileInfo, setFileInfo] = useState(false);
    const [uploads, setUploads] = useState([]);

    const tabs = ["Files", "Upload new files"];

    useEffect(() => {
        const fetchUploads = async () => {
            try {
                const response = await axios.get("/files");
                setUploads(response.data.files);
            } catch (error) {
                console.log(error);
            }
        };
        fetchUploads();
    }, []);

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
            <div className="file-gallery__main">
                {activeTab === "Files" && (
                    <section className="file-gallery__files">
                        <div className="file-gallery__file-filters">
                            <Input type="text" placeholder="Zoeken naar files">
                                <img className="input__icon" src="/icons/searchglass.svg" alt="searchglass icon" />
                            </Input>
                        </div>
                        <div className="file-gallery__files-main">
                            <ul className="file-gallery__file-list">
                                {uploads &&
                                    uploads.map((upload, index) => (
                                        <li key={index} className="file-gallery__file">
                                            <img src={`http://localhost:3000/api/files/${upload}`} alt="uploaded file" />
                                        </li>
                                    ))}
                            </ul>
                            {fileInfo && <FileInfo />}
                        </div>
                    </section>
                )}
                {activeTab === "Upload new files" && <FileUpload setActiveTab={setActiveTab} />}
            </div>
        </div>
    );
};

export default FileGallery;
