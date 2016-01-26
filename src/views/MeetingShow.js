import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { routeActions } from 'redux-simple-router';
import {
  promptDeleteMeeting,
  cancelDeleteMeeting,
  confirmDeleteMeeting,
} from '../redux/modules/meetings';
import Modal from '../components/Modal';
import * as Icon from '../components/icons';

class MeetingShow extends React.Component {
  static propTypes = {
    promptDeleteMeeting: PropTypes.func.isRequired,
    cancelDeleteMeeting: PropTypes.func.isRequired,
    confirmDeleteMeeting: PropTypes.func.isRequired,
    location: PropTypes.object.isRequired,
    meetings: PropTypes.object.isRequired,
    push: PropTypes.func.isRequired,
  };

  _handleDelete = () => {
    const pathname = this.props.location.pathname.split('/');
    const id = pathname[pathname.length - 1];
    this.props.confirmDeleteMeeting(id);
    this.props.push('/meetings');
  };

  render() {
    return (
      <div>
        <button
          className="btn btn-danger-outline"
          type="button"
          onClick={this.props.promptDeleteMeeting}
        >
          <Icon.TrashCan />
          {'Obriši satanak'}
        </button>
        <Modal
          open={this.props.meetings.deletePrompt}
          type="danger"
          title={'Jesi li siguran?'}
          options={[
            'Ups, nisam',
            'Jesam!',
          ]}
          onCancel={this.props.cancelDeleteMeeting}
          onConfirm={this._handleDelete}
        >
          <p>{'Jesi li siguran da želiš obrisati ovaj sastanak?'}</p>
        </Modal>
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
  promptDeleteMeeting,
  cancelDeleteMeeting,
  confirmDeleteMeeting,
  ...routeActions,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MeetingShow);
