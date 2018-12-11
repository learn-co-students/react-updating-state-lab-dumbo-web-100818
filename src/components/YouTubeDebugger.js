import React, {Component} from 'react';

export default class YouTubeDebugger extends Component {
  constructor(){
    super()
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
  }

  handleClick = (event) =>{
    if(event.target.className === "bitrate"){
      this.setState({
        settings: Object.assign({}, this.state.settings, {
          bitrate: 12
        })
      })
    }
    else if (event.target.className === "resolution"){
      console.log(event.target.className)
      this.setState({
        settings: {
          ...this.state.settings,
          video: {
            ...this.state.settings.video,
            resolution: "720p"
          }
        }
      })
    }
  }

  render(){
    return (
      <div>
      <button className="bitrate" onClick={this.handleClick}>Youtube Bitrate {this.state.settings.bitrate}</button>
      <button className="resolution" onClick={this.handleClick}>Youtube Resolution</button>
      </div>
    )
  }
}
