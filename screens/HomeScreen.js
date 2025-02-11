import React from 'react';
//import HomeComponent from '../components/HomeComponent';
import HomeComponent from '../components/HomeComponent';
import { Text, View, StyleSheet } from 'react-native';

const homeEntities = ['ISSUE', 'RETURN'];
function HomeScreen(props) {
	//console.log(homeEntities);
	return (
		<View style={styles.cardContainer}>
			<Text style={styles.titleStyle}>HOME</Text>
			<HomeComponent homeEntities={homeEntities} />
		</View>
	);
}
const styles = StyleSheet.create({
	cardContainer: {
		marginTop: 50,
		flexGrow: 1,
	},
	titleStyle: {
		fontSize: 30,
		color: 'white',
		fontWeight: '500',
		textAlign: 'center',
	},
	cardStyle: {},
});

export default HomeScreen;
