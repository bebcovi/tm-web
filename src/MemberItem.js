import React, { PureComponent, PropTypes } from 'react';
import update from 'react-addons-update';

class MemberItem extends PureComponent {
  static propTypes = {
    member: PropTypes.shape({
      type: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      attributes: PropTypes.object.isRequired,
    }).isRequired,
    onUpdate: PropTypes.func.isRequired,
  };

  _handleChange = event => {
    this.props.onUpdate(update(this.props.member, {
      attributes: { active: { $set: event.target.checked } }
    }));
  };

  render() {
    const { firstName, lastName, active } = this.props.member.attributes;

    return (
      <li className="MemberItem">
        {firstName} {lastName}
        <input
          type="checkbox"
          checked={active}
          onChange={this._handleChange}
        />
      </li>
    );
  }
}

export default MemberItem;
