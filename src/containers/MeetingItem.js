import React, { PropTypes } from 'react';
import moment from 'moment';

class MeetingItem extends React.Component {
  static propTypes = {
    id: PropTypes.string,
    date: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this._handleClick = this._handleClick.bind(this);
  }

  _handleClick() {
    const { props } = this;
    props.onClick(props.id);
  }

  render() {
    const { props } = this;

    return (
      <tr
        style={{ cursor: 'pointer' }}
        onClick={this._handleClick}
      >
        <td>{moment(props.date).format('Do MMMM YYYY.')}</td>
      </tr>
    );
  }
}

export default MeetingItem;
