import React, { Component } from "react";
import './App.css'
import PicOfDay from "./components/picOfDay/picOfDay";

class App extends Component {
  state = {
    pictureData: {},
  };

  key = "yjAHVxbgGZ1PsNxgtpq7uarN6vssONNlBKddfmHs";

  componentDidMount() {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${this.key}`)
      .then((response) => response.json())
      .then((data) => this.setState({pictureData: data}));
  }
  render() {
    const { pictureData} = this.state;
    return (<div className="App">
     <PicOfDay pictureData={pictureData}/>
    </div>);
  }
}

export default App;
