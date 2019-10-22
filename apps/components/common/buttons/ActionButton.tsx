import React from 'react';
import { View, Text } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Touch from '../Touch';
import styles from './ActionButton.style';

import LikeIcon from '../../icons/LikeIcon';
import CommentIcon from '../../icons/CommentIcon';
import StarIcon from '../../icons/StarIcon';

const LikeButton = props => {
    const { onPress, active, value, icon } = props;
    const fontExtraStyle: any = {};

    const getIcon = () => {
        switch (icon) {
            case 'like':
                return LikeIcon;

            case 'comment':
                return CommentIcon;

            case 'star':
                return StarIcon;

            default:
                return LikeIcon;
        }
    };

    const Icon = getIcon();

    return (
        <Touch onPress={onPress ? e => onPress(e) : null} feedback={true}>
            <View style={{ ...styles.container, ...(active && styles.active) }}>
                <View style={styles.icon}>
                    <Icon
                        width={25}
                        height={25}
                        fill={active ? EStyleSheet.value('$primary') : EStyleSheet.value('$cardText')}
                    />
                </View>

                {'value' in props && (
                    <View style={styles.textWrapper}>
                        <Text style={{ ...styles.label, ...fontExtraStyle, ...(active && styles.active) }}>
                            {value}
                        </Text>
                    </View>
                )}
            </View>
        </Touch>
    );
};

export default LikeButton;
