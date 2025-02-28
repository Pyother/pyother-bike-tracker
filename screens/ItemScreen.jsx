// * React and Redux:
import React from 'react';
import { View, Text } from 'react-native';

// * Styles:

const ItemScreen = ({ route }) => {
    return (
        <View>
            <Text>
                {route.name}
            </Text>
        </View>
    )
}

export default ItemScreen;