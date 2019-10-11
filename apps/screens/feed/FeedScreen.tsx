import React from 'react';
import { ScrollView, RefreshControl } from 'react-native';
import { connect } from 'react-redux';
import { NavigationScreenProp, withNavigationFocus } from 'react-navigation';
import EStyleSheet from 'react-native-extended-stylesheet';
import NavBar from '../../components/menu/navbar/NavBar';
import BottomBar from '../../components/menu/bottombar/BottomBar';
import Content from '../../components/content/Content';
import getLocaleString from '../../../locale/index';
import PoemComponent from '../../components/common/poem/PoemComponent';
import { Poem } from 'interfaces/poem';
import styles from './FeedScreen.style';
// import Loader from '../../components/common/Loader';
import { getList, refreshFeed } from '../../../actions/feed';
import { getDailyPoem } from '../../../actions/poem';
import DailyPoem from '../../components/common/dailypoem/DailyPoem';

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
    filters?: any;
    getList?: (id: number) => void;
    refreshFeed?: (options?: any) => void;
    getDailyPoem?: () => void;
    isFocused?: boolean;
    paginator: Paginator;
}

class FeedScreen extends React.Component<Props> {
    componentDidMount() {
        this.props.getList(1);
        this.props.getDailyPoem();
    }

    componentDidUpdate(prevProps) {
        if (!prevProps.isFocused && this.props.isFocused) {
            //@ts-ignore
            // this.scrollRef.scrollTo({ x: 0, y: 0, animated: false });
            this.props.refreshFeed({ showLoader: false, filters: this.props.filters });
        }
    }

    onRefresh() {
        this.props.refreshFeed({ filters: this.props.filters });
        this.props.getDailyPoem();
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
                            tintColor={EStyleSheet.value('$cardText')}
                        />
                    }
                    onScroll={this.onScroll.bind(this)}>
                    <DailyPoem />
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
        filters: state.feed.filters,
        paginator: state.feed.paginator
    };
};

export default connect(
    mapStateToProps,
    { getList, refreshFeed, getDailyPoem }
    //@ts-ignore
)(withNavigationFocus(FeedScreen));
