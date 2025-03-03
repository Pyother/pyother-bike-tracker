import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

const Map = () => {
    return (
        <MapView style={styles.map} />
    );
};

const styles = StyleSheet.create({
    map: {
        width: '100%',
        height: '100%'
    }
});

export default Map;
