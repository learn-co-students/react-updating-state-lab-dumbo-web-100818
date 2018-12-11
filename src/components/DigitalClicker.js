// Code DigitalClicker Component Here
import React, {Component} from 'react'

class DigitalClicker extends Component{

constructor(){
  super()
  this.state = {
    timesClicked: 0
  }
}

handleClick=()=>{
  let newClick = this.state.timesClicked
  console.log(newClick)
  this.setState({
    timesClicked: (newClick+=1)
  })
}

  render(){
    return(
      <button onClick={this.handleClick}>{this.state.timesClicked}</button>
    )
  }

}

export default DigitalClicker
