// * React and React Native:
import React from 'react';
import { StyleSheet,  Text, View } from 'react-native';

// * Styles:
import stylesUtils from '../../assets/styles/Utils';
import stylesLayout from '../../assets/styles/Layout';

export default function HomeScreen() {
  return (
    <>
      <View style={[stylesUtils.center, stylesUtils.padding1em]}>
        <Text style={stylesUtils.title}>
          Pyother Bike Tracker
        </Text>
      </View>
    </>
  );
}

