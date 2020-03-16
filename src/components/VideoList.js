import React from "react";
import { useHistory } from "react-router-dom";
import "bulma/css/bulma.css";
import "../styles/video-list.css";

function VideoList() {
  let history = useHistory();
  const redirectTo = () => history.push("/video");
  return (
    <div className="video-list">
      <section className="section">
        <div className="container">
          <div className="columns is-multiline">
            {Array.from({ length: 6 }).map(i => (
              <div className="column is-3 video-item" onClick={redirectTo}>
                <div className="card">
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img
                        src="https://switch-cn.gtgres.com/global-images/737058f0-642d-11ea-b2ec-abc0f6730fb6.jpg"
                        alt="Placeholder image"
                      />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="contetn">
                      <div>simple video player</div>
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
