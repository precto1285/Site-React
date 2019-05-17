import React, { Component } from 'react';
import './App.css';
import InfoCard from './/Component/InfoCard';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      member: [
        {
          firstName: "Ronald",
          lastName: "Recto",
          userName: "rvrecto",
          email: "rvr@recto.com",
          status: "active"
        },
        {
          firstName: "Frank",
          lastName: "Recto",
          userName: "fpr2",
          email: "frecto@recto.com",
          status: "away"
        },
        {
          firstName: "Phil",
          lastName: "Recto",
          userName: "prexwebs",
          email: "prexwebs@gmail.com",
          status: "disabled"
        },
        {
          firstName: "Marty",
          lastName: "Recto",
          userName: "MDM4life",
          email: "mdrecto@recto.com",
          status: "active"
        }
      ]
    }
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
              firstName={this.state.member[0].firstName}
              lastName={this.state.member[0].lastName}
              userName={this.state.member[0].firstName}
              email={this.state.member[0].email}
              status={this.state.member[0].status}
            />
          </div>
          <div className="col-sm-3">
            <InfoCard
              firstName={this.state.member[1].firstName}
              lastName={this.state.member[1].lastName}
              userName={this.state.member[1].firstName}
              email={this.state.member[1].email}
              status={this.state.member[1].status}
            />
          </div>
          <div className="col-sm-3">
            <InfoCard
              firstName={this.state.member[2].firstName}
              lastName={this.state.member[2].lastName}
              userName={this.state.member[2].firstName}
              email={this.state.member[2].email}
              status={this.state.member[2].status}
            />
          </div>
          <div className="col-sm-3">
            <InfoCard
              firstName={this.state.member[3].firstName}
              lastName={this.state.member[3].lastName}
              userName={this.state.member[3].firstName}
              email={this.state.member[3].email}
              status={this.state.member[3].status}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
