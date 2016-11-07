import React from 'react';
import { shallow } from 'enzyme';
import MemberItem from './MemberItem';
import { member } from './data';

it('calls onChange with updated member ', () => {
  const handleUpdate = jest.fn();
  const event = { target: { checked: true } };
  const wrapper = shallow(<MemberItem member={member} onUpdate={handleUpdate} />);
  wrapper.find('[type="checkbox"]').simulate('change', event);
  expect(handleUpdate.mock.calls[0][0].attributes.active).toBe(true);
});
