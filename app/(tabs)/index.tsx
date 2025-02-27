// * React and React Native:
import React from 'react';
import { StyleSheet,  Text, View } from 'react-native';

// * Redux:
import { Provider } from 'react-redux';
import store from '../../store/store';

// * Styles:
import stylesUtils from '../../assets/styles/Utils';
import stylesLayout from '../../assets/styles/Layout';

export default function HomeScreen() {
  return (
    <Provider store={store}>
      <View style={[stylesUtils.center, stylesUtils.padding1em, stylesLayout.container]}>
        <Text style={stylesUtils.title}>
          Pyother Bike Tracker
        </Text>
      </View>
    </Provider>
  );
}

