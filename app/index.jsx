// * React and React Native:
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { View } from 'react-native';
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
import HistoryScreen from '../screens/HistoryScreen';

// * Components:
import Header from '../components/Header';

const Stack = createNativeStackNavigator();

// * Main App Component:
// App and Main are separated to allow the use of hooks (they must be called under the Provider).
const App = () => {
    return (
        <Provider store={store}>
            <Main />
        </Provider>
    );
}

const Main = () => {
    
    const currentScreen = useSelector(state => state.screen.screen);

    useEffect(() => {
        startBackgroundLocation();
    }, []);

    return (
        <Stack.Navigator initialRouteName="History">
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
    );
}

export default App;
