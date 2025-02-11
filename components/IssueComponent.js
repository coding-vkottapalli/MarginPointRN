import { View, Text, Pressable } from 'react-native';
import React from 'react';

export default function IssueComponent({ issueItems }) {
	console.log(issueItems);
	return (
		<View>
			<Pressable>
				<View>
					<Text>{issueItems}</Text>
				</View>
			</Pressable>
		</View>
	);
}
