import { PropTypes } from 'react';

export const meeting = PropTypes.shape({
  date: PropTypes.string,
  note: PropTypes.string,
});

export const member = PropTypes.shape({
  firsName: PropTypes.string,
  lastName: PropTypes.string,
  email: PropTypes.string,
  active: PropTypes.bool,
});
