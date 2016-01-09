import React, { PropTypes } from 'react';
import { reduxForm } from 'redux-form';

class MeetingForm extends React.Component {
  static propTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
  };

  render() {
    const {
      fields: { date, note },
      handleSubmit,
    } = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <h2>Novi sastanak</h2>
        <fieldset className="form-group">
          <label htmlFor="meetingDate">
            {'Datum'}
          </label>
          <input
            className="form-control"
            id="meetingDate"
            type="text"
            {...date}
          />
        </fieldset>
        <fieldset className="form-group">
          <label htmlFor="meetingNote">
            {'Bilješka'}
          </label>
          <textarea
            className="form-control"
            id="meetingNote"
            {...note}
          />
        </fieldset>
        <button
          className="btn btn-primary"
          type="submit"
          onClick={handleSubmit}
        >
          {'Spremi'}
        </button>
      </form>
    );
  }
}

MeetingForm = reduxForm({
  form: 'meeting',
  fields: ['date', 'note'],
})(MeetingForm);

export default MeetingForm;
