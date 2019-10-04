import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { NavigationScreenProp } from 'react-navigation';
import styles from './BottomBar.style';
import BottomBarButton from './BottomBarButton';

interface Props {
    navigation: NavigationScreenProp<any, any>;
    user?: any;
}

class BottomBar extends React.Component<Props> {
    setScreen(screen: string) {
        this.props.navigation.navigate(screen);
    }

    render() {
        return (
            <View style={styles.container}>
                <BottomBarButton icon='calendar' onPress={this.setScreen.bind(this, 'Feed')} isActive />
                <BottomBarButton icon='search' />
                <BottomBarButton icon='plus' />
                <BottomBarButton icon='envelope' />
                <BottomBarButton icon='user' onPress={this.setScreen.bind(this, 'Menu')} />
            </View>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        user: state.user
    };
};

export default connect(mapStateToProps)(BottomBar);
