// * React and Redux:
import React from 'react';
import { View, Text } from 'react-native';

// * Styles and UI:
import stylesUtils from '../assets/styles/Utils';
import stylesLayout from '../assets/styles/Layout';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ItemScreen = ({ route }) => {

    const { date, distance, locations } = route.params;

    return (
        <View style={stylesLayout.screenContainer}>
            <View style={[stylesLayout.stackHorizontal]}>
                <Ionicons name="calendar-outline" size={24} />
                <Text style={stylesUtils.title}>{date}</Text>
            </View>
            <View style={[stylesLayout.stackVertical]}>
                {
                    locations.map((location, index) => (
                        <View key={index} style={[stylesLayout.stackHorizontal]}>
                            <Text style={stylesUtils.subtitle}>{location.latitude}</Text>
                            <Text style={stylesUtils.subtitle}>{location.longitude}</Text>
                        </View>
                    ))
                }
            </View>
        </View>
    )
}

export default ItemScreen;