import React from "react";
import { Button } from "@components";
import { useFileContext } from "@hooks/useFileContext";
import "./fileInfo.scss";

const FileInfo = ({ fileInfo, setFileInfo, onFileChange }) => {
    const { deleteFile } = useFileContext();

    return (
        <div className="file-info">
            <div className="file-info__preview">
                <img src={`http://localhost:3000/api/files/${fileInfo.filename}`} alt="file preview" />
            </div>
            <h4>{fileInfo.filename.split("-")[0]}</h4>
            <div className="file-info__specs">
                <p>
                    Bestandsgroote: <span>{`${(fileInfo.size / (1024 * 1024)).toFixed(2)} MB`}</span>
                </p>
                <p>
                    Toegevoegd op: <span>{fileInfo.createdAt}</span>
                </p>
                <p>
                    Bestandstype: <span>{fileInfo.filename.split(".")[1]}</span>
                </p>
            </div>
            <div className="file-info__action-buttons">
                <Button type="primary" onClick={() => onFileChange(fileInfo)}>
                    Bestand kiezen
                </Button>
                <Button
                    type="secondary"
                    onClick={() => {
                        deleteFile(fileInfo);
                        setFileInfo(null);
                    }}
                >
                    Verwijder
                </Button>
            </div>
        </div>
    );
};

export default FileInfo;
