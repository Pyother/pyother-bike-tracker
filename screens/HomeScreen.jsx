// * React and Redux:
import React from 'react';
import { View, Text } from 'react-native';
import { Button } from '@rneui/themed';
import { Icon } from '@rneui/themed';

// * Styles:
import stylesUtils from '../assets/styles/Utils';
import stylesLayout from '../assets/styles/Layout';

const HomeScreen = () => {
    return (
        <View style={stylesLayout.screenContainer}>
            <Text>Home Screen</Text>
        </View>
    )
}

export default HomeScreen;