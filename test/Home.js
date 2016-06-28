import React from 'react'
import { Text } from 'react-native'
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

		const wrapper = shallow(
			<Home
				compliments={compliments}
				navigator={new MockNavigator()}
			/>
		)

		expect(
			wrapper.find(Text).someWhere(node => {
				return node.text() === compliments[0].author
			})
		)

		expect(
			wrapper.find(Text).someWhere(node => {
				return node.text() === compliments[0].body
			})
		)
	})
})
