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
    display?: boolean;
}

interface State {
    isDisplay: boolean;
}

class TopNavBar extends React.Component<Props, State> {
    constructor(props) {
        super(props);
        this.state = {
            isDisplay: true
        };
    }
    componentDidMount() {
        if ('display' in this.props) {
            this.setState({ isDisplay: this.props.display });
        }

        this.props.setNavigation(this.props.navigation);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.display !== this.props.display) {
            this.setState({ isDisplay: this.props.display });
        }
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
        const container = { ...styles.container };

        if (!this.state.isDisplay) {
            container.opacity = 0;
            container.height = 0;
        }

        return (
            <View style={container}>
                {back && (
                    <View style={styles.leftIconWrapper}>
                        <Touch onPress={this.goBack.bind(this)}>
                            <Icon name='arrow-back' size={24} style={styles.leftIcon} />
                        </Touch>
                    </View>
                )}

                <View style={styles.titleWrapper}>
                    <Text style={styles.title}>{this.props.title}</Text>
                </View>

                <View style={styles.rightIconWrapper}>
                    {!rightButton ? (
                        <Icon name='menu' size={24} style={styles.menuIcon} onPress={this.onShowMenu.bind(this)} />
                    ) : (
                        rightButton
                    )}
                </View>
            </View>
        );
    }
}

export default connect(
    null,
    { setNavigation }
)(TopNavBar);
