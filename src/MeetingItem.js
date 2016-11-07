import React, { PureComponent, PropTypes } from 'react';

class MeetingItem extends PureComponent {
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

MeetingItem.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  attributes: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default MeetingItem;
