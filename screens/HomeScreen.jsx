// * React and Redux:
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';

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
    const [timer, setTimer] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            const currentAltitude = await getData('currentAltitude');
            const currentLatitude = await getData('currentLatitude');
            const currentLongitude = await getData('currentLongitude');
            if (currentAltitude && currentLatitude && currentLongitude) {
                setLocation({
                    altitude: JSON.parse(currentAltitude),
                    latitude: JSON.parse(currentLatitude),
                    longitude: JSON.parse(currentLongitude),
                });
            }
            setTimer(prevTimer => prevTimer + 1);
        };

        const interval = setTimeout(() => {
            fetchData();
        }, 1000);

        return () => clearTimeout(interval);
    }, [timer]);

    return (
        <View style={[stylesLayout.screenContainer, stylesLayout.stackVertical]}>
            <View style={[stylesLayout.stackHorizontal, stylesUtils.spaceBetween]}> 
                <StyledButton name="Start" icon="start" />
                <StyledButton icon="stop"/>
            </View> 
            <StyledContainer 
                title="Location"
                children={<Text>
                    {location ? `Altitude: ${location.altitude}, Latitude: ${location.latitude}, Longitude: ${location.longitude}, Timer: ${timer}` : 'No data'}
                </Text>}
            />
            {Platform.OS === 'web' ? (
                <StyledContainer 
                    title="Map"
                    children={<Text>Map is not available on web</Text>}
                />
            ) : (
                <StyledContainer children={<Map />}/>
            )}
            <StyledContainer title="History" subtitle="List of your recent activities."/>
        </View>
    )
}

export default HomeScreen;