'use strict';

var React = require('react-native');

var {
	Text,
	View,
	ScrollView,
	StyleSheet,
	TouchableHighlight,
	Image,
	AppStateIOS
} = React;

class PackageButton extends React.Component {


	render() {
		return (
			<View onPress={() => this._handlePress.bind(this, 'HELLO PROP Change')} style={styles.biggreenbox}>
			</View>

		);
	}
};

var styles = StyleSheet.create({
	biggreenbox: {
		padding: 30,
		backgroundColor: '#39b25a',
		height: 250,
		width: 250,
		borderRadius: 5,
		borderColor: 'black',
		borderWidth: 3,
	},
	
});

module.exports = PackageButton;