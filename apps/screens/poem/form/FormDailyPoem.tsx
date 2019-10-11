import React from 'react';
import { useSelector } from 'react-redux';
import { View, Text } from 'react-native';
import styles from './FormDailyPoem.style';
import Touch from '../../../components/common/Touch';
import Card from '../../../components/common/Card';

interface Props {
    active: boolean;
    onPress: () => void;
}

const FormDailyPoem = (props: Props) => {
    const { active, onPress } = props;

    const dailyPoem = useSelector((state: any) => state.poem.daily);

    if (!dailyPoem || !dailyPoem.title) {
        return null;
    }

    return (
        <Touch onPress={() => onPress()}>
            <View style={!active && styles.inactive}>
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
            </View>
        </Touch>
    );
};

export default FormDailyPoem;
