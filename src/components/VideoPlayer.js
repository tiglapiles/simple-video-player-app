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
import axios from "axios";
import "../styles/video-player.css";
const PATH = "http://seeker.haetek.com:6869/";

class VideoPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: ""
    };
  }
  componentDidMount() {}
  handleClick = id => {
    this.queryVideo({ str: this.state.searchString, id });
  };
  handleInput = e => {
    this.setState({ searchString: e });
  };
  queryVideo = ({ str = "", id = "" }) => {
    axios({
      url: "http://seeker.haetek.com:6869/videos",
      method: "post",
      data: {
        model_action: "search",
        query_string: `${str}`,
        video_ids: [id],
        type: "local"
      }
    })
      .then(response => {
        let {
          data: { result_data }
        } = response;
        let timeStamp = result_data[0]["match_frame"]["start_time"];
        this.setState({ timeStamp: timeStamp }, () => {
          this.player.seek(this.state.timeStamp - 2);
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
  render() {
    const {
      item: { title, video_path, webvtt, video_id }
    } = this.props;
    return (
      <div>
        <div className="content">
          <h2>{title.ch}</h2>
        </div>
        <div className="box player-box">
          <Player
            ref={player => {
              this.player = player;
            }}
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
          <br />
          <div>
            <div className="field is-grouped">
              <p className="control is-expanded">
                <input
                  className="input"
                  type="text"
                  placeholder="Find a repository"
                  onChange={this.handleInput}
                />
              </p>
              <p className="control">
                <a
                  className="button is-info"
                  onClick={() => this.handleClick(video_id)}
                >
                  跳转字募
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default VideoPlayer;
