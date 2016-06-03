// @flow
import React, { Component } from 'react'
import {
	AppRegistry,
	StyleSheet,
	Text,
	TouchableHighlight,
	Navigator,
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

	handleRenderScene(route, navigator) {
		const SceneComponent = Scenes[route.component]
		return <SceneComponent
			key={route.component}
			navigator={navigator}
		/>
	}

	configureScene(route, routeStack) {
		if (route.component === 'Home') {
			return Navigator.SceneConfigs.VerticalDownSwipeJump
		} else {
			return Navigator.SceneConfigs.VerticalUpSwipeJump
		}
	}

	render() {
		return (
			<Navigator
				initialRoute={{ component: 'Home' }}
				renderScene={this.handleRenderScene.bind(this)}
				configureScene={this.configureScene.bind(this)}
			/>
		)
	}
}

AppRegistry.registerComponent('Curlew', () => Curlew)
