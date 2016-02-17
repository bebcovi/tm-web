import React, { PropTypes } from 'react';
import { reduxForm } from 'redux-form';

class MemberForm extends React.Component {
  static propTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
  };

  render() {
    const { fields } = this.props;

    return (
      <form onSubmit={this.props.handleSubmit}>
        <fieldset className="form-group">
          <label htmlFor="memberFirstName">
            {'Ime'}
          </label>
          <input
            className="form-control"
            id="memberFirstName"
            type="text"
            {...fields.firstName}
          />
        </fieldset>
        <fieldset className="form-group">
          <label htmlFor="memberLastName">
            {'Prezime'}
          </label>
          <input
            className="form-control"
            id="memberLastName"
            type="text"
            {...fields.lastName}
          />
        </fieldset>
        <fieldset className="form-group">
          <label htmlFor="memberEmail">
            {'Email'}
          </label>
          <input
            className="form-control"
            id="memberEmail"
            type="email"
            {...fields.email}
          />
        </fieldset>
        <button
          className="btn btn-primary"
          type="submit"
        >
          {'Spremi'}
        </button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'member',
  fields: ['firstName', 'lastName', 'email'],
})(MemberForm);
