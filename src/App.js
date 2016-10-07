import React, { Component } from 'react';
import { BrowserRouter, Match, Miss, Link } from 'react-router';
import * as api from './api';
import compareDesc from 'date-fns/compare_desc';

import Home from './Home';
import Meetings from './Meetings';
import NoMatch from './NoMatch';

import logo from './logo.png';
import './App.css';

class App extends Component {
  state = {
    meetings: [],
  };

  componentWillMount() {
    api.getMeetings().then(response => {
      this.setState({ meetings: response.data });
    });
  }

  _createMeeting = meeting => {
    api.createMeeting(meeting).then(response => {
      this.setState(prevState => ({
        meetings: prevState.meetings
          .concat(response.data)
          .sort((a, b) => compareDesc(a.attributes.date, b.attributes.date)),
      }));
    });
  };

  _deleteMeeting = id => {
    if (confirm('Jesi li siguran da želiš obrisati ovaj sastanak?')) {
      api.deleteMeeting(id).then(() => {
        this.setState(prevState => ({
          meetings: prevState.meetings.filter(meeting => meeting.id !== id),
        }));
      });
    }
  };

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
            </ul>
          </nav>
          <div className="container">
            <Match
              exactly pattern="/"
              component={Home}
            />
            <Match
              pattern="/meetings"
              render={matchProps => (
                <Meetings
                  {...matchProps}
                  meetings={this.state.meetings}
                  onCreate={this._createMeeting}
                  onDelete={this._deleteMeeting}
                />
              )}
            />
            <Miss component={NoMatch} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
