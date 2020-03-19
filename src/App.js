import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import VideoList from "./components/VideoList.js";
import VideoContent from "./components/VideoContent";
import "bulma/css/bulma.css";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      videoList: []
    };
  }
  componentDidMount() {
    this.queryVideo();
  }
  queryVideo = (str = "") => {
    axios({
      url: "http://seeker.haetek.com:6869/videos",
      method: "post",
      data: {
        model_action: "search",
        query_string: `${str}`,
        video_ids: [],
        type: "global"
      }
    })
      .then(response => {
        this.setState({ videoList: response.data.result_data });
      })
      .catch(error => {
        console.log(error);
      });
  };
  handleInput = e => {
    this.setState({ inputValue: e.target.value });
  };
  handleSearch = e => {
    e.preventDefault();
    this.queryVideo(this.state.inputValue);
  };
  render() {
    const { videoList } = this.state;
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <div className="content">
              <div className="field has-addons">
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder="Search Videos"
                    onChange={this.handleInput}
                  />
                </div>
                <div className="control">
                  <a
                    href="/"
                    className="button is-info"
                    onClick={this.handleSearch}
                  >
                    Search
                  </a>
                </div>
              </div>
            </div>
          </header>
          <Switch>
            <Route path="/video">
              <VideoContent />
            </Route>
            <Route path="/">
              <VideoList vlist={videoList} />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
