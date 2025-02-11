import React from 'react';
//import HomeComponent from '../components/HomeComponent';
import HomeComponent from '../components/HomeComponent';
import { Text, View, StyleSheet, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const homeEntities = ['ISSUE', 'RETURN'];

function HomeScreen(props) {
	//console.log(props.navigation);
	function handlePress() {
		//console.log('on press');
		props.navigation.navigate('Issue');
	}

	return (
		<LinearGradient colors={['#4e0329', '#ddb52f']} style={styles.container}>
			<ImageBackground
				source={require('../assets/2025-02-11 15_32_08-750+ Tools Pictures _ Download Free Images on Unsplash.png')}
				resizeMode='cover'
				imageStyle={styles.imageStyle}
				style={styles.container}
			>
				<View style={styles.cardContainer}>
					{/* <Text style={styles.titleStyle}>HOME</Text> */}
					<HomeComponent
						homeEntities={homeEntities}
						handlePress={handlePress}
					/>
				</View>
			</ImageBackground>
		</LinearGradient>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	imageStyle: {
		flex: 1,
		borderColor: 'green',
		borderWidth: 4,
		opacity: 0.35,
	},
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
