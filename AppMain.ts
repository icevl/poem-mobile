import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import FeedScreen from './apps/screens/feed/FeedScreen';
import MenuScreen from './apps/screens/menu/Menu';
import AuthScreen from './apps/screens/auth/AuthScreen';
import PoemFormScreen from './apps/screens/poem/form/PoemFormScreen';

const AppNavigator = createStackNavigator(
    {
        Auth: AuthScreen,
        Feed: FeedScreen,
        Menu: MenuScreen,
        PoemForm: PoemFormScreen
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
