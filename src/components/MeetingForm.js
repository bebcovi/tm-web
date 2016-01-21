import React, { PropTypes } from 'react';
import { reduxForm } from 'redux-form';

class MeetingForm extends React.Component {
  static propTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
  };

  render() {
    const {
      fields: { date },
      handleSubmit,
    } = this.props;

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
  }
}

MeetingForm = reduxForm({
  form: 'meeting',
  fields: ['date'],
})(MeetingForm);

export default MeetingForm;
