import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import styles from './Menu.style';
import { NavigationScreenProp } from 'react-navigation';
import NavBar from '../../components/menu/navbar/NavBar';
import MenuBlock from './MenuBlock';
import MenuLink from './MenuLink';

interface Props {
    navigation: NavigationScreenProp<any, any>;
}

class Menu extends React.Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <NavBar leftButton='home' navigation={this.props.navigation} />

                <MenuBlock>
                    <MenuLink title='Weapons' screen='Home' icon='flare' />
                    <MenuLink title='News' screen='Home' icon='new-releases' />
                    <MenuLink title='Clans' screen='Home' icon='group' />
                    <MenuLink title='TOP' screen='Home' icon='announcement' />
                </MenuBlock>

                <MenuBlock>
                    <Text>123</Text>
                </MenuBlock>

                <MenuBlock>
                    <Text>123</Text>
                </MenuBlock>

                <ImageBackground
                    style={[styles.fixed, styles.container, { zIndex: -1, opacity: 0.3 }]}
                    source={require('../../../assets/images/weapons.jpg')}
                />
            </View>
        );
    }
}

export default Menu;
