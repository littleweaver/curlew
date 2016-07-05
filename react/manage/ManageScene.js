import React, { Component } from 'react'
import {
	View,
	Text,
	TouchableOpacity,
	ListView,
} from 'react-native'

import * as Routes from '../Routes'
import Styles from '../Styles'

import ComplimentListView from './containers/ComplimentListView'


class ManageScene extends Component {
	render() {
		const { navigator, compliments } = this.props

		return (
			<View style={Styles.container}>
				<TouchableOpacity onPress={navigator.pop}>
					<Text>Back</Text>
				</TouchableOpacity>

				<ComplimentListView
					compliments={compliments}
				/>
			</View>
		)
	}
}

ManageScene.defaultProps = {
	compliments: [],
}

export default ManageScene
