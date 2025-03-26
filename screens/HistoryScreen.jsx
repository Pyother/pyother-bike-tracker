// * React and Redux:
import React from 'react';
import { useSelector } from 'react-redux';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// * Styles:
import stylesUtils from '../assets/styles/Utils';
import stylesLayout from '../assets/styles/Layout';

// * Components:
import HistoryItem from '../components/styledComponents/StyledHistoryItem';

const HistoryScreen = () => {

    const activities = useSelector(state => state.activityData.activitiesArray);
    const navigation = useNavigation();

    return (
        <View style={[stylesLayout.stackVertical, stylesUtils.padding15]}>
            {
                activities.map((item) => (
                    <HistoryItem
                        key={item.date}
                        date={item.date}
                        distance={item.distance}
                        onPress={() => navigation.navigate('Route_' + item.id)}
                    />
                ))
            }
        </View>
    )
}

export default HistoryScreen;
