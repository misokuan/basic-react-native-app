// Import libraries for making a Component
import React from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import { Core, BrandPalette as c } from '../../styles';

// Make a component
const MenuHeader = ({ title }) => (
    <Header>
      <Left>
        <Button transparent>
          <Icon name='arrow-back' style={{ color: c.primary }} />
        </Button>
      </Left>
      <Body>
        <Title style={Core.headerText}>{title}</Title>
      </Body>
      <Right>
        <Button transparent>
          <Icon name='menu' style={{ color: c.primary }} />
        </Button>
      </Right>
    </Header>
);

// Make the component available to other parts of the app
export default MenuHeader;
