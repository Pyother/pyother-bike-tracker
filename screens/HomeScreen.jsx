// * React and Redux:
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from '@rneui/themed';
import { Icon } from '@rneui/themed';

// * Styles and UI:
import stylesUtils from '../assets/styles/Utils';
import stylesLayout from '../assets/styles/Layout';
import StyledButton from '../components/styledComponents/StyledButton';

const HomeScreen = () => {
    return (
        <View style={stylesLayout.screenContainer}>
            <View style={[stylesLayout.stackHorizontal, stylesUtils.spaceBetween]}> 
                <StyledButton />
                <StyledButton />
            </View> 
        </View>
    )
}

export default HomeScreen;