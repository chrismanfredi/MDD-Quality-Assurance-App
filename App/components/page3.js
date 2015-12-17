'use strict';

var React = require('react-native'),
	Page2 = require('./page2'),
	Page3 = require('./page3'),
	Package = require('./packageComponents/package'),
	CoffeePackage = require('./packageComponents/package');


var {
	Text,
	View,
	ScrollView,
	Giant,
	StyleSheet,
	TouchableHighlight,
	Image,
	AppStateIOS,
} = React;

class Main extends React.Component {

	render() {
		return (
			<ScrollView>
				<View style={styles.container}>

					<View style={styles.innercontainer}>

						<View style={styles.buttoncontainer}>

			
							<TouchableHighlight onPress={() => this.Page2()}>
			
								<View style={styles.badboxbtn}>
									<Text style={styles.btnpic}> <Image source={require('../img/badbox.png')} /> </Text>
								</View>
			
							</TouchableHighlight>

							<View style={styles.packageheadertext}>
								<Text style={styles.packagetext}> Package With 3 Items </Text>
							</View>

							<TouchableHighlight onPress={() => this.Page2()}>			

								<View style={styles.cancelbtn}>
									<Text style={styles.cancelbtnpic}> <Image source={require('../img/cancel.png')} /> </Text>
								</View>			
			
							</TouchableHighlight>	

						</View>
					    




					    <Package title={'Coffee Maker'} description={'this is a description'} />


					<TouchableHighlight style={styles.passbtn} onPress={() => this.boxes()}>
						
						<View style={styles.passbuttonsection}>
							<Text style={styles.passbutton}> Pass </Text>
						</View>
			
					</TouchableHighlight>

				</View>
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

module.exports = Main;