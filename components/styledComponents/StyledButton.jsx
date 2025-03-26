// * React: 
import React from 'react';
import { View, TouchableOpacity } from 'react-native';

// * Styles and UI:
import { Button, Icon } from '@rneui/themed';
import { LinearGradient } from 'expo-linear-gradient';
import { constants } from '../../constants/Constants';
import stylesUtils from '../../assets/styles/Utils';

const StyledButton = ({ name, icon, onClick, enabled }) => {
    return (
        <View style={{ flex: 1 }}>
            <Button 
                style={[stylesUtils.button]}
                radius={"lg"}
                title={name}
                color={constants.backgroundTertiary}
                onPress={onClick}
            >
                { icon ? <Icon name={icon} color={constants.accentSecondary} /> : null }
            </Button>
        </View>
    )
}

export default StyledButton;