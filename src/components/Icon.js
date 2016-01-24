import React, { PropTypes } from 'react';
import classNames from 'classnames';
import * as styles from '../styles/Icon.scss';

const Icon = (props) => (
  <div
    className={classNames([
      styles.container,
      props.className,
    ])}
  >
    <svg
      width={Math.round(props.width * props.size)}
      height={Math.round(props.height * props.size)}
      fill="currentColor"
    >
      {props.children}
    </svg>
  </div>
);

Icon.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  size: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};

Icon.defaultProps = {
  size: 1,
};

export default Icon;
