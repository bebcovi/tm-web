import React, { Component, PropTypes } from 'react';
import shallowCompare from 'react-addons-shallow-compare';

class MeetingItem extends Component {
  static propTypes = {
    type: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    attributes: PropTypes.object.isRequired,
    onDelete: PropTypes.func.isRequired,
  };

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  onDelete = () => {
    this.props.onDelete(this.props.id);
  };

  render() {
    const { date } = this.props.attributes;

    return (
      <li className="MeetingItem">
        {date}
        <button type="button" onClick={this.onDelete}>
          {'×'}
        </button>
      </li>
    );
  }
}

export default MeetingItem;
