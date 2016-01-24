import React from 'react';
import Icon from '../Icon';

const Plus = (props) => (
  <Icon
    width={12}
    height={16}
    {...props}
  >
    <path d="M12 9H7v5H5V9H0V7h5V2h2v5h5v2z" />
  </Icon>
);

Plus.propTypes = {
};

export default Plus;
