'use strict';

var React = require('react-native'),
	PackageInfo = require('./packageInfo'),
	CoffeeInfo = require('./packageInfo'),
	PackageImg = require('./packageImg'),
	PackageButton = require('./packageButton'),
	PackageConditions = require('./packageConditions');


var {
	Text,
	View,
	ScrollView,
	StyleSheet,
	TouchableHighlight,
	Image,
	AppStateIOS
} = React;







class Package extends React.Component {
		render() {

			var testFunc = function(){
				alert('testing')	
			}

		 	return(
				<View style={styles.packagecontent}>			
					<PackageButton />
					<PackageImg />
					<PackageInfo title={this.props.title} descriptions = {this.props.description} />
					<PackageConditions option = {this.props.option} />

				</View>	
			)
			testFunc
		}
	}

var styles = StyleSheet.create({
	packagecontent: {
		marginTop: 50,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},	

});

module.exports = Package