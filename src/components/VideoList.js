import React from "react";
import { useHistory } from "react-router-dom";
import "bulma/css/bulma.css";
import "../styles/video-list.css";

function VideoList({ vlist = [] }) {
  let history = useHistory();
  const redirectTo = o => {
    history.push("/video", { ...o });
  };
  return (
    <div className="video-list">
      <section className="section">
        <div className="container">
          <div className="columns is-multiline">
            {vlist.map((o, i) => (
              <div
                className="column is-3 video-item"
                onClick={() => redirectTo(o)}
                key={i}
              >
                <div className="card">
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img
                        src="https://switch-cn.gtgres.com/global-images/737058f0-642d-11ea-b2ec-abc0f6730fb6.jpg"
                        alt="Placeholder"
                      />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="contetn">
                      <div>{o.title.ch}</div>
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
