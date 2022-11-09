
import React, { Component } from 'react'

 class ElementVariables extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedin: true
        }
    }
    
  render() {
    let message;
    if (this.state.isLoggedin) {
        message = <div>Welcome Dani</div>
    }
    else{
        message = <div>good trial</div>
    }

    return (<div>{message}</div>)
   
  }
}

export default ElementVariables

