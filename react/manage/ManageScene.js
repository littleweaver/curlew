import React from 'react'
import {
	View,
	Text,
	TouchableOpacity,
} from 'react-native'

import Styles from '../Styles'
import ComplimentListView from './containers/ComplimentListView'
import ComplimentForm from './containers/ComplimentForm'


function ManageScene({ navigator, compliments }) {
	return (
		<View style={Styles.container}>
			<TouchableOpacity onPress={navigator.pop}>
				<Text>Back</Text>
			</TouchableOpacity>
			<ComplimentForm />
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
