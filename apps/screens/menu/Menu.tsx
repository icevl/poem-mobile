import React from 'react';
import { connect } from 'react-redux';
import { ScrollView } from 'react-native';
import { AsyncStorage } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';
import NavBar from '../../components/menu/navbar/NavBar';
import MenuBlock from './MenuBlock';
import MenuLink from './MenuLink';
import { setTheme } from '../../../themes/index';
import getLocaleString, { setLocale } from '../../../locale/index';
import { refreshApplication } from '../../../actions/application';
import BottomBar from '../../components/menu/bottombar/BottomBar';
import Content from '../../components/content/Content';
import MenuUserSwitch from './MenuUserSwitch';

interface Props {
    navigation: NavigationScreenProp<any, any>;
    refreshApplication?: () => void;
}

class Menu extends React.Component<Props> {
    async logOut() {
        await AsyncStorage.removeItem('token');
        this.props.navigation.navigate('Auth');
    }

    async onSetTheme(theme: string) {
        await setTheme(theme);
        this.props.refreshApplication();
    }

    async onSetLanguage(language: string) {
        await setLocale(language);
        this.props.refreshApplication();
    }

    render() {
        return (
            <Content>
                <NavBar navigation={this.props.navigation} />
                <ScrollView>
                    <MenuBlock>
                        <MenuLink title={getLocaleString('feed')} screen='Feed' icon='group' />
                        <MenuLink
                            title={getLocaleString('logout')}
                            onPress={this.logOut.bind(this)}
                            icon='announcement'
                        />
                    </MenuBlock>

                    <MenuBlock>
                        <MenuLink title='Ice theme' onPress={this.onSetTheme.bind(this, 'ice')} icon='announcement' />
                        <MenuLink title='Dark theme' onPress={this.onSetTheme.bind(this, 'dark')} icon='announcement' />
                        <MenuLink
                            title='BW theme'
                            onPress={this.onSetTheme.bind(this, 'Black and white')}
                            icon='announcement'
                        />
                    </MenuBlock>

                    <MenuBlock>
                        <MenuLink title='Русский' onPress={this.onSetLanguage.bind(this, 'ru')} icon='announcement' />
                        <MenuLink title='English' onPress={this.onSetLanguage.bind(this, 'en')} icon='announcement' />
                        <MenuLink title='中文' onPress={this.onSetLanguage.bind(this, 'cn')} icon='announcement' />
                    </MenuBlock>

                    <MenuUserSwitch />
                </ScrollView>
                <BottomBar navigation={this.props.navigation} />
            </Content>
        );
    }
}

export default connect(
    null,
    { refreshApplication }
)(Menu);
