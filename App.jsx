import { StatusBar } from 'expo-status-bar';
import "react-native-gesture-handler";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import home from './home';
import mcq from './mcq';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "home" component = {home} />
        <Stack.Screen name = "Questions" component = {mcq} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

