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
        <h2>New meeting</h2>
        <div>
          <label>{'Date'}</label>
          <input
            type="text"
            placeholder="Date"
            {...date}
          />
        </div>
        <div>
          <label>{'Note'}</label>
          <textarea
            placeholder="Note"
            {...note}
          />
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
        >
          {'Submit'}
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
