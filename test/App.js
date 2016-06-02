import React from 'react'
import { View, Text } from 'react-native'
import { shallow } from 'enzyme'
import { expect } from 'chai'

import App from '../components/App'

describe('<App />', () => {
	it('should render things', () => {
		const wrapper = shallow(<App />)
		expect(wrapper.find(View)).to.have.length(1)
		expect(wrapper.find(Text)).to.have.length(2)
	})
})
