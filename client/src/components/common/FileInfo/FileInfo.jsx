import React from "react";
import "./fileInfo.scss";

const FileInfo = () => {
    return (
        <div className="file-info">
            <div className="file-info__preview"></div>
            <h4>Filename</h4>
            <div className="file-info__specs"></div>
        </div>
    );
};

export default FileInfo;
