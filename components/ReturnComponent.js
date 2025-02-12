import { View, Text, Pressable, StyleSheet } from 'react-native';
import React from 'react';

function ReturnComponent({ issueItems }) {
	//console.log(issueItems);
	return (
		<View>
			<Pressable>
				<View style={styles.cardStyle}>
					<Text style={styles.textStyle}>{issueItems}</Text>
				</View>
			</Pressable>
		</View>
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
		width: 750,
		height: 50,
		shadowColor: '#171717',
		shadowOffset: { width: 10, height: 20 },
		shadowOpacity: 0.4,
		shadowRadius: 2,
	},
	pressStyle: {
		color: 'red',
	},
	textStyle: {
		paddingHorizontal: 15,
		fontSize: 20,
		fontWeight: '600',
		color: 'black',
	},
});
export default ReturnComponent;
