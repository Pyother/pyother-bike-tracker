// * React and React Native:
import React, { useEffect } from 'react';
import { StyleSheet,  Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

// * Redux:
import { Provider } from 'react-redux';
import store from '../store/store';

// * Tasks:
import '../tasks/LocationTask'; 
import { startBackgroundLocation } from '../tasks/LocationTask';

// * Screens:
import HomeScreen from '../screens/HomeScreen';
import ItemScreen from '../screens/ItemScreen';

// * Components:
import Header from '../components/Header';

const Stack = createNativeStackNavigator();

const App = () => {

    useEffect(() => {
        startBackgroundLocation();
    }, []);

    return (
        <Provider store={store}>
            <Stack.Navigator initialRouteName="Item">
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ header: () => <Header title="Home" /> }}
                />
                <Stack.Screen
                    name="Item"
                    component={ItemScreen}
                    options={{ header: () => <Header title="Item" backPressEnabled/> }}
                />
            </Stack.Navigator>
        </Provider>
  );
}

export default App;