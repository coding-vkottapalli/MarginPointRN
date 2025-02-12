import { View, Text, FlatList, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import IssueComponent from '../components/IssueComponent';
import { LinearGradient } from 'expo-linear-gradient';
import axios from 'axios';

const vItems = ['Item1001', 'Item1002'];

function IssueScreen() {
	const [itemRenderData, setItemRenderData] = useState([]);

	useEffect(() => {
		console.log('in axios');
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
								'@Hierarchical': 'true',
								'@Type': 'Inventory',
								'@Command': 'Get',
								'@CompanyMnemonic': 'upd43qavkb1',
								'@LocMnemonic': 'Truck1',
								'@Start': '1',
								'@Limit': '5',
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
			.then((response) =>
				handleData(response.data.ResponseMessage.Body.Items.Item)
			)
			.catch(function (error) {
				console.log(error);
			});
	}, []);

	const handleData = (e) => {
		e.map((item) => {
			setItemRenderData((prevState) => [
				...prevState,
				{ name: item['@Id'], qoh: item['@QOH'] },
			]);
		});
	};
	const renderData = (itemData1) => {
		return <IssueComponent issueItem={itemData1} />;
	};
	return (
		<LinearGradient colors={['#4e0329', '#ddb52f']} style={styles.container}>
			<FlatList
				data={itemRenderData}
				keyExtractor={(itemData) => Math.random()}
				renderItem={(itemData) => renderData(itemData.item)}
			></FlatList>
		</LinearGradient>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
export default IssueScreen;
