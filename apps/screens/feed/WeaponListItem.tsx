/**
 * https://github.com/wcandillon/react-native-expo-image-cache
 */

import React from 'react';
import { Platform, View, Text, TouchableNativeFeedback, TouchableOpacity } from 'react-native';
import { Image } from 'react-native-expo-image-cache';
import styles from './WeaponsListItem.style';
import { Weapon } from 'interfaces/weapons';
import WeaponStatItem from '../../components/common/WeaponStatItem';

interface Props {
    weapon: Weapon;
}

interface State {}

const TouchComponent = Platform.OS === 'ios' ? TouchableOpacity : TouchableNativeFeedback;

export default class WeaponsListItem extends React.Component<Props, State> {
    constructor(props) {
        super(props);
    }

    render() {
        const titleStyle = { ...styles.title, fontFamily: 'Electrolize' };

        return (
            <TouchComponent>
                <View style={styles.container}>
                    <View style={styles.picture}>
                        <Image
                            uri='https://mobilegamerhub.com/call-of-duty-mobile/wp-content/uploads/sites/22/2019/04/ak47.png'
                            style={styles.image}
                        />
                        <Text style={titleStyle}>{this.props.weapon.name}</Text>
                    </View>

                    <View style={styles.info}>
                        <WeaponStatItem title='Accuracy' />
                        <WeaponStatItem title='Damage' />
                        <WeaponStatItem title='Range' />
                        <WeaponStatItem title='Fire Rate' />
                    </View>
                </View>
            </TouchComponent>
        );
    }
}
