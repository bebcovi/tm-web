import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Match, Miss, Link } from 'react-router';

import Home from './Home';
import Meetings from './Meetings';
import Members from './Members';
import NoMatch from './NoMatch';

import { getMeetings, getMembers } from './actions';

import logo from './logo.png';
import './App.css';

export class App extends Component {
  componentWillMount() {
    this.props.getMeetings();
    this.props.getMembers();
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header>
            <img src={logo} alt="logo" />
            <h1>{'Klub Toastmastera Zagreb'}</h1>
          </header>
          <nav>
            <ul>
              <li><Link to="/meetings">{'Sastanci'}</Link></li>
              <li><Link to="/members">{'Članovi'}</Link></li>
            </ul>
          </nav>
          <div className="container">
            <Match exactly pattern="/" component={Home} />
            <Match pattern="/meetings" component={Meetings} />
            <Match pattern="/members" component={Members} />
            <Miss component={NoMatch} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  getMeetings: PropTypes.func.isRequired,
  getMembers: PropTypes.func.isRequired,
};

export default connect(null, {
  getMeetings: getMeetings.request,
  getMembers: getMembers.request,
})(App);
