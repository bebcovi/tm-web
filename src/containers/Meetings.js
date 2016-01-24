import React, { PropTypes } from 'react';
import moment from 'moment';
import * as propTypes from '../prop-types';

class Meetings extends React.Component {
  static propTypes = {
    list: PropTypes.arrayOf(propTypes.meeting).isRequired,
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { props } = this;

    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th />
            <th>Datum</th>
          </tr>
        </thead>
        <tbody>
          {props.list.map((meeting, i) => (
            <tr key={i}>
              <td>{`#${i + 1}`}</td>
              <td>
                {
                  moment(meeting.attributes.date)
                    .format('Do MMMM')
                }
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default Meetings;
