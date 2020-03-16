import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bulma/css/bulma.css";

function VideoList() {
  return (
    <div className="VideoList">
      <section className="section">
        <div className="container">
          <div className="columns is-multiline">
            {Array.from({ length: 6 }).map(i => (
              <div className="column is-3">
                <div className="card">
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img
                        src="https://s.alicdn.com/@img/tfs/TB1t2yKwaL7gK0jSZFBXXXZZpXa-582-582.png_320x320xz.jpg"
                        alt="Placeholder image"
                      />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="contetn">
                      <Link to="/video">simple video player</Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default VideoList;
