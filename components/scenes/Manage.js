import React, { Component } from 'react'
import {
	View,
	Text,
	TouchableOpacity
} from 'react-native'

import * as Routes from '../Routes'
import Styles from '../Styles'

export default class Manage extends Component {
	render() {
		const { navigator } = this.props

		return (
			<View style={Styles.container}>
				<TouchableOpacity onPress={navigator.pop}>
					<Text>Back</Text>
				</TouchableOpacity>
			</View>
		)
	}
}
