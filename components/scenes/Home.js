import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableHighlight
} from 'react-native'

import Styles from '../Styles'

export default function Home({ changeView }) {
	return (
		<View style={Styles.container}>
			<Text>
				Curlew
			</Text>

			<TouchableHighlight onPress={changeView.bind(null, 'Manage')}>
				<Text>✚</Text>
			</TouchableHighlight>
		</View>
	)
}
