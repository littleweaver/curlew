import React, { Component } from 'react'
import {
	AsyncStorage,
	Text,
	View,
	Navigator,
} from 'react-native'

import { Home } from './Routes'

const StarterPacks = require('./packs.json')

class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			compliments: [],
		}

		this.loadItem('compliments', (data) => {
			if (data === null) {
				this.loadInitialCompliments()
			}
		})
	}

	getKey(key) {
		return "@Curlew:" + key
	}

	loadItem(key, cb) {
		AsyncStorage.getItem(this.getKey(key))
			.then((data) => {
				if (data !== null) {
					this.setState({
						[key]: JSON.parse(data),
					})
				}

				cb(data)
			})
	}

	saveItem(key, value) {
		AsyncStorage.setItem(
			this.getKey(key),
			JSON.stringify(value),
		)

		this.setState({
			[key]: value,
		})
	}

	loadInitialCompliments() {
		compliments = StarterPacks.reduce((acc, pack) => {
			return acc.concat(pack.compliments.map(compliment => {
				return {
					...compliment,
					pack: pack.name,
					status: 'enabled',
				}
			}))
		}, [])

		this.saveItem('compliments', compliments)
	}

	handleRenderScene(route, navigator) {
		return (
			<route.component
				navigator={navigator}
				compliments={this.state.compliments}
			/>
		)
	}

	configureScene(route, routeStack) {
		return route.transition
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
				initialRoute={Home()}
				renderScene={this.handleRenderScene.bind(this)}
				configureScene={this.configureScene.bind(this)}
			/>
		)
	}
}

export default App
