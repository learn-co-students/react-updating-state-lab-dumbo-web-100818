// Code YouTubeDebugger Component Here
import React, { Component } from "react";

class YouTubeDebugger extends Component {
  constructor() {
    super();
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: "1080p"
        }
      }
    };
  }

  handleResolution = event => {
    //set resolution to 720p
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        video: Object.assign({}, this.state.settings.video, {
          resolution: "720p"
        })
      })
    });
  };

  handleBitrate = event => {
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        bitrate: 12
      })
    });
  };

  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.handleBitrate}>
          Change Bitrate
        </button>
        <button className="resolution" onClick={this.handleResolution}>
          Change Resolution
        </button>
      </div>
    );
  }
}

export default YouTubeDebugger;
