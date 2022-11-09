import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedin: false
        }
    }
    
  render() {
    if(this.state.isLoggedin) {
        return(
            <div>Welcome darling</div>
        )
    }
    else {
        return(
           <div>hey who are you?</div>
        )
    }
   

  

   
  }
}

export default UserGreeting

  
