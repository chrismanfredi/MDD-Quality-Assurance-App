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

class PackageImg extends React.Component {


	render() {
		return (
				<View style={styles.toothbrushpicsection}>
					<Text style={styles.toothbrushpic}> <Image source={require('../../img/toothbrush.png')} /> </Text>
				</View>
		);
	}
};

var styles = StyleSheet.create({

	toothbrushpicsection: {
		height: 10,
	},
	toothbrushpic: {
	},
	toothbrushinfo: {
	},
});

module.exports = PackageImg;