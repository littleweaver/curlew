import React from 'react'
import {
	View,
	Text,
	TouchableOpacity,
} from 'react-native'

import Styles from '../Styles'
import ComplimentListView from './containers/ComplimentListView'


function ManageScene({ navigator, compliments }) {
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

ManageScene.defaultProps = {
	compliments: [],
}

export default ManageScene
