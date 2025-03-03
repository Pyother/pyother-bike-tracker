// * React:
import React from 'react';
import { View, Text } from 'react-native';

// * Styles and UI:
import stylesLayout from '../../assets/styles/Layout';
import stylesUtils from '../../assets/styles/Utils';
import { constants } from '../../constants/Constants';

const StyledContainer = ({ title, subtitle, children }) => {
    return (
        <View style={[stylesUtils.container]}>
            { title ? <Text style={[stylesUtils.title]}>{title}</Text> : null }
            { subtitle ? <Text style={[stylesUtils.subtitle]}>{subtitle}</Text> : null }
            { children }
        </View>
    )
}

export default StyledContainer;