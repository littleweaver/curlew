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
			swipeRightHandled: false,
			currentCompliment: 0,
			compliments: [this.getRandomCompliment(props.compliments)],
		}
	}

	componentWillMount() {
		this._panResponder = PanResponder.create({
			onStartShouldSetPanResponder: () => true,

			onStartShouldSetPanResponderCapture: (evt, gestureState) => {
				return Math.abs(gestureState.dx) > 5
			},

			onPanResponderMove: (evt, gestureState) => {
				if (this.state.swipeLeftHandled || this.state.swipeRightHandled) {
					return
				}

				const { width } = Dimensions.get('window')
				const swipeThresholdPercentage = 0.1
				const isSwiping = Math.abs(gestureState.dx / width) >= swipeThresholdPercentage
				const isSwipingLeft = isSwiping && gestureState.dx < 0
				const isSwipingRight = isSwiping && gestureState.dx > 0

				if (isSwipingLeft) {
					this.setState({
						swipeLeftHandled: true,
					})
					if (this.state.currentCompliment === 0) {
						this.pickCompliment()
					} else {
						this.forwardOneCompliment()
					}
				}

				if (isSwipingRight) {
					this.setState({
						swipeRightHandled: true,
					})

					this.backOneCompliment()
				}
			},

			onPanResponderRelease: () => {
				this.setState({
					swipeLeftHandled: false,
					swipeRightHandled: false,
				})
			},
		})
	}

	componentWillReceiveProps(nextProps) {
		if (this.state.compliments[0]) {
			return
		}

		this.setState({
			compliments: [this.getRandomCompliment(nextProps.compliments)],
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
		const newCompliment = this.getRandomCompliment(this.props.compliments)
		this.setState({
			compliments: [newCompliment, ...this.state.compliments],
		})
	}

	backOneCompliment() {
		this.setState({
			currentCompliment: Math.min(this.state.currentCompliment + 1,
										this.state.compliments.length - 1),
		})
	}

	forwardOneCompliment() {
		this.setState({
			currentCompliment: Math.max(this.state.currentCompliment - 1, 0),
		})
	}

	render() {
		const { navigator, compliments } = this.props
		const complimentHistory = this.state.compliments
		const { currentCompliment } = this.state
		const compliment = complimentHistory[currentCompliment]

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
