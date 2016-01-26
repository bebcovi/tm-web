import React, { PropTypes } from 'react';
import moment from 'moment';

class MeetingItem extends React.Component {
  static propTypes = {
    id: PropTypes.string,
    date: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  _handleClick = () => {
    this.props.onClick(this.props.id);
  };

  render() {
    const { props } = this;

    return (
      <tr onClick={this._handleClick}>
        <td>{moment(props.date).format('Do MMMM YYYY.')}</td>
      </tr>
    );
  }
}

export default MeetingItem;
