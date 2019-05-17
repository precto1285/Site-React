import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <div className="navbar text-center py-3 bg-primary text-white">
          <h1>Hello World!</h1>
        </div>
        <div className="jumbotron py-5 text-center"><h1>Hello World!</h1></div>
        <div className="row">
          <div className="col-md-3 my-1 p-2 shadow-lg bg-transparent"><button className="btn btn-danger text-white font-weight-bolder">See More</button></div>
          <div className="col-md-3 my-1 p-2 shadow-lg bg-transparent"><button className="btn btn-danger text-white font-weight-bolder">See More</button></div>
          <div className="col-md-3 my-1 p-2 shadow-lg bg-transparent"><button className="btn btn-danger text-white font-weight-bolder">See More</button></div>
          <div className="col-md-3 my-1 p-2 shadow-lg bg-transparent"><button className="btn btn-danger text-white font-weight-bolder">See More</button></div>
        </div>
      </div>
    );
  }
}

export default App;
