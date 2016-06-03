import React, { Component } from 'react'
import {
	Text,
	View,
	Navigator,
} from 'react-native'

import * as Scenes from './scenes'

class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			compliments: [
				{
					id: 1,
					body: "You’re cute.",
				},
				{
					id: 2,
					body: "You’re also p smart",
				}
			],
		}
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

	addCompliment(compliment) {
		this.setState({
			compliments: this.state.compliments.concat(compliment),
		})
	}

	editCompliment(id, complimentPatch) {
		const compliments = this.state.compliments.map(compliment => {
			if (compliment.id !== id) {
				return compliment
			}

			return {
				...compliment,
				...complimentPatch,
			}
		})

		this.setState({ compliments: compliments })
	}

	deleteCompliment(id) {
		this.setState({
			compliments: this.state.compliments.filter(compliment =>
				compliment.id !== id),
		})
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

export default App
