import React from "react";
import VideoPlayer from "./VideoPlayer.js";
import { useHistory } from "react-router-dom";

function VideoContent(props) {
  let history = useHistory();
  return (
    <div>
      <div className="section">
        <div className="container">
          <VideoPlayer item={history.location.state} />
        </div>
      </div>
    </div>
  );
}

export default VideoContent;
