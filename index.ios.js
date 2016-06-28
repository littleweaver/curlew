import React, { Component } from 'react'
import {
	AppRegistry,
} from 'react-native'

import App from './components/App'

class Curlew extends Component {
	render() {
		return <App />
	}
}

AppRegistry.registerComponent('Curlew', () => Curlew)
