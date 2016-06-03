import React, { Component } from 'react'
import {
	View,
	Text,
	TouchableOpacity
} from 'react-native'

import * as Routes from '../Routes'
import Styles from '../Styles'

class Home extends Component {
	constructor(props) {
		super(props)

		this.state = {
			compliment: null,
		}
	}

	componentWillReceiveProps(nextProps) {
		if (this.state.compliment) {
			return
		}

		this.pickCompliment(nextProps.compliments)
	}

	pickCompliment(compliments) {
		let compliment
		if (compliments.length > 0) {
			const index = Math.floor(Math.random() * compliments.length)
			compliment = compliments[index]
		} else {
			compliment = null
		}

		this.setState({
			compliment: compliment,
		})
	}

	render() {
		const { navigator, compliments } = this.props
		const { compliment } = this.state

		return (
			<View style={Styles.container}>
				<Text>
					Curlew
				</Text>

				{compliment && (
					<View>
						<Text>
							{compliment.body}
						</Text>

						{compliment.author && (
							<Text>
								– {compliment.author}
							</Text>
						)}
					</View>
				)}

				<TouchableOpacity onPress={this.pickCompliment.bind(this, compliments)}>
					<Text>Get a new compliment</Text>
				</TouchableOpacity>

				<TouchableOpacity onPress={navigator.push.bind(null, Routes.Manage())}>
					<Text>✚</Text>
				</TouchableOpacity>
			</View>
		)
	}
}

Home.defaultProps = {
	compliments: [],
}

export default Home
