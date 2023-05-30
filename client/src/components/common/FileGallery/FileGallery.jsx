import React, { useState } from "react";
import { FileInfo, FileUpload, Input } from "@components";
import "./fileGallery.scss";

const FileGallery = () => {
    const [activeTab, setActiveTab] = useState("Files");
    const [fileInfo, setFileInfo] = useState(false);

    const tabs = ["Files", "Upload new files"];

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
                                <li className="file-gallery__file"></li>
                                <li className="file-gallery__file"></li>
                                <li className="file-gallery__file"></li>
                                <li className="file-gallery__file"></li>
                                <li className="file-gallery__file"></li>
                                <li className="file-gallery__file"></li>
                                <li className="file-gallery__file"></li>
                                <li className="file-gallery__file"></li>
                                <li className="file-gallery__file"></li>
                                <li className="file-gallery__file"></li>
                                <li className="file-gallery__file"></li>
                                <li className="file-gallery__file"></li>
                                <li className="file-gallery__file"></li>
                            </ul>
                            {fileInfo && <FileInfo />}
                        </div>
                    </section>
                )}
                {activeTab === "Upload new files" && <FileUpload />}
            </div>
        </div>
    );
};

export default FileGallery;
