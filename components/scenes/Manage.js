import React, { Component } from 'react'
import {
	View,
	Text,
	TouchableOpacity,
	ListView,
} from 'react-native'

import * as Routes from '../Routes'
import Styles from '../Styles'

class Manage extends Component {
	renderCompliment(compliment) {
		return <Text key={compliment.body}>{compliment.body}</Text>
	}

	dataSourceFromCompliments(compliments) {
		const ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2
		})

		return ds.cloneWithRows(compliments)
	}

	render() {
		const { navigator, compliments } = this.props

		return (
			<View style={Styles.container}>
				<TouchableOpacity onPress={navigator.pop}>
					<Text>Back</Text>
				</TouchableOpacity>

				<ListView
					dataSource={this.state.complimentsDataSource}
					renderRow={this.renderCompliment}
				/>
			</View>
		)
	}
}

Manage.defaultProps = {
	compliments: [],
}

export default Manage
