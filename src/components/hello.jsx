import React, { Component } from 'react'

class Hello extends Component {
    constructor() {
        super()
        this.state({
            text: "Do you love the page?" 
        })
    }
    changeText(){
        this.setState({
            text: "Welcome on Board"
        })
    }
    render() {
        return(
            <div>
                <h1>{this.state.text}</h1>
                <button onClick={()=>this.changeText}>SignUp</button>

            </div>
        )
    }
}
export default Hello;