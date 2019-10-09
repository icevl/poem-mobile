import React from 'react';
import { View, Text } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './NavBar.style';
import { setNavigation } from '../../../../actions/navigation';
import Touch from '../../common/Touch';

interface Props {
    navigation: NavigationScreenProp<any, any>;
    title?: string;
    setNavigation: (navigation: NavigationScreenProp<any, any>) => void;
    rightButton?: React.ReactNode;
    back?: boolean;
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

    goBack() {
        this.props.navigation.goBack();
    }

    render() {
        const { rightButton, back } = this.props;
        return (
            <View>
                <View style={styles.container}>
                    {back && (
                        <View style={styles.leftIconWrapper}>
                            <Touch onPress={this.goBack.bind(this)}>
                                <Icon name='arrow-back' size={24} style={styles.leftIcon} />
                            </Touch>
                        </View>
                    )}

                    <View style={styles.titleWrapper}>
                        <Text style={styles.title}>
                            {this.props.title
                                ? this.props.title.charAt(0).toUpperCase() + this.props.title.slice(1)
                                : ''}
                        </Text>
                    </View>

                    <View style={styles.rightIconWrapper}>
                        {!rightButton ? (
                            <Icon name='menu' size={24} style={styles.menuIcon} onPress={this.onShowMenu.bind(this)} />
                        ) : (
                            rightButton
                        )}
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
