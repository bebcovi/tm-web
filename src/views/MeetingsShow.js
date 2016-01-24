import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { routeActions } from 'redux-simple-router';
import MeetingList from '../containers/MeetingList';
import { loadList as loadMeetings } from '../redux/modules/meetings';
import * as Icon from '../components/icons';

export class MeetingsShow extends React.Component {
  static propTypes = {
    loadMeetings: PropTypes.func.isRequired,
    meetings: PropTypes.object.isRequired,
    push: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this._handleClick = this._handleClick.bind(this);
  }

  componentDidMount() {
    const { props } = this;
    props.loadMeetings();
  }

  _handleClick(id) {
    const { props } = this;
    props.push('/meetings/' + id);
  }

  render() {
    const { props } = this;

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
          {...props.meetings}
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
  loadMeetings,
  ...routeActions,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MeetingsShow);
