// Import a library to help create a Component
import React from 'react';
import { AppRegistry, Text } from 'react-native';
import { Container, Content, Footer } from 'native-base';
import EStyleSheet from 'react-native-extended-stylesheet';
import MenuHeader from './src/components/core/MenuHeader';

EStyleSheet.build();

// Create a Component
const App = () => (
    <Container>
        <MenuHeader title="Welcome" />
        <Content><Text>Hi</Text></Content>
        <Footer></Footer>
    </Container>
);

// Render it to the device
AppRegistry.registerComponent('BasicApp', () => App);
