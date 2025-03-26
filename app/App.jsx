// * React and Redux:
import React from 'react';
import { useSelector } from 'react-redux';
import { View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

// * Redux:
import { Provider } from 'react-redux';
import store from '../store/store';

// * Screens:
import HomeScreen from '../screens/HomeScreen';
import ItemScreen from '../screens/ItemScreen';
import HistoryScreen from '../screens/HistoryScreen';

// * Components:
import Header from '../components/Header';

const Stack = createNativeStackNavigator();

const App = () => {

    const currentScreen = useSelector(state => state.screen.screen);

    return (
        <View>
            <Stack.Navigator initialRouteName={currentScreen}>
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
                <Stack.Screen
                    name="History"
                    component={HistoryScreen}
                    options={{ header: () => <Header title="History" backPressEnabled/> }}
                />
            </Stack.Navigator>
        </View>
    )
}

export default App;