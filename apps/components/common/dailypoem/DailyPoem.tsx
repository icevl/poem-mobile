import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text } from 'react-native';
import Card from '../Card';
import styles from './DailyPoem.style';
import Touch from '../Touch';
import { getList } from '../../../../actions/feed';

const DailyPoem = () => {
    const dailyPoem = useSelector((state: any) => state.poem.daily);
    const dispatch = useDispatch();

    if (!dailyPoem || !dailyPoem.title) {
        return null;
    }

    const getDaily = () => {
        dispatch(getList(1, { daily: dailyPoem.id }));
    };

    return (
        <Touch onPress={() => getDaily()}>
            <Card>
                <View style={styles.container}>
                    <View style={styles.labelWrapper}>
                        <Text style={styles.label}>Тема дня:</Text>
                    </View>
                    <View style={styles.titleWrapper}>
                        <Text style={styles.text}>{dailyPoem.title}</Text>
                    </View>
                </View>
            </Card>
        </Touch>
    );
};

export default DailyPoem;
