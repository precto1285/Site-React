import React, { Component } from 'react';
import './App.css';
import InfoCard from './Component/InfoCard';
import InfoTable from './Component/InfoTable';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      customers: []
    }
  }

  showClickHandler() {
    this.setState({
      show: !this.state.show
    })
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
          <h1>Cards</h1>
        </div>
        <div className="jumbotron py-5 text-center"><h1>Customer Cards</h1></div>
        <div className="row">
          {
            this.state.customers.map((customer) => {
              return <div id="customerCard" className="col-sm-3">
                <InfoCard
                  key={customer.key}
                  firstName={customer.firstName}
                  lastName={customer.lastName}
                  userName={customer.userName}
                  email={customer.email}
                  status={customer.status}
                />
              </div>
            })
          }
        </div>
        <div className="jumbotron py-5 mt-5 text-center"><h1>Customer Table</h1></div>
        <div className="row mt-3 py-2">
          <div className="col-lg-12">
            <div id="customerTable">
              <div className="container">
                <button onClick={this.showClickHandler.bind(this)} className="btn btn-success btn-block text-white mb-3">Show Table</button>
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">First Name</th>
                      <th scope="col">Last Name</th>
                      <th scope="col">Username</th>
                      <th scope="col">Email</th>
                      <th scope="col">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      this.state.show ?
                        this.state.customers.map((customer) => {
                          return <InfoTable
                            key={customer.key}
                            firstName={customer.firstName}
                            lastName={customer.lastName}
                            userName={customer.userName}
                            email={customer.email}
                            status={customer.status}
                          />
                        }) : null
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
