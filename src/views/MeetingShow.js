import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { routeActions } from 'redux-simple-router';
import { deleteItem as deleteMeeting } from '../redux/modules/meetings';
import * as Icon from '../components/icons';

class MeetingShow extends React.Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
    deleteMeeting: PropTypes.func.isRequired,
    push: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this._handleDelete = this._handleDelete.bind(this);
  }

  _handleDelete() {
    const pathname = this.props.location.pathname.split('/');
    const id = pathname[pathname.length - 1];
    this.props.deleteMeeting(id);
    this.props.push('/meetings');
  }

  render() {
    return (
      <div>
        <button
          className="btn btn-danger-outline"
          type="button"
          onClick={this._handleDelete}
        >
          <Icon.TrashCan />
          {'Obriši satanak'}
        </button>
      </div>
    );
  }
}

function mapStateToProps({ meetings }) {
  return {
    meetings,
  };
}

const mapDispatchToProps = {
  deleteMeeting,
  ...routeActions,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MeetingShow);
