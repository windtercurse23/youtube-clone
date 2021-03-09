import "./VideoItem.css";
import React from "react";

function VideoItem({ video, onVideoSelect }) {
  return (
    <div onClick={() => onVideoSelect(video)} className="video-item item">
      <img
        className="video-img ui image"
        src={video.snippet.thumbnails.medium.url}
        alt="pic"
      />
      <div className=" content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
}

export default VideoItem;
