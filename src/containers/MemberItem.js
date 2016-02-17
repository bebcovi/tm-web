import React, { PropTypes } from 'react';

class MemberItem extends React.Component {
  static propTypes = {
    id: PropTypes.string,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  _handleClick = () => {
    this.props.onClick(this.props.id);
  };

  render() {
    return (
      <tr onClick={this._handleClick}>
        <td>{this.props.firstName}</td>
        <td>{this.props.lastName}</td>
        <td>
          {this.props.active ?
            <span className="label label-success">{'Da'}</span> :
            <span className="label label-default">{'Ne'}</span>}
        </td>
      </tr>
    );
  }
}

export default MemberItem;
