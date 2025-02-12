import { View, Text, Pressable, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function IssueComponent({ issueItem }) {
	const handleIssuePress = (e) => {
		alert('Wait');
		axios
			.post(
				'http://qaapi.marginpoint.com/NexiantApi.svc/processJson',
				{
					nXML: {
						Envelope: {
							'@SourceDomain': 'http://www.nexiant.com',
							'@Timestamp': 'Sunday, September 22, 2019',
							'@Version': '8.5.3.7',
						},
						Body: {
							Cmd: {
								'@Type': 'Inventory',
								'@Command': 'Issue',
								'@CompanyMnemonic': 'upd43qavkb1',
								'@LocMnemonic': 'Truck1',
							},
							Invs: {
								Inv: {
									'@ItemID': 'upd43_b1',
									'@CompanyMnemonic': 'upd43qavkb1',
									'@LocMnemonic': 'Truck1',
									'@Qty': '2',
									'@IssueTo': 'upd43qavkb1user1',
									// "@TransDateTime": "[DateTime when this transaction was performed]",
									'@UserName': 'upd43qavkb1user1',
									'@Note': 'From AMH API',
									Refs: {
										Ref: {
											'@Name': '43b1Ref1',
											'@Value': 'Volume1',
										},
										Ref: {
											'@Name': '43b1Ref2',
											'@Value': 'weight1',
										},
									},
								},
							},
						},
					},
				},
				{
					headers: {
						ProvisionCode: 'a526ba71-4c49-4c96-b342-4836e01a0215',
						'Content-type': 'application/json',
					},
				}
			)
			.then((response) => console.log(response.data))
			.catch(function (error) {
				console.log(error);
			});
	};

	return (
		<View>
			<Pressable onPress={() => handleIssuePress(issueItem.name)}>
				<View style={styles.cardStyle}>
					<Text style={styles.textStyle}>{issueItem.name}</Text>
					<Text style={styles.textStyle}>{issueItem.qoh}</Text>
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

		alignContent: 'space-around',
		width: 750,
		height: 50,
		shadowColor: '#171717',
		shadowOffset: { width: 10, height: 20 },
		shadowOpacity: 0.4,
		shadowRadius: 2,
		flexDirection: 'row',
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
export default IssueComponent;
