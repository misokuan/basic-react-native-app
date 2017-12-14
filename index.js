// Import a library to help create a Component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import MenuHeader from './src/components/core/MenuHeader';

EStyleSheet.build();

// Create a Component
const App = () => (
    <View>
        <MenuHeader title="Welcome" />
    </View>
);

// Render it to the device
AppRegistry.registerComponent('BasicApp', () => App);
