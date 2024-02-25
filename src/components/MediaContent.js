import React from "react";
import PlayPauseVideo from "./Posts/PlayPauseVideo";

const supportedFormats = ["jpg", "jpeg", "png", "gif", "mp4", "webm", "ogg"];

const MediaContent = (prop) => {
  if (supportedFormats.includes(prop.type)) {
    if (["jpg", "jpeg", "png", "gif"].includes(prop.type)) {
      return (
        <img
          src={prop.src}
          alt={prop.type}
          style={{
            height: `${prop.height}`,
            width: `${prop.width}`,
            border: "1px black solid",
          }}
        />
      );
    } else {
      return <PlayPauseVideo prop={prop} />;
    }
  } else {
    return <p>Invalid media format</p>;
  }
};

export default MediaContent;
