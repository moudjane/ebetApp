import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LiveScreen from './src/pages/Live';
import SettingsScreen from './src/pages/Settings';
import UpcommingScreen from './src/pages/Upcomming';

const tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name == 'Live') {
              iconName = 'pulse-outline'
            } else if (route.name == 'Parametres') {
              iconName = 'hammer-outline'
            } else if (route.name == 'Upcomming') {
              iconName = 'time-outline'
            }
            return <Ionicons name={iconName} size={25} color={'#3791F3'} />
          }
        })}>
        <tab.Screen name='Live' component={LiveScreen} />
        <tab.Screen name='Upcomming' component={UpcommingScreen} />
        <tab.Screen name='Parametres' component={SettingsScreen} />
      </tab.Navigator>
    </NavigationContainer >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
