'use strict';

var React = require('react-native');

var {
	Text,
	StyleSheet,
	View,
} = React;

class PackageConditions extends React.Component {
	render() {
		return (
			<Text style={styles.condition}> {this.props.option} </Text>

		)
	}
};

var styles = StyleSheet.create({
	condition: {
		fontSize: 22,
		color: 'orange',
	},
});

module.exports = PackageConditions;