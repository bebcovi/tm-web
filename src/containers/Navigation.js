import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';

const Navigation = (props, context) => (
  <ul className="nav navbar-nav">
    {props.items.map(({ pathname, name }, i) => (
      <li
        key={i}
        className={classNames('nav-item', {
          active: context.router.isActive({ pathname }),
        })}
      >
        <Link
          className="nav-link"
          to={pathname}
        >
          {name}
        </Link>
      </li>
    ))}
  </ul>
);

Navigation.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      url: PropTypes.string,
    })
  ),
};

Navigation.contextTypes = {
  router: PropTypes.object.isRequired,
};

export default Navigation;
