import React, {Component} from "react"; //{} doesn't require us to use React.Component
import './Hello.css';

class Hello extends Component{
    render(){
        return (
        <div>
        <h1>Hello World</h1>
        <p> Welcome to the cumzone</p>
        </div>
        )
    }
}

export default Hello;