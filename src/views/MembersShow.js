import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { routeActions } from 'react-router-redux';
import { Link } from 'react-router';
import MemberList from '../containers/MemberList';
import * as Icon from '../components/icons';

class MembersShow extends React.Component {
  static propTypes = {
    members: PropTypes.object.isRequired,
    push: PropTypes.func.isRequired,
  };

  _handleClick = (id) => {
    this.props.push('/members/' + id);
  };

  render() {
    return (
      <div>
        <Link
          className="btn btn-primary-outline m-b-1"
          to="/members/new"
        >
          <Icon.Plus />
          {'Dodaj člana'}
        </Link>
        <MemberList
          list={this.props.members.list}
          onClick={this._handleClick}
        />
      </div>
    );
  }
}

function mapStateToProps({ members }) {
  return {
    members,
  };
}

const mapDispatchToProps = {
  ...routeActions,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MembersShow);
