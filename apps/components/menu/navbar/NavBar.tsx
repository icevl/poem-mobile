import React from 'react';
import { View, Text, TouchableOpacity, Image, TouchableHighlight } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './NavBar.style';
import { setNavigation } from '../../../../actions/navigation';

interface Props {
    navigation: NavigationScreenProp<any, any>;
    leftButton: string | void;
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
        const titleStyle = { ...styles.title, fontFamily: 'Electrolize' };

        return (
            <View>
                <View style={styles.container}>
                    {this.props.leftButton && (
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity>
                                {this.props.leftButton === 'menu' && (
                                    <Icon
                                        name='menu'
                                        size={24}
                                        style={styles.leftIcon}
                                        onPress={this.onShowMenu.bind(this)}
                                    />
                                )}

                                {this.props.leftButton === 'home' && (
                                    <TouchableHighlight onPress={this.onNavigate.bind(this, 'Home')}>
                                        <Image
                                            style={styles.homeImage}
                                            source={require('../../../../assets/images/m_small.png')}
                                        />
                                    </TouchableHighlight>
                                )}

                                {typeof this.props.leftButton === 'function' && (
                                    <Icon
                                        name='arrow-back'
                                        size={24}
                                        style={styles.leftIcon}
                                        onPress={this.onNavigate.bind(this, this.props.leftButton)}
                                    />
                                )}
                            </TouchableOpacity>
                        </View>
                    )}
                    <View style={{ width: '100%', height: '100%', justifyContent: 'center' }}>
                        <Text style={titleStyle}>{this.props.title ? this.props.title.toUpperCase() : ''}</Text>
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
