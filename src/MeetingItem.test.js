import React from 'react';
import { shallow } from 'enzyme';
import MeetingItem from './MeetingItem';
import { meeting } from './data';

it('outputs the date', () => {
  const wrapper = shallow(<MeetingItem {...meeting} onDelete={() => {}} />);
  expect(wrapper.text()).toContain(meeting.attributes.date);
});

it('calls onDelete with ID', () => {
  const handleDelete = jest.fn();
  const wrapper = shallow(<MeetingItem {...meeting} onDelete={handleDelete} />);
  wrapper.find('button').simulate('click');
  expect(handleDelete).toBeCalledWith(meeting.id);
});
