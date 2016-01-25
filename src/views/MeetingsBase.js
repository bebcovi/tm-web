import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { loadList } from '../redux/modules/meetings';

class MeetingsBase extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    loadList: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.loadList();
  }

  render() {
    return this.props.children;
  }
}

const mapDispatchToProps = {
  loadList,
};

export default connect(
  null,
  mapDispatchToProps,
)(MeetingsBase);
