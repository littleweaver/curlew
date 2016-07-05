import React, { Component } from 'react'
import {
	View,
	Text,
	TouchableHighlight
} from 'react-native'

import Styles from '../Styles'

export default function SettingsScene({ changeView }) {
	return (
		<View style={Styles.container}>
			<TouchableHighlight onPress={changeView.bind(null, 'Home')}>
				<Text>Back</Text>
			</TouchableHighlight>
		</View>
	)
}
