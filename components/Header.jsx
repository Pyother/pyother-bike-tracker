import React, { useState } from 'react';
import { setScreen } from '../features/navigationFeatures/ScreenSlice';
import { View, Text, StyleSheet, Modal, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// * Styles and UI:
import StyledIconButton from './styledComponents/StyledIconButton';
import StyledModal from './styledComponents/StyledModal';
import stylesUtils from '../assets/styles/Utils';
import stylesLayout from '../assets/styles/Layout';
import { constants } from '../constants/Constants';
import { Button } from '@rneui/themed';

const Header = ({ title, backPressEnabled }) => {

    const navigation = useNavigation();
    const [isMenuVisible, setMenuVisible] = useState(false);

    const menuItems = [
        { 
            name: 'Home',
            action: () => {
                navigation.navigate('Home');
            }
        },
        {
            name: 'History',
            action: () => {
                navigation.navigate('History');
            }
        }
    ]

    return (
        <View style={styles.header}>
            <StyledIconButton 
                onClick={() => navigation.navigate('Home')}  
                enabled={backPressEnabled}
                iconName="arrow-back"
            />
            <Text style={styles.title}>{title}</Text>
            <StyledIconButton 
                onClick={() => setMenuVisible(true)}  
                enabled
                iconName="menu"
            />
            <StyledModal
                title="Menu"
                open={isMenuVisible}
                onClose={() => setMenuVisible(false)}
                children={
                    <View style={[stylesLayout.stackVertical]}>
                        {menuItems.map((item) => (
                            <Button
                                key={item.name}
                                onPress={item.action}
                                color={constants.backgroundSecondary}
                            >
                                <Text style={[stylesUtils.textSecondary]}>{item.name}</Text>
                            </Button>
                        ))}
                    </View>
                }
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
        flex: 1,
    },
    closeButton: {
        backgroundColor: constants.accentSecondary,
    },
});

export default Header;