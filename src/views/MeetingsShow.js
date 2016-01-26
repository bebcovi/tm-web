import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { routeActions } from 'react-router-redux';
import MeetingList from '../containers/MeetingList';
import * as Icon from '../components/icons';

export class MeetingsShow extends React.Component {
  static propTypes = {
    meetings: PropTypes.object.isRequired,
    push: PropTypes.func.isRequired,
  };

  _handleClick = (id) => {
    this.props.push('/meetings/' + id);
  };

  render() {
    return (
      <div>
        <Link
          className="btn btn-primary-outline m-b-1"
          to="/meetings/new"
        >
          <Icon.Plus />
          {'Dodaj sastanak'}
        </Link>
        <MeetingList
          {...this.props.meetings}
          onClick={this._handleClick}
        />
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
  ...routeActions,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MeetingsShow);
