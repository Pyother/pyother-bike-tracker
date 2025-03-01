// * React:
import React from 'react';
import { View } from 'react-native';

// * Styles and UI:
import { Button, Icon } from '@rneui/themed';
import stylesUtils from '../assets/styles/Utils';

const IconButton = ({ onClick, enabled, iconName }) => {
    return (
        <Button 
            onPress={onClick}   
            style={stylesUtils.iconButton}
            disabled={!enabled}
            radius={"lg"}
            color="#fff"
        >
            <Icon name={iconName} color={enabled ? 'black' : 'lightgray'} />
        </Button>
    )
}

export default IconButton;
