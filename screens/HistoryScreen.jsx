// * React and Redux:
import React from 'react';
import { View, Text } from 'react-native';

// * Styles:
import stylesUtils from '../assets/styles/Utils';
import stylesLayout from '../assets/styles/Layout';

// * Components:
import HistoryItem from '../components/styledComponents/StyledHistoryItem';

const HistoryScreen = () => {

    const temp = [
        {
            date: '2021-08-01',
            distance: 10
        },
        {
            date: '2021-08-02',
            distance: 20
        },
        {
            date: '2021-08-03',
            distance: 30
        }
    ]

    return (
        <View style={[stylesLayout.stackVertical, stylesUtils.padding15]}>
            {
                temp.map((item) => (
                    <HistoryItem
                        key={item.name}
                        date={item.date}
                        distance={item.distance}
                    />
                ))
            }
        </View>
    )
}

export default HistoryScreen;
