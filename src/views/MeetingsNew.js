import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { routeActions } from 'redux-simple-router';
import MeetingForm from '../containers/MeetingForm';
import { addItem, loadList } from '../redux/modules/meetings';

class MeetingsNew extends React.Component {
  static propTypes = {
    addItem: PropTypes.func.isRequired,
    loadList: PropTypes.func.isRequired,
    push: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleSubmit(...args) {
    this.props.addItem(args[0])
      .then(this.props.loadList)
      .then(this.props.push('/meetings'));
  }

  render() {
    return (
      <MeetingForm
        onSubmit={this._handleSubmit}
      />
    );
  }
}

const mapDispatchToProps = {
  addItem,
  loadList,
  ...routeActions,
};

export default connect(
  null,
  mapDispatchToProps,
)(MeetingsNew);
