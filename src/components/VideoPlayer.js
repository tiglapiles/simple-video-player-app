import React from "react";
import { Player } from "video-react";
import "video-react/dist/video-react.css";
import "../styles/video-player.css";

function VideoPlayer() {
  return (
    <div className="box player-box">
      <Player
        playsInline
        poster="/assets/poster.png"
        src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
      />
    </div>
  );
}

export default VideoPlayer;
