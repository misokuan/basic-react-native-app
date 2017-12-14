// Import libraries for making a Component
import React from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import { Core, BrandPalette as c } from '../../styles';

// Make a component
const MenuHeader = ({ title }) => (
    <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title style={[Core.headerText, { color: c.warning }]}>{title}</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Right>
        </Header>
    </Container>
);

// Make the component available to other parts of the app
export default MenuHeader;
