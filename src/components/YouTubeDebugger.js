// Code YouTubeDebugger Component Here


import React from 'react'

export default class YouTubeDebugger extends React.Component {

  state ={
    errors: [],
    user: null,
    settings: {
      bitrate: 8,
      video: {
        resolution: '1080p'
      }
    }
  }

  handleClick = (e) => {
    if(e.target.className === "bitrate"){
      debugger
      this.setState({
        settings: {...this.state.settings,
           bitrate: 12}
        })
    } else if (e.target.className === "resolution") {
      this.setState({
        settings: {
          ...this.state.settings,
          video: {
            ...this.state.settings.video,
            resolution: '720p'
          }
        },
      });
    }
  }

  render(){
    return( <div>
      <button onClick={this.handleClick} className={'bitrate'}>
      {this.state.settings.bitrate}
      </button>

      <button onClick={this.handleClick} className={'resolution'}>
      {this.state.settings.video.resolution}
      </button>

      </div>

    )
  }
}
