import React from 'react'
import {
	View,
	Text,
} from 'react-native'

import Styles from '../../Styles'


export default function ComplimentListItem(props) {
	return (
		<View style={Styles.listItem}>
			<Text style={Styles.bold}>
				{props.body}
			</Text>
			<Text>
				{props.author}
			</Text>
		</View>
	)
}
