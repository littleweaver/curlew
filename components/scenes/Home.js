import React, { Component } from 'react'
import {
	View,
	Text,
	TouchableOpacity
} from 'react-native'

import * as Routes from '../Routes'
import Styles from '../Styles'

export default class Home extends Component {
	render() {
		const { navigator } = this.props

		return (
			<View style={Styles.container}>
				<Text>
					Curlew
				</Text>

				<TouchableOpacity onPress={navigator.push.bind(null, Routes.Manage())}>
					<Text>✚</Text>
				</TouchableOpacity>
			</View>
		)
	}
}
