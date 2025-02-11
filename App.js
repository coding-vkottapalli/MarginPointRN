import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { Button } from 'react-native-paper';
import { Text } from 'react-native-paper';
import HomeScreen from './screens/HomeScreen';
import { LinearGradient } from 'expo-linear-gradient';
import IssueScreen from './screens/IssueScreen';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
	return (
		<PaperProvider>
			<NavigationContainer>
				<LinearGradient
					colors={['#4e0329', '#ddb52f']}
					style={styles.container}
				>
					<ImageBackground
						source={require('./assets/2025-02-11 15_32_08-750+ Tools Pictures _ Download Free Images on Unsplash.png')}
						resizeMode='cover'
						imageStyle={styles.imageStyle}
						style={styles.container}
					>
						<HomeScreen />
						<IssueScreen />
					</ImageBackground>
				</LinearGradient>
			</NavigationContainer>
		</PaperProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	imageStyle: {
		flex: 1,
		borderColor: 'green',
		borderWidth: 2,
		opacity: 0.35,
	},
});
