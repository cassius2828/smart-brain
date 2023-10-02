import React from "react";
import "./ImageLinkForm.css";

export const ImageLinkForm = ({ onInputChange, onButtonSubmit}) => {
  return (
    <div>
      <p className="f3 tc">
        {`This Magic Brain will detect faces in your picures. Give it a try`}
      </p>
      <div>
        <div className="center">
          <div className=" input-container pa3 br3 center shadow-5 w-50">
            <input
              onChange={onInputChange}
              className="f4 pa2 w-70 center"
              type="text"
            />
            <button 
            onClick={onButtonSubmit}
            className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple">
              Detect
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
