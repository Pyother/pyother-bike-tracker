// * React:
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// * Styles and UI:
import { Button } from '@rneui/themed';
import { Icon } from '@rneui/themed';
import stylesUtils from '../assets/styles/Utils';

const Header = ({ title, backPressEnabled }) => {

    const navigation = useNavigation();

    return (
        <View style={styles.header}>
            <Button 
                color="inherit"
                onPress={ backPressEnabled ? () => navigation.navigate('Home') : null }   
                style={stylesUtils.iconButton}
            >
                <Icon 
                    name='arrow-back'
                    color={ backPressEnabled ? '#000000' : 'transparent' }
                />
            </Button>
            <Text style={styles.title}>{title}</Text>
            <Button 
                color="inherit"
                onPress={() => {}}  
                style={stylesUtils.iconButton}
            >
                <Icon name="menu"/>
            </Button>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 15
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        flex: 1
    }
});

export default Header;
