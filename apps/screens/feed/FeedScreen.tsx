import React from 'react';
import { ScrollView, RefreshControl } from 'react-native';
import { connect } from 'react-redux';
import { NavigationScreenProp } from 'react-navigation';
import NavBar from '../../components/menu/navbar/NavBar';
import BottomBar from '../../components/menu/bottombar/BottomBar';
import Content from '../../components/content/Content';
import Phrase from '../../../language/index';
import PoemComponent from '../../components/common/poem/PoemComponent';
import { Poem } from 'interfaces/poem';
import styles from './FeedScreen.style';
import Loader from '../../components/common/Loader';
import { getList, refreshFeed } from '../../../actions/feed';

interface Props {
    actions: any;
    feed: Poem[];
    isLoading: boolean;
    isRefreshLoading: boolean;
    navigation: NavigationScreenProp<any, any>;
    getList?: (id: number) => void;
}

class FeedScreen extends React.Component<Props> {
    componentDidMount() {
        this.props.getList(1);
    }

    onRefresh() {
        this.props.refreshFeed();
    }

    render() {
        const feed = this.props.feed;

        // console.log('feed', feed);

        return (
            <Content>
                <NavBar title={Phrase('feed')} leftButton='menu' navigation={this.props.navigation} />
                <Loader isLoading={this.props.isLoading} />
                {!this.props.isLoading && (
                    <ScrollView
                        style={styles.scrollView}
                        refreshControl={
                            <RefreshControl
                                refreshing={this.props.isRefreshLoading}
                                onRefresh={this.onRefresh.bind(this)}
                            />
                        }>
                        {feed.map((item, key) => (
                            <PoemComponent item={item} key={key} />
                        ))}
                    </ScrollView>
                )}
                <BottomBar navigation={this.props.navigation} />
            </Content>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        feed: state.feed.items,
        isLoading: state.feed.isLoading,
        isRefreshLoading: state.feed.isRefreshLoading
    };
};

export default connect(
    mapStateToProps,
    { getList, refreshFeed }
)(FeedScreen);
