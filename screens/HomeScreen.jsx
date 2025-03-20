// * React and Redux:
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// * Styles and UI:
import stylesUtils from '../assets/styles/Utils';
import stylesLayout from '../assets/styles/Layout';
import StyledButton from '../components/styledComponents/StyledButton';
import StyledContainer from '../components/styledComponents/StyledContainer';

// * Services:
import Map from '../services/map/Map';

// * Storage:
import getData from '../services/asyncStorage/getData';

const HomeScreen = () => {

    const [location, setLocation] = useState(null);

    useEffect(() => {
        const interval = setInterval(async () => {
        const storedLocation = await getData('locations');
        if (storedLocation) {
            try {
            // Jeśli zapisujesz obiekt jako JSON, przekształć go z powrotem
            setLocation(JSON.parse(storedLocation));
            } catch (e) {
            // Jeśli to nie JSON, ustaw wartość bez parsowania
            setLocation(storedLocation);
            }
        }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <View style={[stylesLayout.screenContainer, stylesLayout.stackVertical]}>
            <View style={[stylesLayout.stackHorizontal, stylesUtils.spaceBetween]}> 
                <StyledButton name="Start" icon="start" />
                <StyledButton icon="stop"/>
            </View> 
            <StyledContainer 
                title="Location"
                children={<Text>
                    {location ? JSON.stringify(location, null, 2) : 'Brak danych'}
                </Text>}
            />
            <StyledContainer children={<Map />}/>
            <StyledContainer title="History" subtitle="List of your recent activities."/>
        </View>
    )
}

export default HomeScreen;