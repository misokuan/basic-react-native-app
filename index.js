// Import a library to help create a Component
import React from 'react';
import { AppRegistry } from 'react-native';
import { Container, Content, Footer } from 'native-base';
import EStyleSheet from 'react-native-extended-stylesheet';
import MenuHeader from './src/components/core/MenuHeader';
import Listing from './src/components/example-feature/Listing';

EStyleSheet.build();

// Create a Component
const App = () => (
    <Container>
        <MenuHeader
            title="Welcome"
            subtitle="to Basic App"
        />
        <Content><Listing /></Content>
        <Footer />
    </Container>
);

// Render it to the device
AppRegistry.registerComponent('BasicApp', () => App);
