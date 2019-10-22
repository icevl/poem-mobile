import React from 'react';
import { View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { connect } from 'react-redux';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { AsyncStorage } from 'react-native';
import { auth } from './actions/user';
import { setStatusbarColor } from './actions/application';
import { getFeedFromLocal } from './actions/feed';
import styles from './AppMain.style';
import { getTheme } from './themes/index';
import { setLocale } from './locale/index';
import OverlayMenu from './apps/components/common/OverlayMenu';
import FeedScreen from './apps/screens/feed/FeedScreen';
import MenuScreen from './apps/screens/menu/Menu';
import AuthScreen from './apps/screens/auth/AuthScreen';
import PoemFormScreen from './apps/screens/poem/form/PoemFormScreen';
import PoemCommentsScreen from './apps/screens/poem/PoemCommentsScreen';
import UserScreen from './apps/screens/user/UserScreen';
import DailyScreen from './apps/screens/poem/DailyScreen';

interface Props {
    auth: () => void;
    getFeedFromLocal?: () => void;
    setStatusbarColor?: (color: string) => void;
    isShow?: boolean;
}

interface State {
    isReady: boolean;
    initialRouteName: string;
}

class App extends React.Component<Props, State> {
    constructor(props) {
        super(props);
        this.state = {
            isReady: false,
            initialRouteName: ''
        };
    }

    async componentDidMount() {
        const token = await AsyncStorage.getItem('token');
        const storedTheme = await AsyncStorage.getItem('theme');
        const storedLocale = await AsyncStorage.getItem('locale');

        let initialRouteName = 'Auth';

        if (token) {
            initialRouteName = 'Feed';
            this.props.getFeedFromLocal();
            this.props.auth();
        }

        if (storedLocale) {
            setLocale(storedLocale);
        }

        const theme = storedTheme ? storedTheme : 'dark';
        const themeData = getTheme(theme);
        EStyleSheet.build(themeData);

        this.props.setStatusbarColor(themeData['$navbarBackground']);

        this.setState({ isReady: true, initialRouteName });
    }

    async componentDidUpdate(prevProps) {
        if (!prevProps.isShow && this.props.isShow) {
            const storedTheme = await AsyncStorage.getItem('theme');

            if (!storedTheme) {
                return false;
            }

            const themeData = getTheme(storedTheme);
            this.props.setStatusbarColor(themeData['$navbarBackground']);
        }
    }

    render() {
        if (!this.state.isReady || !this.props.isShow) {
            return <View style={styles.container}></View>;
        }

        const AppNavigator = createStackNavigator(
            {
                Auth: AuthScreen,
                Feed: FeedScreen,
                Menu: MenuScreen,
                PoemForm: PoemFormScreen,
                Daily: DailyScreen,
                PoemComments: PoemCommentsScreen,
                User: UserScreen
            },
            {
                initialRouteName: this.state.initialRouteName,
                headerMode: 'none',
                navigationOptions: {
                    header: null,
                    headerVisible: false
                },
                transitionConfig: () => ({
                    transitionSpec: {
                        duration: 0 // Set the animation duration time as 0 !!
                    }
                })
            }
        );
        const NavApp = createAppContainer(AppNavigator);
        return (
            <View style={styles.mainContainer}>
                <OverlayMenu />
                <NavApp />
            </View>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        isShow: state.application.isShow
    };
};

export default connect(
    mapStateToProps,
    { auth, getFeedFromLocal, setStatusbarColor }
)(App);
