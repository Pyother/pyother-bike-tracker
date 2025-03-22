// * React:
import React from 'react';
import { View, Text } from 'react-native';

// * Styles and UI:
import stylesUtils from '../../assets/styles/Utils';
import stylesLayout from '../../assets/styles/Layout';

const StyledNumberDisplay = ({ title, value }) => {
    return (
        <View styles={[stylesLayout.stackVertical]}>
            <Text style={[stylesUtils.title, stylesUtils.accentSecondary]}>
                {Math.floor(value * 100000) / 100000}
            </Text>
            <Text style={[stylesUtils.subtitle]}>{title}</Text>
        </View>
    )
}

export default StyledNumberDisplay;