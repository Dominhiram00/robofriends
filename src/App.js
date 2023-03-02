import React from "react";
import CardList from "./CardList";
import { robots } from "./Robots";
import SearchBox from "./SearchBox";
//Props are always just static inputs. Things that come out of state.
//Memory is needed for this app. State is the answer which means the description of my app a.k.a an Object. Tells the props what it is.

class App extends React.Component{
    constructor() {
        super() //main constructor of React.Component
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    onSearchChange = (event) =>{
        this.setState({searchfield: event.target.value})
    }

    render(){
        const filteredRobots = this.state.robots.filter(robots =>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
    return(
    <div className = 'tc'>
        <h1>RobotFriends</h1>
        <SearchBox searchChange = {this.onSearchChange}/>
        <CardList robots = {filteredRobots}/>
    </div>
    );
    }
}

export default App;