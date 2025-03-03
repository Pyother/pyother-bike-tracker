// * React and Redux:
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// * Styles and UI:
import stylesUtils from '../assets/styles/Utils';
import stylesLayout from '../assets/styles/Layout';
import StyledButton from '../components/styledComponents/StyledButton';
import StyledContainer from '../components/styledComponents/StyledContainer';

// * Services:
import Map from '../services/map/Map';

const HomeScreen = () => {
    return (
        <View style={[stylesLayout.screenContainer, stylesLayout.stackVertical]}>
            <View style={[stylesLayout.stackHorizontal, stylesUtils.spaceBetween]}> 
                <StyledButton name="Start" icon="start" />
                <StyledButton icon="stop"/>
            </View> 
            <StyledContainer children={<Map />}/>
            <StyledContainer title="History" subtitle="List of your recent activities."/>
        </View>
    )
}

export default HomeScreen;