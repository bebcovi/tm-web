import React from 'react';
import expect from 'expect';
import App from 'views/App';

const { shallow } = global.enzyme;

describe('<App />', () => {
	it('renders given children', () => {
		const child = <div className="child" />;
		const wrapper = shallow(
			<App>
				{child}
			</App>
		);
		expect(
			wrapper.contains(child)
		).toBe(true);
	});
});
