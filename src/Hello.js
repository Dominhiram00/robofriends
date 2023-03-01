import React, {Component} from "react"; //{} doesn't require us to use React.Component
import './Hello.css';
//A virtual dom is created under <div> enabling HTML under here. Put className over class
//this. means "this object has props that is greeting"

class Hello extends Component{
    render(){
        return (
        <div className = 'f1 tc'>  
        <h1>Hello World</h1>
        <p> {this.props.greeting}</p>
        </div>
        )
    }
}

export default Hello;