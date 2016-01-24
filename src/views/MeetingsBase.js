import { PropTypes } from 'react';

const MeetingsBase = (props) => {
  return props.children;
};

MeetingsBase.propTypes = {
  children: PropTypes.node,
};

export default MeetingsBase;
