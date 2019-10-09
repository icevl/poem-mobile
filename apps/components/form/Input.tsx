import React from 'react';
import { View, TextInput } from 'react-native';
import styles from './Input.style';

interface Props {
    placeholder?: string;
    numberOfLines?: number;
    value?: string;
    backgroundColor?: string;
    multiline?: boolean;
    onFocus?: () => void;
    onBlur?: () => void;
    onChangeText?: (value: any) => void;
}

const Input = (props: Props) => {
    const { placeholder, numberOfLines, onChangeText, value, backgroundColor, multiline, onFocus, onBlur } = props;

    const inputStyles = { ...styles.input };
    const containerStyles = { ...styles.container };

    if (numberOfLines) {
        inputStyles.height = numberOfLines * 20;
    }

    if (backgroundColor) {
        containerStyles.backgroundColor = backgroundColor;
    }

    return (
        <View style={containerStyles}>
            <View style={styles.inputWrapper}>
                <TextInput
                    style={inputStyles}
                    placeholder={placeholder}
                    numberOfLines={numberOfLines}
                    multiline={!!numberOfLines || multiline}
                    onChangeText={onChangeText}
                    value={value}
                    textAlignVertical={!!numberOfLines ? 'top' : 'center'}
                    onFocus={onFocus ? onFocus.bind(this) : null}
                    onBlur={onBlur ? onBlur.bind(this) : null}
                    // maxLength={1000}
                />
            </View>
        </View>
    );
};

export default Input;
