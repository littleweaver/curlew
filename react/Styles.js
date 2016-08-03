import {
	StyleSheet
} from 'react-native'

const Styles = StyleSheet.create({
	default: {
		height: 26,
		borderWidth: 0.5,
		borderColor: '#0f0f0f',
		flex: 1,
		fontSize: 13,
		padding: 4,
	},
	bold: {
		fontWeight: 'bold',
	},
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	listItem: {
		padding: 10,
		borderBottomWidth: 1,
		borderBottomColor: '#000000',
	},
	textInput: {
		backgroundColor: 'rgba(0,0,0,.15)',
		height: 40,
		borderColor: '#000',
		borderWidth: 1
	}
})

export default Styles
