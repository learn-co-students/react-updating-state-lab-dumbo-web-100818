// Code DigitalClicker Component Here
import React from 'react'

export default class DigitalClicker extends React.Component {

  state ={
    timesClicked: 0
  }

  handleClick = () => {
    const num = this.state.timesClicked + 1
    this.setState({
      timesClicked: num
    })
  }

  render(){
    return(
      <button onClick={this.handleClick}>
       {this.state.timesClicked}
       </button>

    )
  }
}
