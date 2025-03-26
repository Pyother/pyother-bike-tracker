// * React:
import React from 'react';
import { View, TouchableOpacity } from 'react-native';

// * Styles and UI:
import { Button, Icon } from '@rneui/themed';
import { constants } from '../../constants/Constants';
import stylesUtils from '../../assets/styles/Utils';

const StyledIconButton = ({ onClick, enabled, iconName }) => {
    return (
        <TouchableOpacity onPress={onClick}>
            <Button 
                onPress={onClick}   
                style={stylesUtils.iconButton}
                disabled={!enabled}
                radius={"lg"}
                color="#fff"
            >
                <Icon name={iconName} color={enabled ? 'black' : 'lightgray'} />
            </Button>
        </TouchableOpacity>
    )
}

export default StyledIconButton;
