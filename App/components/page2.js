'use strict';

var React = require('react-native'),
	LoginPage = require('./main'),
	Page2 = require('./page2'),
	Page3 = require('./page3');


var {
	Text,
	View,
	StyleSheet,
	TouchableHighlight,
	Image
} = React;

class Main extends React.Component {
	Page3() { 
		this.props.navigator.push({
		title: 'Page 3',
		component: Page3,
		passProps: {name: 'Chris Manfredi',
					school: 'Full Sail University'}

		});
	};


	Logout(){
		this.props.navigator.pop();
	}
	LoginPage() { 
		this.props.navigator.push({
		title: 'Main Page',
		component: Main,
		passProps: {name: 'Chris Manfredi',
					school: 'Full Sail University'}

	});
	};
	render() {
		return (
			<View style={styles.container}>

				<View style={styles.innercontainer}>

					<View style={styles.buttoncontainer}>
						
					<View style={styles.badlabelbtn}>
						<Text style={styles.btnpic}> <Image source={require('../img/badlabel.png')} /> </Text>
					</View>
			
					<TouchableHighlight onPress={() => this.Logout()}>			

					<View style={styles.logoutbtn}>
						<Text style={styles.logouttext}> Logout </Text>
					</View>			
			
					</TouchableHighlight>	

					</View>	

					<TouchableHighlight onPress={() => this.Page3()}>		
					<View style={styles.package}>
						<Text style={styles.logouttext}> <Image source={{uri:'https://en.opensuse.org/images/3/39/Icon-package.png'}} /> </Text>
					</View>
					</TouchableHighlight>

				<Text style={styles.scanpackage}> Scan a Package </Text>
			</View>
			</View>
		);
	}	
};

var styles = StyleSheet.create({
	container : {
		flex: 1, 
		backgroundColor: 'lightgrey',
	},
	innercontainer : {
		marginTop: 100,
	},	
	buttoncontainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	badlabelbtn: {
		padding: 15,
		backgroundColor: '#e8302f',
		height: 135,
		width: 140,
		marginLeft: 60,
		borderRadius: 5,
	},
	btnpic: {

	},
	logoutbtn: {
		height: 135,
		width: 140,
		marginRight: 60,
		borderRadius: 5,
	},
	logouttext: {
		fontSize: 30,
		marginTop: 40,
	},
	scanpackage: {
		textAlign: 'center',
		margin: 10,
		fontSize: 30,
	},
	package: {
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 120,
	},
	packageimg:{
		height: 280,
		width: 300,
		marginTop: 200,
	},
});

module.exports = Main;