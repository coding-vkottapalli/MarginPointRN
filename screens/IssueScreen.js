import { View, Text, FlatList } from 'react-native';
import React from 'react';
import IssueComponent from '../components/IssueComponent';

const vItems = ['Item1001', 'Item1002'];
export default function IssueScreen() {
	return (
		<FlatList
			data={vItems}
			keyExtractor={(itemData) => itemData}
			renderItem={(itemData) => <IssueComponent issueItems={itemData.item} />}
		></FlatList>
	);
}
