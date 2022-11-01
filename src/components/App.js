import React, { Component } from 'react';
import Checking from './checking.js'

class App extends Component {
    constructor(){
        super();
        this.state = {
            blank : 'this is state',
        }
    }
    componentDidMount(){
        console.log('We have mounted!')
    }
    componentDidUpdate(){
        console.log('State has been updated!')
    }
    render(){
        //we render the Checking component, passing on a prop apple
        //we can access the prop by passing in props as an arg to checking
            //then we can access props.apple to output 'test prop'
        return (
            <div className='container'>
                <h1>Find me in app.js!</h1>
                <Checking apple = 'test prop'/>
            </div>
        )
    }
}

export default App;