import React from 'react';
import { View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { NavigationScreenProp } from 'react-navigation';
import styles from './BottomBar.style';
import BottomBarButton from './BottomBarButton';
import { getList } from '../../../../actions/feed';

interface Props {
    navigation: NavigationScreenProp<any, any>;
    user?: any;
}

const BottomBar = (props: Props) => {
    const feedFilters = useSelector((state: any) => state.feed.filters);
    const dispatch = useDispatch();

    const currentScreen = props.navigation.state.routeName;

    const setScreen = (screen: string) => {
        props.navigation.navigate(screen);
    };

    const openFeed = () => {
        if (Object.keys(feedFilters).length > 0) {
            dispatch(getList(1));
        }

        props.navigation.navigate('Feed');
    };

    return (
        <View style={styles.container}>
            <BottomBarButton icon='calendar' onPress={() => openFeed()} isActive={currentScreen === 'Feed'} />
            <BottomBarButton icon='search' />
            <BottomBarButton
                icon='plus'
                onPress={() => setScreen('PoemForm')}
                isActive={currentScreen === 'PoemForm'}
            />
            <BottomBarButton icon='envelope' />
            <BottomBarButton icon='user' />
        </View>
    );
};
export default BottomBar;
