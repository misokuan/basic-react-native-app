// Import a library to help create a Component
import React from 'react';
import { AppRegistry } from 'react-native';
import { Container, Content } from 'native-base';
import EStyleSheet from 'react-native-extended-stylesheet';
import MainHeader from './src/components/core/MainHeader';
import MainFooter from './src/components/core/MainFooter';
import Listing from './src/components/example-feature/Listing';

EStyleSheet.build();

// Create a Component
const App = () => (
    <Container>
        <MainHeader
            title="Welcome"
            subtitle="to Basic App"
        />
        <Content>
            <Listing />
        </Content>
        <MainFooter />
    </Container>
);

// Render it to the device
AppRegistry.registerComponent('BasicApp', () => App);
