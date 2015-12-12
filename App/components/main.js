'use strict';

var React = require('react-native'),
	Page2 = require('./page2')



var {
	Text,
	View,
	StyleSheet,
	TouchableHighlight,
	Image,
	Button
} = React;

class Main extends React.Component {
	Page2() { 
		this.props.navigator.push({
		title: 'Page 2',
		component: Page2,
		passProps: {name: 'Chris Manfredi',
					school: 'Full Sail University'}

	});
	};
	render() {
		return (
			<View style={styles.container}>
			<View style={styles.bgWrapper}>
			</View>	
				<Text style={styles.welcome}> Scan To Login </Text>
			<TouchableHighlight onPress={() => this.Page2()}>
			<View style={styles.login}>
				<Image source={{uri:'http://ih1.redbubble.net/image.10254373.9221/sticker,375x360.png'}} style={styles.loginbtn} />	
			</View>
			</TouchableHighlight>

			</View>
		);
	}	
};

var styles = StyleSheet.create({
	container : {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#046380'
	},
	logo: {
		flex: 1,
		width: 200
	},
	bgWrapper:{
		backgroundColor: 'blue',
		position: 'relative',
		alignItems: 'center',
	},
	login: {
		flex: 1,
		width: 200
	},
	loginbtn:{
		position: 'relative',
		height: 100,
		alignItems: 'center',
		margin: 50
	},
	welcome: {
		textAlign: 'center',
		margin: 10,
		fontSize: 20
	}

});

module.exports = Main;