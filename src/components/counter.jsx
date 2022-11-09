import React, { Component } from 'react'

class Counter extends Component {
    constructor(){
        super()
        this.state = {
            count: 1
        }
    }
    increment(){
        this.setState({
            count: this.state.count + 1
        })
    }
    render(){
        return(
            <div>
                count - {this.state.count}
                <button onClick={ () =>this.increment()}>counts</button>
            </div>
        )
    }
}

export default Counter;
    
       
    



