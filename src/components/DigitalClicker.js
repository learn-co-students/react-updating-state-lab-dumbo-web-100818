// Code DigitalClicker Component Here
import React from 'react';

class DigitalClicker extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      timesClicked: 0
    }
  }

  handleClick = () => {
    const clickerCount = this.state.timesClicked
    this.setState({
      timesClicked: clickerCount + 1
    })
  }

  render(){
    return(<button onClick={this.handleClick}>{this.state.timesClicked}</button>)
  }

}

export default DigitalClicker
