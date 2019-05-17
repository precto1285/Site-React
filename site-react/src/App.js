import React, { Component } from 'react';
import './App.css';
import InfoCard from './/Component/InfoCard';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customers: []
    }
  }

  componentDidMount(req, res) {
    let url = "http://localhost:5000/customers";
    fetch(url)
      .then(res => { return res.json() })
      .then(data => { this.setState({ customers: data }) })
  }

  render() {
    return (
      <div className="App container">
        <div className="navbar text-center py-3 bg-primary text-white">
          <h1>Hello World!</h1>
        </div>
        <div className="jumbotron py-5 text-center"><h1>Hello World!</h1></div>
        <div className="row">
          <div className="col-sm-3">
            <InfoCard
              firstName={this.state.customers.firstName}
              lastName={this.state.customers.lastName}
              userName={this.state.customers.firstName}
              email={this.state.customers.email}
              status={this.state.customers.status}
            />
          </div>
          <div className="col-sm-3">
            <InfoCard
              firstName={this.state.customers.firstName}
              lastName={this.state.customers.lastName}
              userName={this.state.customers.firstName}
              email={this.state.customers.email}
              status={this.state.customers.status}
            />
          </div>
          <div className="col-sm-3">
            <InfoCard
              firstName={this.state.customers.firstName}
              lastName={this.state.customers.lastName}
              userName={this.state.customers.firstName}
              email={this.state.customers.email}
              status={this.state.customers.status}
            />
          </div>
          <div className="col-sm-3">
            <InfoCard
              firstName={this.state.customers.firstName}
              lastName={this.state.customers.lastName}
              userName={this.state.customers.firstName}
              email={this.state.customers.email}
              status={this.state.customers.status}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
