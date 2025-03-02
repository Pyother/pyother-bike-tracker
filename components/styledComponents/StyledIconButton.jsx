// * React:
import React from 'react';
import { View } from 'react-native';

// * Styles and UI:
import { Button, Icon } from '@rneui/themed';
import { constants } from '../../constants/Constants';
import stylesUtils from '../../assets/styles/Utils';

const StyledIconButton = ({ onClick, enabled, iconName }) => {
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

export default StyledIconButton;
