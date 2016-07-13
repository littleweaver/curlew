import React, { Component } from 'react'
import {
	View,
	Dimensions,
	Text,
	TouchableOpacity,
	PanResponder,
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

			onStartShouldSetPanResponderCapture: (evt, gestureState) => {
				return Math.abs(gestureState.dx) > 5
			},

			onPanResponderMove: (evt, gestureState) => {
				if (this.state.swipeLeftHandled) {
					return
				}

				const { width } = Dimensions.get('window')
				const swipeThresholdPercentage = 0.1
				const isSwiping = Math.abs(gestureState.dx / width) >= swipeThresholdPercentage
				const isSwipingLeft = isSwiping && gestureState.dx < 0

				if (isSwipingLeft) {
					this.setState({
						swipeLeftHandled: true,
					})

					this.pickCompliment()
				}
			},

			onPanResponderRelease: () => {
				this.setState({
					swipeLeftHandled: false,
				})
			},
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
			compliment: this.getRandomCompliment(this.props.compliments),
		})
	}

	render() {
		const { navigator, compliments } = this.props
		const { compliment } = this.state

		return (
			<View
				{...this._panResponder.panHandlers} style={Styles.container}
			>
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
