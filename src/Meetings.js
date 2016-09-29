import React, { Component, PropTypes } from 'react';

export const EMPTY_MSG = 'Još nema unesenih sastanaka.';

class Meeting extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    attributes: PropTypes.object.isRequired,
    onDelete: PropTypes.func.isRequired,
  };

  onDelete = () => {
    this.props.onDelete(this.props.id);
  };

  render() {
    return (
      <li>
        {this.props.attributes.date}
        <button type="button" onClick={this.onDelete}>
          {'×'}
        </button>
      </li>
    );
  }
}

class Meetings extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired,
  }

  render() {
    return (
      <ul>
        {this.props.data.length ? this.props.data.map(item => (
          <Meeting
            key={item.id}
            onDelete={this.props.onDelete}
            {...item}
          />
        )) : EMPTY_MSG}
      </ul>
    );
  }
}

export default Meetings;
