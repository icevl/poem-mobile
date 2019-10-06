import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, TouchableWithoutFeedback, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './OverlayMenu.style';
import { closeOverlayMenu } from '../../../actions/application';
import Touch from './Touch';

interface Props {
    overlayMenu: any;
    closeOverlayMenu?: () => void;
}

class OverlayMenu extends Component<Props> {
    onClose() {
        this.props.closeOverlayMenu();
    }

    onMenuPress(e) {
        e.preventDefault();
    }

    onPress(item) {
        this.onClose();

        if (item.onClick) {
            item.onClick(item);
        }
    }

    getItem(item, index) {
        return (
            <Touch key={index} onPress={this.onPress.bind(this, item)}>
                <View style={styles.menuItemWrapper}>
                    <View style={styles.menuItemIconWrapper}>
                        <Icon name={item.icon} size={35} />
                    </View>
                    <View style={styles.menuItemTextWrapper}>
                        <Text>{item.title}</Text>
                        <Text style={styles.description}>{item.description}</Text>
                    </View>
                </View>
            </Touch>
        );
    }

    render() {
        if (!Object.keys(this.props.overlayMenu).length) {
            return null;
        }

        return (
            <TouchableWithoutFeedback onPress={this.onClose.bind(this)}>
                <View style={styles.overlay}>
                    <TouchableWithoutFeedback onPress={this.onMenuPress.bind(this)}>
                        <View style={styles.menuWrapper}>
                            {this.props.overlayMenu.items
                                ? this.props.overlayMenu.items.map((item, index) => this.getItem(item, index))
                                : null}
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        overlayMenu: state.application.overlayMenu
    };
};

export default connect(
    mapStateToProps,
    { closeOverlayMenu }
)(OverlayMenu);
