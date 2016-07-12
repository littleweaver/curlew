import React, { Component } from 'react'
import {
	View,
	Dimensions,
	Text,
	TouchableOpacity,
	PanResponder
} from 'react-native'

import * as Routes from '../Routes'
import Styles from '../Styles'

class HomeScene extends Component {
	constructor(props) {
		super(props)

		this.state = {
			swipeLeftHandled: false,
			compliment: this.getRandomCompliment(props.compliments),
		}
	}

	componentWillMount() {
		this._panResponder = PanResponder.create({
			onStartShouldSetPanResponder: () => true,
			onStartShouldSetPanResponderCapture: () => true,

			onPanResponderMove: (evt, gestureState) => {
				console.log(this.state.swipeLeftHandled)
				if (this.state.swipeLeftHandled) {
					return
				}

				const {height, width} = Dimensions.get('window')
				const thresh = -1 * width / 2

				if (gestureState.dx < (thresh)) {
					this.setState({
						swipeLeftHandled: true
					})
					this.pickCompliment()
				}
			},

			onPanResponderRelease: (evt, gestureState) => {
				this.setState({
					swipeLeftHandled: false
				})
			}
		})
	}

	componentWillReceiveProps(nextProps) {
		if (this.state.compliment) {
			return
		}

		this.setState({
			compliment: this.getRandomCompliment(nextProps.compliments),
		})
	}

	getRandomCompliment(compliments) {
		if (compliments.length === 0) {
			return null
		}

		const index = Math.floor(Math.random() * compliments.length)
		return compliments[index]
	}

	pickCompliment() {
		this.setState({
			compliment: this.getRandomCompliment(this.props.compliments)
		})
	}

	render() {
		const { navigator, compliments } = this.props
		const { compliment } = this.state

		return (
			<View style={Styles.container} {...this._panResponder.panHandlers}>
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

HomeScene.defaultProps = {
	compliments: [],
}

export default HomeScene
