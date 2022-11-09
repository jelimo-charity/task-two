

import React, { Component } from 'react'

class TernaryOperator extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedin: true
        }
    }
    
  render() {
    return this.state.isLoggedin ? (
        <div>Hey team Best!!</div>
    ) : (
        <div>NOPE</div>
    )
       
         
        
  }
}

export default TernaryOperator
