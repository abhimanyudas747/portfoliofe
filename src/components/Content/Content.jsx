import React from "react";
import "./style.css";

const Content = ({ align, img, width, height, text, background }) => {
  return (
    <div
      className="content-holder"
      style={{
        textAlign: align,
        width: width,
        height: height,
        background: background,
      }}
    >
      {img ? (
        <div className="img-holder">
          <img src={img} />
        </div>
      ) : (
        <></>
      )}

      {text}
    </div>
  );
};

export default Content;
