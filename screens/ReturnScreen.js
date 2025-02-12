import { View, Text, FlatList, StyleSheet } from 'react-native';
import React from 'react';
import ReturnComponent from '../components/ReturnComponent';
import { LinearGradient } from 'expo-linear-gradient';

const vItems = ['Item1001', 'Item1002'];
function ReturnScreen() {
	return (
		<LinearGradient colors={['#4e0329', '#ddb52f']} style={styles.container}>
			<FlatList
				data={vItems}
				keyExtractor={(itemData) => itemData}
				renderItem={(itemData) => (
					<ReturnComponent issueItems={itemData.item} />
				)}
			></FlatList>
		</LinearGradient>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

export default ReturnScreen;
