import React from 'react';
import { connect } from 'react-redux';
import { NavigationScreenProp, withNavigationFocus } from 'react-navigation';
import BottomBar from '../../components/menu/bottombar/BottomBar';
import Content from '../../components/content/Content';
import getLocaleString from '../../../locale/index';
import PoemComponent from '../../components/common/poem/PoemComponent';
import { Poem } from 'interfaces/poem';

import { getList, refreshFeed } from '../../../actions/feed';
import { getDailyPoem } from '../../../actions/poem';
import DailyPoem from '../../components/common/dailypoem/DailyPoem';
import ScrollContent from '../../components/common/ScrollContent';

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

    render() {
        const { navigation } = this.props;

        return (
            <Content>
                <ScrollContent
                    title={getLocaleString('feed')}
                    navigation={navigation}
                    paginator={this.props.paginator}
                    isLoading={this.props.isLoading}
                    isRefreshLoading={this.props.isRefreshLoading}
                    onRefresh={this.onRefresh.bind(this)}
                    onPaginate={page => this.props.getList(page)}>
                    <DailyPoem />
                    {this.props.feed.map((item, key) => (
                        <PoemComponent item={item} key={key} />
                    ))}
                </ScrollContent>

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
