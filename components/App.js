import React, { Component } from 'react'
import {
	Text,
	View
} from 'react-native'

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
		const { compliments } = this.state

		return (
			<View>
				{compliments.map(compliment =>
					<Text key={compliment.id}>
						{compliment.id} {compliment.body}
					</Text>
				)}
			</View>
		)
	}
}

export default App
