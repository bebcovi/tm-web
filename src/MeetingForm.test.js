import React from 'react';
import { shallow } from 'enzyme';
import MeetingForm from './MeetingForm';

const date = '2015-03-10';

it('changes state when fields change', () => {
  const event = { target: { value: date } };
  const wrapper = shallow(<MeetingForm onSubmit={jest.fn()} />);
  wrapper.find('[type="date"]').simulate('change', event);
  expect(wrapper.state('date')).toBe(event.target.value);
});

it('upon submit prevents default and calls onSubmit with state', () => {
  const handleSubmit = jest.fn();
  const state = { date };
  const event = { preventDefault: jest.fn() };
  const wrapper = shallow(<MeetingForm onSubmit={handleSubmit} />);
  wrapper.setState(state);
  wrapper.simulate('submit', event);
  expect(handleSubmit).toBeCalledWith(state);
  expect(event.preventDefault).toBeCalled();
});
