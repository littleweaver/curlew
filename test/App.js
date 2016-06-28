import React from 'react'
import { Navigator } from 'react-native'
import { shallow } from 'enzyme'
import { expect } from 'chai'

import App from '../components/App'

describe('<App />', () => {
	it('should render navigator', () => {
		const wrapper = shallow(<App />)
		expect(wrapper.find(Navigator)).to.have.length(1)
	})
})
