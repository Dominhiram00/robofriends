import React from "react";
import CardList from "../components/CardList.js";
import SearchBox from "../components/SearchBox.js";
import Scroll from '../components/Scroll';
//This file has a state which makes this a smart component. Usually has class.
//Props are always just static inputs. Things that come out of state.
//Memory is needed for this app. State is the answer which means the description of my app a.k.a an Object. Tells the props what it is.

class App extends React.Component{
    constructor() {
        super() //main constructor of React.Component
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            return response.json();
        })
        .then(users => {
            this.setState({robots: users})
        });
    }
    onSearchChange = (event) =>{
        this.setState({searchfield: event.target.value})
    }

    render(){
        const filteredRobots = this.state.robots.filter(robot =>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
    if(this.state.robots.length ===0 ){
        return <h1>Loading</h1>
    } else {
    return(
    <div className = 'tc'>
        <h1>RobotFriends</h1>
        <SearchBox searchChange = {this.onSearchChange}/>
        <Scroll>
                <CardList robots = {filteredRobots} />
        </Scroll>
    </div>
    );
    }
}
}

export default App;