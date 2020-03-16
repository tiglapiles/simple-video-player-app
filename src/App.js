import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import VideoList from "./components/VideoList.js";
import VideoContent from "./components/VideoContent";
import "bulma/css/bulma.css";
import "./App.css";

function App() {
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
                />
              </div>
              <div className="control">
                <a href="/" className="button is-info">
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
            <VideoList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
