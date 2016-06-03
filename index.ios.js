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
import * as Scenes from './components/scenes'

class Curlew extends Component {
	constructor(props) {
		super(props)

		this.state = {
			currentView: 'Home',
		}

		this.boundChangeView = this.changeView.bind(this)
	}

	changeView(nextView) {
		this.setState({ currentView: nextView })
	}

	render() {
		return Scenes[this.state.currentView]({
			changeView: this.boundChangeView,
		})
	}
}

AppRegistry.registerComponent('Curlew', () => Curlew)
