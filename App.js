import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { Button } from 'react-native-paper';
import { Text } from 'react-native-paper';
import HomeScreen from './screens/HomeScreen';
import { LinearGradient } from 'expo-linear-gradient';
import IssueScreen from './screens/IssueScreen';
import ReturnScreen from './screens/ReturnScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
	const Stack = createNativeStackNavigator();
	return (
		<PaperProvider>
			<NavigationContainer>
				<Stack.Navigator initialRouteName='Home'>
					<Stack.Screen name='Home' component={HomeScreen} />
					<Stack.Screen name='Issue' component={IssueScreen} />
					<Stack.Screen name='Return' component={ReturnScreen} />
				</Stack.Navigator>
			</NavigationContainer>
		</PaperProvider>
	);
}

const styles = StyleSheet.create({});
