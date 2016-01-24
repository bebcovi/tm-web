import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MeetingForm from '../components/MeetingForm';
import { addItem as addMeeting } from '../redux/modules/meetings';

class MeetingsNew extends React.Component {
  static propTypes = {
    addMeeting: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleSubmit(...args) {
    const { props } = this;
    props.addMeeting(...args);
    props.history.pushState(null, '/meetings');
  }

  render() {
    return (
      <MeetingForm
        onSubmit={this._handleSubmit}
      />
    );
  }
}

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    addMeeting,
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MeetingsNew);
