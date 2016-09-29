import React, { Component } from 'react';
import MeetingForm from './MeetingForm';
import Meetings from './Meetings';
import * as api from './api';
import compareDesc from 'date-fns/compare_desc';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    meetings: [],
    members: [],
  };

  componentWillMount() {
    api.getMeetings().then(response => {
      this.setState({ meetings: response.data });
    });
  }

  createMeeting = meeting => {
    api.createMeeting(meeting).then(response => {
      this.setState(prevState => ({
        meetings: prevState.meetings
          .concat(response.data)
          .sort((a, b) => compareDesc(a.attributes.date, b.attributes.date)),
      }));
    });
  };

  deleteMeeting = id => {
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
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Klub Toastmastera Zagreb</h1>
        </div>
        <div className="container">
          <h2>Sastanci</h2>
          <MeetingForm onSubmit={this.createMeeting} />
          <Meetings
            data={this.state.meetings}
            onDelete={this.deleteMeeting}
          />
        </div>
      </div>
    );
  }
}

export default App;
