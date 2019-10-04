import React, { useEffect } from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import { NavigationScreenProp } from 'react-navigation';
import styles from './BottomBar.style';
import BottomBarButton from './BottomBarButton';

interface Props {
    navigation: NavigationScreenProp<any, any>;
    user?: any;
}

const BottomBar = (props: Props) => {
    const user = useSelector((state: any) => state.user);

    useEffect(() => {
        console.log('user', user);
    }, [user]);

    const setScreen = (screen: string) => {
        props.navigation.navigate(screen);
    };

    return (
        <View style={styles.container}>
            <BottomBarButton icon='calendar' onPress={() => setScreen('Feed')} isActive />
            <BottomBarButton icon='search' />
            <BottomBarButton icon='plus' />
            <BottomBarButton icon='envelope' />
            <BottomBarButton icon='user' onPress={() => setScreen('Menu')} />
        </View>
    );
};
export default BottomBar;
