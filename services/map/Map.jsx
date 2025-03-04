// * React:
import React, { useState, useEffect } from 'react';

// * Styles and UI:
import { View, StyleSheet, Alert } from 'react-native';

// * Map features:
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

const Map = () => {

    const [location, setLocation] = useState({
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    });

    useEffect(() => {
        const getPermissions = async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                Alert.alert('Permission to access location was denied');
                return;
            }
            let currentLocation = await Location.getCurrentPositionAsync({});
            setLocation({
                latitude: currentLocation.coords.latitude,
                longitude: currentLocation.coords.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            });
        };
        getPermissions();
    }, []);

    return (
        <MapView 
            region={location}
            style={styles.map} 
        >
            <Marker coordinate={{latitude: location.latitude, longitude: location.longitude}} />
        </MapView>
    );
};

const styles = StyleSheet.create({
    map: {
        width: '100%',
        height: '100%'
    }
});

export default Map;
