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

class PackageInfo extends React.Component {
  	
	render() {
		return (
			<ScrollView>
				<View style={styles.packageinfo}>
					<Text>{this.props.title}</Text>
					<Text>{this.props.descriptions}</Text>
				</View>
			</ScrollView>


		);
	}

};


var styles = StyleSheet.create({
	container : {
		flex: 1, 
		backgroundColor: 'lightgrey',
	},
	button:{
		backgroundColor : 'pink',
	},
	innercontainer : {
		marginTop: 100,
		paddingLeft: 50,
		paddingRight: 50,
	},	
	buttoncontainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	badboxbtn: {
		padding: 15,
		backgroundColor: '#e8302f',
		height: 135,
		width: 140,
		marginLeft: 60,
		borderRadius: 5,
	},
	packagetext: {
		width: 300,
		fontSize: 30,
		marginTop: 25,
	},
	cancelbtn: {
		padding: 15,
		backgroundColor: '#e8302f',
		height: 135,
		width: 140,
		marginRight: 60,
		borderRadius: 5,
	},
	cancelbtnpic: {

	},
	packagecontent: {
		marginTop: 50,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	biggreenbox: {
		padding: 30,
		backgroundColor: '#39b25a',
		height: 250,
		width: 250,
		borderRadius: 5,
		borderColor: 'black',
		borderWidth: 3,
	},
	toothbrushpicsection: {
		height: 10,
	},
	toothbrushpic: {
	},
	toothbrushinfo: {
	},
	toothbrushinfoheader: {
		fontSize: 30,
	},
	toothbrushinfotext: {
		fontSize: 15,
	},
	passbutton: {
		flexDirection: 'row',
		justifyContent: 'center',
		padding: 30,
		marginTop: 10,
		backgroundColor: '#39b25a',
		height: 100,
		width: 400,
		borderRadius: 10,
		borderColor: 'black',
		borderWidth: 3,
		fontSize: 30,
		textAlign: 'center',
	},
	passbtn: {
		alignItems: 'center',
		marginTop: 70,
	},
	damageoption: {
		padding: 30,
		flex: 1,
		marginTop: 50,
		backgroundColor: 'pink',
		height: 500,
		width: 500,
	},
});

module.exports = PackageInfo;