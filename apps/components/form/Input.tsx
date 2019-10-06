import React from 'react';
import { View, TextInput } from 'react-native';
import styles from './Input.style';

interface Props {
    placeholder?: string;
    numberOfLines?: number;
    value?: string;
    onChangeText?: (value: any) => void;
}

const Input = (props: Props) => {
    const { placeholder, numberOfLines, onChangeText, value } = props;

    const inputStyles = { ...styles.input };
    if (numberOfLines) {
        inputStyles.height = numberOfLines * 20;
    }

    return (
        <View style={styles.container}>
            <View style={styles.inputWrapper}>
                <TextInput
                    style={inputStyles}
                    placeholder={placeholder}
                    numberOfLines={numberOfLines}
                    multiline={!!numberOfLines}
                    onChangeText={onChangeText}
                    value={value}
                    textAlignVertical={!!numberOfLines ? 'top' : 'center'}
                    maxLength={1000}
                />
            </View>
        </View>
    );
};

export default Input;
