import { PropTypes } from 'react';

const MeetingBase = props => props.children;

MeetingBase.propTypes = {
  children: PropTypes.node,
};

export default MeetingBase;
