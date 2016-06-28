import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { shallow } from 'enzyme'
import { expect } from 'chai'

import Home from '../components/scenes/Home'

class MockNavigator {
	constructor() {
		this.routes = []
	}

	push(route) {
		this.routes.push(route)
	}
}

describe('<Home />', () => {
	it('should render a compliment', () => {
		const compliments = [
			{
				id: 1,
				status: 'enabled',
				pack: 'foobar',
				body: 'Sample Body',
				author: 'Test Monkey'
			}
		]

		const navigator = new MockNavigator()

		const wrapper = shallow(
			<Home
				compliments={compliments}
				navigator={navigator}
			/>
		)

		expect(
			wrapper.find(Text).someWhere(node => {
				return node.childAt(1).text().includes(compliments[0].author)
			})
		).to.be.true

		expect(
			wrapper.find(Text).someWhere(node => {
				return node.childAt(0).text() === compliments[0].body
			})
		).to.be.true
	})
})
