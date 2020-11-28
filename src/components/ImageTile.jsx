import React from "react";
import "./ImageTile.css";

export default function ImageTile({ title, children, imgSrc, alt, url }) {
  const tile = (
    <div className="ImageTile">
      <img className="side-image" src={imgSrc} alt={alt || "tile image"} />
      <div className="image-tile-text">
        <div className="image-tile-title"> {title} </div>
        {title && children && <hr className="image-tile-separator" />}
        <div className="image-tile-content">
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
  return url ? (
    <a className="image-tile-link" href={url}>
      {" "}
      {tile}{" "}
    </a>
  ) : (
    tile
  );
}
