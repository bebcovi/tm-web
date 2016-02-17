import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { routeActions } from 'react-router-redux';
import { deleteMemberPrompt, deleteMemberCancel, deleteMember } from '../redux/modules/members';
import Modal from '../components/Modal';
import * as Icon from '../components/icons';
import find from 'array-find';

class MemberShow extends React.Component {
  static propTypes = {
    deleteMember: PropTypes.func.isRequired,
    deleteMemberCancel: PropTypes.func.isRequired,
    deleteMemberPrompt: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    location: PropTypes.object.isRequired,
    members: PropTypes.object.isRequired,
    push: PropTypes.func.isRequired,
  };

  _handleDeletePrompt = () => {
    this.props.deleteMemberPrompt(this.props.id);
  };

  _handleDeleteCancel = () => {
    this.props.deleteMemberCancel(this.props.id);
  };

  _handleDeleteConfirm = () => {
    this.props.deleteMember(this.props.id);
    this.props.push('/members');
  };

  render() {
    return (
      <div>
        <button
          className="btn btn-danger-outline"
          type="button"
          onClick={this._handleDeletePrompt}
        >
          <Icon.TrashCan />
          {'Obriši člana'}
        </button>
        <Modal
          open={this.props.members.isDeleting}
          type="danger"
          title={'Jesi li siguran?'}
          options={[
            'Ups, nisam',
            'Jesam!',
          ]}
          onCancel={this._handleDeleteCancel}
          onConfirm={this._handleDeleteConfirm}
        >
          <p>{'Jesi li siguran da želiš obrisati ovog člana?'}</p>
        </Modal>
      </div>
    );
  }
}

function mapStateToProps({ members }, ownProps) {
  const pathname = ownProps.location.pathname.split('/');
  const id = pathname[pathname.length - 1];

  return {
    id,
    members,
  };
}

const mapDispatchToProps = {
  deleteMemberPrompt,
  deleteMemberCancel,
  deleteMember,
  ...routeActions,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MemberShow);
