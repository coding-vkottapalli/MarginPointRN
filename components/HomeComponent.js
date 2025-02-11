import React from 'react';
import {
	Text,
	View,
	FlatList,
	StyleSheet,
	StatusBar,
	Pressable,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { Avatar, Card, IconButton } from 'react-native-paper';

function HomeComponent({ homeEntities }) {
	//console.log(homeEntities);

	function handlePress() {
		console.log('on press');
	}
	return (
		<FlatList
			data={homeEntities}
			renderItem={({ item }) => (
				<Pressable onPress={handlePress}>
					<View style={styles.cardStyle}>
						<Text style={styles.textStyle}>{item}</Text>
					</View>
				</Pressable>
			)}
			keyExtractor={(item) => item}
		/>
	);
}

const styles = StyleSheet.create({
	cardContainer: {},
	cardStyle: {
		marginTop: 50,
		backgroundColor: '#ffa500',
		borderRadius: 28,
		borderColor: 'orange',
		borderWidth: 2,
		alignSelf: 'center',
		justifyContent: 'center',
		alignContent: 'center',
		width: 550,
		height: 200,
		shadowColor: '#171717',
		shadowOffset: { width: 0, height: 3 },
		shadowOpacity: 0.4,
		shadowRadius: 2,
	},
	pressStyle: {
		color: 'red',
	},
	textStyle: {
		textAlign: 'center',
		fontSize: 50,
		fontWeight: '500',
	},
});

export default HomeComponent;
