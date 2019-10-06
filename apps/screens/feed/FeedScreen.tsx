import React from 'react';
import { ScrollView, RefreshControl } from 'react-native';
import { connect } from 'react-redux';
import { NavigationScreenProp, withNavigationFocus } from 'react-navigation';
import NavBar from '../../components/menu/navbar/NavBar';
import BottomBar from '../../components/menu/bottombar/BottomBar';
import Content from '../../components/content/Content';
import getLocaleString from '../../../locale/index';
import PoemComponent from '../../components/common/poem/PoemComponent';
import { Poem } from 'interfaces/poem';
import styles from './FeedScreen.style';
// import Loader from '../../components/common/Loader';
import { getList, refreshFeed } from '../../../actions/feed';

interface Paginator {
    page: number;
    pages: number;
    total: number;
}

interface Props {
    actions: any;
    feed: Poem[];
    isLoading: boolean;
    isRefreshLoading: boolean;
    navigation: NavigationScreenProp<any, any>;
    getList?: (id: number) => void;
    refreshFeed?: (options?: any) => void;
    isFocused?: boolean;
    paginator: Paginator;
}

class FeedScreen extends React.Component<Props> {
    componentDidMount() {
        this.props.getList(1);
    }

    componentDidUpdate(prevProps) {
        if (!prevProps.isFocused && this.props.isFocused) {
            //@ts-ignore
            this.scrollRef.scrollTo({ x: 0, y: 0, animated: false });
            this.props.refreshFeed({ showLoader: true });
        }
    }

    onRefresh() {
        this.props.refreshFeed();
    }

    onScroll({ nativeEvent }) {
        if (
            !this.props.isLoading &&
            this.isCloseToBottom(nativeEvent) &&
            this.props.paginator.page < this.props.paginator.pages
        ) {
            this.setState({ lastScrollPos: nativeEvent.contentOffset.y });
            const nextpage = this.props.paginator.page + 1;
            this.props.getList(nextpage);
        }
    }

    isCloseToBottom({ layoutMeasurement, contentOffset, contentSize }) {
        return layoutMeasurement.height + contentOffset.y >= contentSize.height - 1000;
    }

    render() {
        const { navigation } = this.props;

        return (
            <Content>
                <NavBar title={getLocaleString('feed')} navigation={navigation} />
                {/* <Loader isLoading={this.props.isLoading && this.props.paginator.page === 1} /> */}

                <ScrollView
                    scrollEventThrottle={16}
                    ref={ref => (this.scrollRef = ref)}
                    style={styles.scrollView}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.props.isRefreshLoading}
                            onRefresh={this.onRefresh.bind(this)}
                        />
                    }
                    onScroll={this.onScroll.bind(this)}>
                    {this.props.feed.map((item, key) => (
                        <PoemComponent item={item} key={key} />
                    ))}
                </ScrollView>

                <BottomBar navigation={navigation} />
            </Content>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        isLoading: state.feed.isLoading,
        isRefreshLoading: state.feed.isRefreshLoading,
        feed: state.feed.items,
        paginator: state.feed.paginator
    };
};

export default connect(
    mapStateToProps,
    { getList, refreshFeed }
    //@ts-ignore
)(withNavigationFocus(FeedScreen));
