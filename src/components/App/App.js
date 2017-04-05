import React, { Component } from 'react';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import base from '../../base';
import AdminDashboard from '../AdminDashboard/AdminDashboard';
import AdminLogin from '../AdminLogin/AdminLogin';
import ExperimentContainer from '../ExperimentContainer/ExperimentContainer';

class App extends Component {
  constructor() {
    super();

    // in future, make use of fetch & push for quiz and only sync state of 'database' for admin panel
    this.state = {
      database: {},
      adminLoggedIn: false,
    };
  }

  componentWillMount() {
    this.ref = base.syncState('/', { context: this, state: 'database' });
  }

  render() {
    const { adminLoggedIn, database } = this.state;

    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={ExperimentContainer} />
          <Route path="/secret-admin-login" component={AdminLogin} />
          <Route
            exact
            path="/admin-dashboard"
            render={() => (
              adminLoggedIn ? <AdminDashboard database={database} /> :
                <Redirect to="/secret-admin-login" />
            )}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
