// * React and React Native:
import React from 'react';
import { StyleSheet,  Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

// * Redux:
import { Provider } from 'react-redux';
import store from '../store/store';

// * Screens:
import HomeScreen from '../screens/HomeScreen';
import ItemScreen from '../screens/ItemScreen';

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <Provider store={store}>
            <Stack.Navigator initialRouteName="Item">
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ title: 'Home' }}
                />
                <Stack.Screen
                    name="Item"
                    component={ItemScreen}
                    options={{ title: 'Item' }}
                />
            </Stack.Navigator>
        </Provider>
  );
}

export default App;