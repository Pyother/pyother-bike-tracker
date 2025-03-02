// * React: 
import React from 'react';
import { View } from 'react-native';

// * Styles and UI:
import { Button } from '@rneui/themed';
import { LinearGradient } from 'expo-linear-gradient';
import { constants } from '../../constants/Constants';
import stylesUtils from '../../assets/styles/Utils';

const StyledButton = ({ onClick, enabled }) => {
    return (
        <View style={{ flex: 1 }}>
            <Button 
                style={[stylesUtils.button]}
                radius={"lg"}
                title={'Start'}
                ViewComponent={LinearGradient} 
                linearGradientProps={{
                    colors: [constants.accentPrimary, constants.accentSecondary],
                    start: { x: 0, y: 1 },
                    end: { x: 1, y: 0 },
                }}
            />
        </View>
    )
}

export default StyledButton;