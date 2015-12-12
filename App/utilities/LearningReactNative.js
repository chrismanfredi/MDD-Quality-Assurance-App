'use strict';

var React = require('react-native');
var Main = require('../components/main.js');

var {
	Text,
	View,
	NavigatorIOS,
	StyleSheet
} = React;

class learningreactnative extends React.Component {
	render() {
		return (
			<NavigatorIOS
			style= {styles.container}
			initialRoute={{
			title: 'Station 7',
			component: Main
			}}/>

		);
	}
};

var styles = StyleSheet.create({
	container : {
		flex: 1,
		backgroundColor: '#1f2532'
	},
	welcome: {
		textAlign: 'center',
		margin: 10,
		fontSize: 20
	}
});
module.exports = learningreactnative;