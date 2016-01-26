import React, { PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import DayPicker, { DateUtils } from 'react-day-picker';
import LocaleUtils from 'react-day-picker/moment';
import moment from 'moment';
import * as Icon from '../components/icons';

import 'react-day-picker/lib/style.css';

export class MeetingForm extends React.Component {
  static propTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this._selected = this._selected.bind(this);
    this._handleDayClick = this._handleDayClick.bind(this);
  }

  _selected(day) {
    const { fields } = this.props;
    return DateUtils.isSameDay(day, moment(fields.date.value).toDate());
  }

  _disabled(day) {
    return day.getDay() !== 4;
  }

  _handleDayClick(event, day, modifiers) {
    if (modifiers.indexOf('disabled') === -1) {
      const { fields } = this.props;
      fields.date.onChange(moment(day).format('YYYY-MM-DD'));
    }
  }

  render() {
    const modifiers = {
      selected: this._selected,
      disabled: this._disabled,
    };

    return (
      <form
        className="text-xs-center"
        onSubmit={this.props.handleSubmit}
      >
        <h4>{'Odaberi vrijeme sastanka'}</h4>
        <DayPicker
          localeUtils={LocaleUtils}
          locale="hr"
          enableOutsideDays={true}
          modifiers={modifiers}
          onDayClick={this._handleDayClick}
        />
        <button
          className="btn btn-primary"
          type="submit"
        >
          {'Dalje'}
          <Icon.Chevron direction="right" />
        </button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'meeting',
  fields: ['date'],
})(MeetingForm);
