import React, { PropTypes } from 'react';
import { reduxForm } from 'redux-form';

export const MeetingForm = (props) => {
  const {
    fields: { date },
    handleSubmit,
  } = props;

  return (
    <form className="form-inline m-b-1" onSubmit={handleSubmit}>
      <fieldset className="form-group">
        <label
          className="sr-only"
          htmlFor="meetingDate"
        >
          {'Datum'}
        </label>
        <input
          className="form-control"
          id="meetingDate"
          type="text"
          placeholder="Datum"
          {...date}
        />
      </fieldset>
      {' '}
      <button
        className="btn btn-primary"
        type="submit"
        onClick={handleSubmit}
      >
        {'Dodaj sastanak'}
      </button>
    </form>
  );
};

MeetingForm.propTypes = {
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'meeting',
  fields: ['date'],
})(MeetingForm);
