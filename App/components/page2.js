//ES6 best practice
'use strict';

var React = require('react-native');

var {
	Text,
	View,
	StyleSheet,
	TouchableHighlight,
	Image
} = React;

class Main extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.package}>
					<Text style={styles.badlabel}> Bad Label</Text>
				<Image source={{uri:'https://en.opensuse.org/images/3/39/Icon-package.png'}} style={styles.packageimg} />	
				</View>
				<Text style={styles.scanpackage}> Scan a Package </Text>
			</View>
		);
	}	
};

var styles = StyleSheet.create({
	container : {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'white'
	},
	badlabel: {
		textAlign: 'left',
	},
	scanpackage: {
		textAlign: 'center',
		margin: 10,
		fontSize: 20,
		paddingBottom: 15,
	},
	package: {
		flex: 1,
		width: 200,
		paddingTop: 70
	},
	packageimg:{
		position: 'relative',
		height: 100,
		alignItems: 'center',
		margin: 50
	},
});

module.exports = Main;