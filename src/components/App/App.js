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

    // this will be mapStateToProps in ExpiermentContainer in the future
    const props = {
      pairs: [{ string: 'mofa', video: '1.mp4' }, { string: 'blabla', video: '5.mp4' }],
      phase: 0,
      slide: 1
    };

    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" render={() => <ExperimentContainer db={database} {...props} />} />
          <Route path="/secret-admin-login" component={AdminLogin} />
          <Route
            exact
            path="/admin-dashboard"
            render={() => (
              adminLoggedIn ? <AdminDashboard db={database} /> :
                <Redirect to="/secret-admin-login" />
            )}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
