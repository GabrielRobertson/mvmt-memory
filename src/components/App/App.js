import React, { Component } from 'react';
import base from '../../base';

class App extends Component {
  constructor() {
    super();

    // in future, make use of fetch & push for quiz and only sync state of 'database' for admin panel
    this.state = { database: {} };
  }

  componentWillMount() {
    this.ref = base.syncState('/', { context: this, state: 'database' });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          {JSON.stringify(this.state.database)}
        </p>
      </div>
    );
  }
}

export default App;
