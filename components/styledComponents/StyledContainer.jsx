// * React:
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// * Styles and UI:
import stylesLayout from '../../assets/styles/Layout';
import stylesUtils from '../../assets/styles/Utils';
import { constants } from '../../constants/Constants';

const StyledContainer = ({ title, subtitle, icon, children, flex }) => {
    return (
        <View 
            style={[stylesUtils.container, flex && stylesUtils.flex]}
        >
            <View>
                { title ? 
                <View style={[stylesLayout.stackHorizontal, stylesUtils.padding15Bottom]}>
                    { icon ? icon : null }
                    <Text style={[stylesUtils.title]}>{title}</Text>
                </View> : null }
            </View>
            { subtitle ? <Text style={[stylesUtils.subtitle]}>{subtitle}</Text> : null }
            { children }
        </View>
    )
}

export default StyledContainer;