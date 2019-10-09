import React, { Component } from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { View, Text, Keyboard } from 'react-native';
import { connect } from 'react-redux';
import Input from '../../form/Input';
import Touch from '../Touch';
import { postComment } from '../../../../actions/comments';
import styles from './CommentSend.style';

interface Props {
    id: number;
    type: string;
    postComment?: (type: string, id: number, content: string) => void;
}

interface State {
    text: string;
    keyboardHeight: number;
}

class CommentSend extends Component<Props, State> {
    keyboardDidShowListener;
    keyboardDidHideListener;

    constructor(props) {
        super(props);
        this.state = {
            text: '',
            keyboardHeight: 0
        };
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this.onKeyboardShow.bind(this));
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this.onKeyboardHide.bind(this));
    }

    sendComment() {
        this.props.postComment(this.props.type, this.props.id, this.state.text);
    }

    onCommentChange(text) {
        this.setState({ text });
    }

    onKeyboardShow(e) {
        this.setState({ keyboardHeight: e.endCoordinates.height });
    }
    onKeyboardHide() {
        this.setState({ keyboardHeight: 0 });
    }

    render() {
        const containerStyle = {
            ...styles.container,
            position: 'absolute',
            bottom: this.state.keyboardHeight
        };

        return (
            <View style={containerStyle}>
                <View>
                    <Input
                        placeholder='input text'
                        onChangeText={this.onCommentChange.bind(this)}
                        backgroundColor={EStyleSheet.value('$cardBackground')}
                        multiline
                    />
                </View>
                <View>
                    <Touch onPress={this.sendComment.bind(this)}>
                        <Text>SEND</Text>
                    </Touch>
                </View>
            </View>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        user: state.user
    };
};

export default connect(
    mapStateToProps,
    { postComment }
)(CommentSend);
