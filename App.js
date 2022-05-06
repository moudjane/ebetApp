import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LiveScreen from './src/pages/Live';
import SettingsScreen from './src/pages/Settings';
import UpcommingScreen from './src/pages/Upcomming';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

const tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <tab.Navigator
        initialRouteName="Live"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name == 'Live') {
              iconName = 'pulse-outline'
            } else if (route.name == 'Settings') {
              iconName = 'settings-outline'
            } else if (route.name == 'Upcomming matches') {
              iconName = 'time-outline'
            }
            return <Ionicons name={iconName} size={28} color={'#3791F3'} />
          }
        })}>
        <tab.Screen name='Live' component={LiveScreen} />
        <tab.Screen name='Upcomming matches' component={UpcommingScreen} />
        <tab.Screen name='Settings' component={SettingsScreen} />
      </tab.Navigator>
    </NavigationContainer >
  );
}

const styles = StyleSheet.create({
  containerLive: {
    backgroundColor: "#7CA1B4",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  square: {
    backgroundColor: "#7cb48f",
    width: 100,
    height: 50,
    margin: 8,
    alignItems: "center",
    justifyContent: "center",
  },
});
