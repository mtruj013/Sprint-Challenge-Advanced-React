import React from 'react';
import './App.css';
import axios from "axios";
import ReqPlayers from "./components/ReqPlayers"

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      data: []
    };
  }
  componentDidMount(){
    axios.get("http://localhost:5000/api/players")
    .then(response => {
      console.log(response);
      this.setState({data: response.data})
    })
    .catch(error => 
      console.error(error))
  }

  render(){
    return (
    <div className="App">
      <h1>Women's World Cup Players, Ranked</h1>

      {this.state.data && this.state.data.map(item => {
        console.log(item)
        return <ReqPlayers player={item}/>;
      })}
    </div>
  );
  }
  
}

export default App;
