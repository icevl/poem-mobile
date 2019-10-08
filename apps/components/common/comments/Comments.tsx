import React, { Component } from 'react';
import { connect } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
import { ScrollView } from 'react-native';
import Card from '../Card';
import CommentItem from './CommentItem';
import styles from './Comments.style';
import { getList } from '../../../../actions/comments';

interface Props {
    target?: React.ReactNode;
    type: string;
    id: number;
    getList?: (page: number, type: string, id: number) => void;
    comments: any;
}

class Comments extends Component<Props> {
    componentDidMount() {
        const { type, id } = this.props;
        this.props.getList(1, type, id);
    }

    render() {
        const { target } = this.props;

        return (
            <ScrollView style={styles.scrollView}>
                {target}
                <Card color={EStyleSheet.value('$poemBackground')}>
                    {this.props.comments.map((comment, index) => (
                        <CommentItem item={comment} key={index} />
                    ))}
                </Card>
            </ScrollView>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        user: state.user,
        comments: state.comments.items
    };
};

export default connect(
    mapStateToProps,
    { getList }
)(Comments);
