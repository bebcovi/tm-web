import React from 'react';
import Icon from '../Icon';

const chevron = {
  up: <path d="M10 9l-1.5 1.5-3.5-3.75L1.5 10.5 0 9l5-5 5 5z" />,
  right: <path d="M7.5 8L2.5 13l-1.5-1.5 3.75-3.5L1 4.5l1.5-1.5 5 5z" />,
  down: <path d="M5 11L0 6l1.5-1.5 3.5 3.75 3.5-3.75 1.5 1.5-5 5z" />,
  left: <path d="M5.5 3l1.5 1.5-3.75 3.5 3.75 3.5-1.5 1.5L0.5 8l5-5z" />,
};

const ChevronRight = ({ direction, ...props }) => (
  <Icon
    width={10}
    height={16}
    {...props}
  >
    {chevron[direction]}
  </Icon>
);

ChevronRight.propTypes = {
};

export default ChevronRight;
