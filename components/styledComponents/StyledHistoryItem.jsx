// * React:
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

// * Styles and UI:
import stylesUtils from '../../assets/styles/Utils';
import stylesLayout from '../../assets/styles/Layout';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HistoryItem = ({ date, distance }) => {
    return (
        <TouchableOpacity>
            <View style={[stylesUtils.container]}>
                <View style={[stylesLayout.stackHorizontal, stylesUtils.padding15Bottom]}>
                    <Ionicons name="calendar-outline" size={24} />
                    <Text style={stylesUtils.title}>{date}</Text>
                </View>
                <View style={[stylesLayout.stackHorizontal, stylesUtils.spaceBetween]}>
                    <View style={[stylesLayout.stackHorizontal]}>
                        <Ionicons name="location-outline" size={17.5} />
                        <Text style={stylesUtils.textSecondary}>{distance} km</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default HistoryItem;