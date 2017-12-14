// Import libraries for making a Component
import React, { Component } from 'react';
import { Header, Left, Body, Right, Button, Icon, Title, Subtitle } from 'native-base';
import { Core, BrandPalette as c } from '../../styles';

// Make a component
class MenuHeader extends Component {
    renderLeftButton() {
        const { leftIcon, color } = this.props;
        return (
            <Left>
              <Button transparent>
                <Icon name={leftIcon} style={{ color }} />
              </Button>
            </Left>
        );
    }

    renderBodyButton() {
        const { title, subtitle, color } = this.props;
        const renderSubtitle = subtitle !== '' ? <Subtitle>{subtitle}</Subtitle> : null;
        return (
            <Body>
              <Title style={[Core.headerText, { color }]}>{title}</Title>
              { renderSubtitle }
            </Body>
        );
    }

    renderRightButton() {
        const { rightIcon, color } = this.props;
        return (
            <Right>
              <Button transparent>
                <Icon name={rightIcon} style={{ color }} />
              </Button>
            </Right>
        );
    }

    render() {
        return (
            <Header>
                { this.renderLeftButton() }
                { this.renderBodyButton() }
                { this.renderRightButton() }
            </Header>
        );
    }
}

MenuHeader.defaultProps = {
    title: '',
    subtitle: '',
    leftIcon: 'arrow-back',
    rightIcon: 'menu',
    color: c.primary,
};

// Make the component available to other parts of the app
export default MenuHeader;
