import React from "react";
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

function VideoPlayer() {
  return (
    <div className="box player-box">
      <Player
        playsInline
        poster="https://switch-cn.gtgres.com/global-images/737058f0-642d-11ea-b2ec-abc0f6730fb6.jpg"
      >
        <source
          src="//d2zihajmogu5jn.cloudfront.net/elephantsdream/ed_hd.mp4"
          type="video/mp4"
        />
        <source
          src="//d2zihajmogu5jn.cloudfront.net/elephantsdream/ed_hd.ogg"
          type="video/ogg"
        />

        <track
          kind="captions"
          src="/assets/elephantsdream/captions.en.vtt"
          srcLang="en"
          label="English"
          default
        />
        <track
          kind="captions"
          src="/assets/elephantsdream/captions.sv.vtt"
          srcLang="cn-Zh"
          label="Chinese"
        />

        <track
          kind="descriptions"
          src="/assets/elephantsdream/descriptions.en.vtt"
          srcLang="en"
          label="English"
        />

        <track
          kind="chapters"
          src="/assets/elephantsdream/chapters.en.vtt"
          srcLang="en"
          label="English"
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
  );
}

export default VideoPlayer;
