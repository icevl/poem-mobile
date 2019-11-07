import React from 'react';
import { ScrollView, RefreshControl } from 'react-native';
import { connect } from 'react-redux';
import { NavigationScreenProp, withNavigationFocus } from 'react-navigation';
import NavBar from '../../components/menu/navbar/NavBar';
import BottomBar from '../../components/menu/bottombar/BottomBar';
import Content from '../../components/content/Content';
import styles from './UserScreen.style';

interface Props {
    actions: any;
    isLoading: boolean;
    isRefreshLoading: boolean;
    navigation: NavigationScreenProp<any, any>;

    isFocused?: boolean;
}

class UserScreen extends React.Component<Props> {
    componentDidMount() {}

    componentDidUpdate(prevProps) {
        if (!prevProps.isFocused && this.props.isFocused) {
            //@ts-ignore
            this.props.refreshFeed({ showLoader: true });
        }
    }

    onRefresh() {
        // TODO: future use
    }

    render() {
        const { navigation } = this.props;

        const user = navigation.getParam('user');

        return (
            <Content>
                <NavBar title={user.name} navigation={navigation} rightButton={true} back />

                <ScrollView
                    scrollEventThrottle={16}
                    ref={ref => (this.scrollRef = ref)}
                    style={styles.scrollView}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.props.isRefreshLoading}
                            onRefresh={this.onRefresh.bind(this)}
                        />
                    }></ScrollView>

                <BottomBar navigation={navigation} />
            </Content>
        );
    }
}

export default connect(
    null,
    {}
    //@ts-ignore
)(withNavigationFocus(UserScreen));
