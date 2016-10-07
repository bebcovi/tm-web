import React from 'react';
import { shallow } from 'enzyme';
import MeetingList, { EMPTY_MSG } from './MeetingList';
import { meetings } from './data';

it('displays empty message', () => {
  const wrapper = shallow(<MeetingList meetings={[]} onDelete={() => {}} />);
  expect(wrapper.text()).toContain(EMPTY_MSG);
});

it('outputs meetings', () => {
  const wrapper = shallow(<MeetingList meetings={meetings} onDelete={() => {}} />);
  expect(wrapper.find('MeetingItem').length).toBe(meetings.length);
});
