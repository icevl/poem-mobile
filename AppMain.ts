import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import FeedScreen from './apps/screens/feed/FeedScreen';
import MenuScreen from './apps/screens/menu/Menu';
import AuthScreen from './apps/screens/auth/AuthScreen';

const AppNavigator = createStackNavigator(
    {
        Auth: AuthScreen,
        Feed: FeedScreen,
        Menu: MenuScreen
    },
    {
        headerMode: 'none',
        navigationOptions: {
            header: null,
            headerVisible: false
        }
    }
);

export default createAppContainer(AppNavigator);
