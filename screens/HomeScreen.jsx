// * React and Redux:
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { addActivity, updateDistance, stopActivity } from '../features/dataFeatures/ActivityDataSlice';

// * Styles and UI:
import stylesUtils from '../assets/styles/Utils';
import stylesLayout from '../assets/styles/Layout';
import StyledButton from '../components/styledComponents/StyledButton';
import StyledContainer from '../components/styledComponents/StyledContainer';
import StyledNumberDisplay from '../components/styledComponents/StyledNumberDisplay';
import Ionicons from 'react-native-vector-icons/Ionicons';

// * Services:
import Map from '../services/map/Map';

// * Storage:
import getData from '../services/asyncStorage/getData';

const HomeScreen = () => {

    const dispatch = useDispatch();
    const [location, setLocation] = useState(null);
    const [timer, setTimer] = useState(0);
    const activitiesData = useSelector(state => state.activityData.activitiesArray);

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

    const startActivity = () => {

        const date = new Date().toISOString().split('T')[0];
        const id = activitiesData.length + 1;

        dispatch(addActivity({ 
            date, 
            id,
            active: true,
            distance: 0,
            locations: []
        }));

        setTimeout(async () => {
            const currentLatitude = await getData('currentLatitude');
            const currentLongitude = await getData('currentLongitude');
            dispatch(updateDistance({
                id,
                distanceToAdd: 1,
                newLocations: {
                    latitude: JSON.parse(currentLatitude),
                    longitude: JSON.parse(currentLongitude)
                }
            }));
        }, 10000);
    }

    return (
        <View style={[stylesLayout.screenContainer, stylesLayout.stackVertical]}>
            <View style={[stylesLayout.stackHorizontal, stylesUtils.spaceBetween]}> 
                <StyledButton name="Start" icon="play-arrow" onClick={() => startActivity()} />
                <StyledButton icon="stop"/>
            </View> 
            <StyledContainer 
                title="Location"
                children={
                    <View style={[stylesLayout.stackHorizontal, stylesUtils.spaceBetween]}>
                        {
                            location ? Object.keys(location).map((key) => {
                                return (
                                    <StyledNumberDisplay 
                                        key={key}
                                        title={key}
                                        value={location[key]}
                                    />
                                )
                            }) : null
                        }
                    </View>
                }
                icon={
                    <Ionicons name="compass-outline" size={25}/>
                }
            />
            <StyledContainer 
                title="Statistics" 
                subtitle="(Coming soon)"
                icon={
                    <Ionicons name="pie-chart-outline" size={25}/>
                }
            />
            {Platform.OS === 'web' ? (
                <StyledContainer 
                    title="Map"
                    children={<Text>Map is not available on web</Text>}
                    flex
                />
            ) : (
                <StyledContainer 
                    children={<Map />} 
                    flex
                />
            )}
        </View>
    )
}

export default HomeScreen;