import React from 'react';
import { View, Text } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './NavBar.style';
import { setNavigation } from '../../../../actions/navigation';

interface Props {
    navigation: NavigationScreenProp<any, any>;
    title?: string;
    setNavigation: (navigation: NavigationScreenProp<any, any>) => void;
}

class TopNavBar extends React.Component<Props> {
    componentDidMount() {
        this.props.setNavigation(this.props.navigation);
    }

    onShowMenu() {
        this.props.navigation.navigate('Menu');
    }

    onNavigate(screen: string) {
        this.props.navigation.navigate(screen);
    }

    render() {
        return (
            <View>
                <View style={styles.container}>
                    <View style={styles.titleWrapper}>
                        <Text style={styles.title}>
                            {this.props.title
                                ? this.props.title.charAt(0).toUpperCase() + this.props.title.slice(1)
                                : ''}
                        </Text>
                    </View>

                    <View style={styles.rightIconWrapper}>
                        <Icon name='menu' size={24} style={styles.menuIcon} onPress={this.onShowMenu.bind(this)} />
                    </View>
                </View>
            </View>
        );
    }
}

export default connect(
    null,
    { setNavigation }
)(TopNavBar);
