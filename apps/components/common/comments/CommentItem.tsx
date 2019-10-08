import React from 'react';
import { View, Text } from 'react-native';
import { Image } from 'react-native-expo-image-cache';
import Touch from '../../../components/common/Touch';
import Time from '../../../components/common/Time';
// import Verified from '../user/Verified';
import styles from './CommentItem.style';

const CommentItem = props => {
    const { item } = props;
    return (
        <View style={styles.container}>
            <View style={styles.authorRow}>
                <View style={styles.avatarWrapper}>
                    <Image uri='https://image.flaticon.com/icons/png/128/236/236831.png' style={styles.avatar} />
                </View>
                <View style={styles.authorWrapper}>
                    <View style={styles.authorNameWrapper}>
                        <Text style={styles.authorName}>{item.user.name}</Text>
                        {/* <View style={styles.authorVerified}>{item.user.is_verified && <Verified />}</View> */}
                    </View>
                    <Time style={styles.time} date={item.created_at} />
                </View>
                <View style={styles.contextMenuWrapper}>
                    <Touch>{/* <Icon name='more-horizontal' size={30} style={styles.moreButton} /> */}</Touch>
                </View>
            </View>

            <View style={styles.contentWrapper}>
                <Text style={styles.contentText}>{item.content.trim()}</Text>
            </View>
        </View>
    );
};

export default CommentItem;
