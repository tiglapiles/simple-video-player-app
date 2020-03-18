import React, { Component } from "react";
import {
  Player,
  ControlBar,
  ClosedCaptionButton,
  PlaybackRateMenuButton,
  ReplayControl,
  ForwardControl,
  BigPlayButton
} from "video-react";
import "video-react/dist/video-react.css";
import "../styles/video-player.css";
const PATH = "http://seeker.haetek.com:6869/";

class VideoPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    // console.log(sub);
  }
  render() {
    const {
      item: { title, video_path, webvtt }
    } = this.props;
    return (
      <div>
        <div className="content">
          <h2>{title.ch}</h2>
        </div>
        <div className="box player-box">
          <Player
            playsInline
            poster="https://switch-cn.gtgres.com/global-images/737058f0-642d-11ea-b2ec-abc0f6730fb6.jpg"
            crossOrigin="anonymous"
          >
            <source src={`${PATH}${video_path["720P"]}`} type="video/mp4" />
            <track
              kind="captions"
              src={`${PATH}${webvtt}`}
              srcLang="en"
              label="English"
              default
            ></track>
            <track
              kind="captions"
              src={require("../assets/captions.ch.vtt")}
              srcLang="cn-Zh"
              label="Chinese"
            />
            <BigPlayButton position="center" />
            <ControlBar autoHide={false}>
              <PlaybackRateMenuButton rates={[5, 2, 1, 0.5, 0.1]} />
              <ReplayControl seconds={10} order={2.2} />
              <ForwardControl seconds={10} order={3.2} />
              <ClosedCaptionButton order={7} />
            </ControlBar>
          </Player>
        </div>
      </div>
    );
  }
}

export default VideoPlayer;
