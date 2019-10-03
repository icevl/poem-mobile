import React from 'react';
import { View, Text } from 'react-native';
import { AsyncStorage } from 'react-native';
import styles from './Menu.style';
import { NavigationScreenProp } from 'react-navigation';
import NavBar from '../../components/menu/navbar/NavBar';
import MenuBlock from './MenuBlock';
import MenuLink from './MenuLink';

interface Props {
    navigation: NavigationScreenProp<any, any>;
}

class Menu extends React.Component<Props> {
    async logOut() {
        await AsyncStorage.removeItem('token');
        this.props.navigation.navigate('Auth');
    }

    render() {
        return (
            <View style={styles.container}>
                <NavBar navigation={this.props.navigation} />

                <MenuBlock>
                    <MenuLink title='Weapons' screen='Feed' icon='flare' />
                    <MenuLink title='News' screen='Feed' icon='new-releases' />
                    <MenuLink title='Clans' screen='Feed' icon='group' />
                    <MenuLink title='Logout' onPress={this.logOut.bind(this)} icon='announcement' />
                </MenuBlock>

                <MenuBlock>
                    <Text>123</Text>
                </MenuBlock>

                <MenuBlock>
                    <Text>123</Text>
                </MenuBlock>
            </View>
        );
    }
}

export default Menu;
