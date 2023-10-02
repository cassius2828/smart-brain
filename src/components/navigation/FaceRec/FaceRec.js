import React from "react";
import "./FaceRec.css";

export const FaceRec = ({ image, box }) => {
  return (
    <div className="center ma">
      <div className="absolute mt2">
        <img id="input-img" width="auto" height="300px" src={image} alt="" />
        {/* figured out how to loop throught the face detection number thru my own research :) */}
        {/* create an IIFE, store divs an array by pushing thru the for loop */}
        {box.numOfFaces > 1 ? (
          (() => {
            let boxes = [];
            for (let i = 0; i <= box.numOfFaces; i++) {
              boxes.push(
                <div
                  className="bounding-box"
                  key={i}
                  style={{
                    top: box.topRow[i],
                    right: box.rightCol[i],
                    bottom: box.bottomRow[i],
                    left: box.leftCol[i],
                  }}
                ></div>
              );
            }
            return boxes;
          })()
        ) : box.topRow ? (
          <div
            className="bounding-box"
            style={{
              top: box.topRow[0],
              right: box.rightCol[0],
              bottom: box.bottomRow[0],
              left: box.leftCol[0],
            }}
          ></div>
        ) : null}
        ;
      </div>
    </div>
  );
};
