import React from "react";
import "./loading.css";

const Loading = () => {
  return (
    <div className="loading-wrapper">
      <p className="loading-text">
        L
        <span className="spin-o">
          <span className="spinner-ring"></span>
        </span>
        ADING
      </p>
    </div>
  );
};

export default Loading;
