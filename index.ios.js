// @flow
import React, { Component } from 'react'
import {
	AppRegistry,
	StyleSheet,
	Text,
	TouchableHighlight,
	View
} from 'react-native'

import App from './components/App'

class Curlew extends Component {
	constructor(props) {
		super(props)

		this.state = {
			currentView: 'home',
		}

		this.boundChangeView = this.changeView.bind(this)
	}

	changeView(nextView) {
		this.setState({ currentView: nextView })
	}

	render() {
		return Views[this.state.currentView]({
			changeView: this.boundChangeView,
		})
	}
}

const Views = {}
Views.home = function({ changeView }) {
	return (
		<View style={styles.container}>
			<Text style={styles.welcome}>
				Curlew
			</Text>

			<TouchableHighlight onPress={changeView.bind(null, 'manage')}>
				<Text>✚</Text>
			</TouchableHighlight>
		</View>
	)
}

Views.manage = function({ changeView }) {
	return (
		<View style={styles.container}>
			<TouchableHighlight onPress={changeView.bind(null, 'home')}>
				<Text>Back</Text>
			</TouchableHighlight>
		</View>
	)
}

Views.settings = function({ changeView }) {
	return (
		<View style={styles.container}>
			<TouchableHighlight onPress={changeView.bind(null, 'home')}>
				<Text>Back</Text>
			</TouchableHighlight>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
})

AppRegistry.registerComponent('Curlew', () => Curlew)
