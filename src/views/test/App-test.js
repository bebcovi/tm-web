import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import App from '../App';

describe('<App />', () => {
	it('renders given children', () => {
		const child = <div className="child" />;
		const wrapper = shallow(
			<App>
				{child}
			</App>
		);
		expect(wrapper.contains(child)).to.be.true;
	});
});
