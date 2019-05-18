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

  componentDidMount() {
    let url = "http://localhost:5000/customers";
    fetch(url)
      .then(res => { return res.json() })
      .then(customers => { this.setState({ customers: customers }) })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="App container">
        <div className="navbar text-center py-3 bg-primary text-white">
          <h1>Hello World!</h1>
        </div>
        <div className="jumbotron py-5 text-center"><h1>Hello World!</h1></div>
        <div className="row">
          {
            this.state.customers.map((customer) => {
              return <div id="customerCard" className="col-sm-3">
                <InfoCard
                  key={customer.key}
                  firstName={customer.firstName}
                  lastName={customer.lastName}
                  userName={customer.firstName}
                  email={customer.email}
                  status={customer.status}
                />
              </div>
            })


          }
        </div>
      </div>
    );
  }
}

export default App;
