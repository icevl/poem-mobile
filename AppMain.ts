import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import FeedScreen from './apps/screens/feed/FeedScreen';
import MenuScreen from './apps/screens/menu/Menu';

const AppNavigator = createStackNavigator(
    {
        Home: FeedScreen,
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
