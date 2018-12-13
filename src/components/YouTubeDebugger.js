// Code YouTubeDebugger Component Here
import React, { Component } from 'react';

class YouTubeDebugger extends Component {

  state = {
    errors: [],
    user: null,
    settings: {
      bitrate: 8,
      video: {
    resolution: '1080p'
    }
  }
}

  updateBit = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    })
  }

  updateRes = () => {
    this.setState({
      settings: {
        ...this.state.settings,
      video: {
        ...this.state.video,
        resolution: '720p'
      }
      }
    })
  }

  render() {
    return (
      <div>
        <button className='bitrate' onClick={this.updateBit}>

        </button>
        <button className='resolution' onClick={this.updateRes}>

        </button>
      </div>
    );
  }

}

export default YouTubeDebugger;
