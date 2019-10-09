import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavigationScreenProp } from 'react-navigation';
import EStyleSheet from 'react-native-extended-stylesheet';
import { ScrollView } from 'react-native';
import { Pagination } from '../../../../interfaces/pagination';
import styles from './Comments.style';
import getLocaleString from '../../../../locale/index';
import { getList } from '../../../../actions/comments';
import Card from '../Card';
import CommentItem from './CommentItem';
import CommentSend from './CommentSend';
import NavBar from '../../menu/navbar/NavBar';

interface Props {
    navigation: NavigationScreenProp<any, any>;
    target?: React.ReactNode;
    type: string;
    id: number;
    getList?: (page: number, type: string, id: number) => void;
    comments: any;
    isLoading?: boolean;
    paginator: Pagination;
}

class Comments extends Component<Props> {
    componentDidMount() {
        const { type, id } = this.props;
        this.props.getList(1, type, id);
    }

    onScroll({ nativeEvent }) {
        if (
            !this.props.isLoading &&
            this.isCloseToBottom(nativeEvent) &&
            this.props.paginator.page < this.props.paginator.pages
        ) {
            this.setState({ lastScrollPos: nativeEvent.contentOffset.y });
            const nextpage = this.props.paginator.page + 1;
            this.props.getList(nextpage, this.props.type, this.props.id);
        }
    }

    isCloseToBottom({ layoutMeasurement, contentOffset, contentSize }) {
        return layoutMeasurement.height + contentOffset.y >= contentSize.height - 1000;
    }

    render() {
        const { navigation } = this.props;

        return (
            <React.Fragment>
                <NavBar title={getLocaleString('comments')} navigation={navigation} rightButton={true} back />
                <ScrollView style={styles.scrollView} onScroll={this.onScroll.bind(this)} scrollEventThrottle={16}>
                    {/* {target} */}

                    {this.props.comments.length ? (
                        <Card color={EStyleSheet.value('$cardBackground')}>
                            {this.props.comments.map((comment, index) => (
                                <CommentItem item={comment} key={index} />
                            ))}
                        </Card>
                    ) : null}
                </ScrollView>
                <CommentSend type={this.props.type} id={this.props.id} />
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        user: state.user,
        comments: state.comments.items,
        isLoading: state.comments.isLoading,
        paginator: state.comments.paginator
    };
};

export default connect(
    mapStateToProps,
    { getList }
)(Comments);
