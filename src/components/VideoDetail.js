import React from "react";

function VideoDetail({ video }) {
  if (!video) {
    return <div>Loading....</div>;
  }
  const videoSRC = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div className="ui segment">
      <div className="ui embed">
        <iframe
          title="video player"
          width="560"
          height="315"
          src={videoSRC}
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </div>
      <h4 className=" ui header">{video.snippet.title}</h4>
      <p>{video.snippet.description}</p>
    </div>
  );
}

export default VideoDetail;
