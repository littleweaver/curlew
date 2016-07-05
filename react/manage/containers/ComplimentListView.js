import React, { Component } from 'react'
import { ListView } from 'react-native'

import ComplimentListItem from '../components/ComplimentListItem'


export default class ComplimentListView extends Component {
	constructor(props) {
		super(props)

		let ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2
		})
		this.state = {
			dataSource: ds.cloneWithRows(props.compliments)
		}
	}

	componentWillReceiveProps(nextProps) {
		this.setState({
			dataSource: this.state.dataSource.cloneWithRows(nextProps.compliments)
		})
	}

	render() {
		return (
			<ListView
				dataSource={this.state.dataSource}
				renderRow={ComplimentListItem}
			/>
		)
	}
}
