import React, { Component } from 'react'
import {
	Text,
	TextInput,
	View,
} from 'react-native'

import Styles from '../../Styles'


export default class ComplimentForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			body: '',
			author: '',
		}
	}

	render() {
		return (
			<View style={{flex: 1, flexDirection: 'row'}}>
				<TextInput
					style={Styles.default}
					onChangeText={(body) => this.setState({ body })}
					value={this.state.body}
				/>
				<TextInput
					style={Styles.default}
					onChangeText={(author) => this.setState({ author })}
					value={this.state.author}
				/>
			</View>
		)
	}
}
