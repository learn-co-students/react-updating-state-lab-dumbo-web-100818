// Code YouTubeDebugger Component Here
import React from 'react'


class YouTubeDebugger extends React.Component {
  constructor(props) {
    super(props)
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

  handleClick = (event) => {
    console.log(this.state.settings)
    this.setState({
      settings:{
        ...this.state.settings,
        bitrate:12
      }
    })
    console.log(this.state.setting)
  }

  handleResolution = (event) => {
    console.log(this.state.settings.video)
    this.setState({
      settings:{...this.state.settings,
        video:{...this.state.settings.video,
    resolution:'720p'
  }
    }
    })
  }

  render() {
    return (
      <div>
      <button className = "bitrate" onClick = {
      this.handleClick
    } > Bitrate < /button>
    <button className = "resolution" onClick = {
    this.handleResolution
  } > Resolution < /button>

    </div>
  )
  }

}

export default YouTubeDebugger
