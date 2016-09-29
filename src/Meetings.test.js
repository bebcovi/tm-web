import React from 'react';
import { shallow, mount } from 'enzyme';
import Meetings, { EMPTY_MSG } from './Meetings';
import { meetings } from './data';

it('displays empty message', () => {
  const wrapper = shallow(<Meetings data={[]} onDelete={() => {}} />);
  expect(wrapper.text()).toContain(EMPTY_MSG);
});

it('outputs meetings', () => {
  const wrapper = mount(<Meetings data={meetings} onDelete={() => {}} />);
  expect(wrapper.find('Meeting').length).toBe(3);
});

it('calls onDelete with id', () => {
  const handleDelete = jest.fn();
  const wrapper = mount(<Meetings data={meetings} onDelete={handleDelete} />);
  wrapper.find('button').at(1).simulate('click');
  expect(handleDelete).toBeCalledWith('2');
});
