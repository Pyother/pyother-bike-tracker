// * React:
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// * Styles and UI:
import StyledIconButton from './styledComponents/StyledIconButton';
import stylesUtils from '../assets/styles/Utils';
import { constants } from '../constants/Constants';

const Header = ({ title, backPressEnabled }) => {

    const navigation = useNavigation();

    return (
        <View style={styles.header}>
            <StyledIconButton 
                onClick={() => navigation.navigate('Home')}  
                enabled={backPressEnabled}
                iconName="arrow-back"
            />
            <Text style={styles.title}>{title}</Text>
            <StyledIconButton 
                onClick={() => {}}  
                enabled
                iconName="menu"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 15,
        backgroundColor: constants.backgroundTertiary,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        flex: 1
    }
});

export default Header;
