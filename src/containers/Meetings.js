import React, { PropTypes } from 'react';

class Meetings extends React.Component {
  static propTypes = {
    list: PropTypes.array.isRequired,
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { props } = this;

    return (
      <table className="table">
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
              <td>{meeting.attributes.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default Meetings;
