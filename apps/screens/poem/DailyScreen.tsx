import React from 'react';
import { connect } from 'react-redux';
import { NavigationScreenProp, withNavigationFocus } from 'react-navigation';
import BottomBar from '../../components/menu/bottombar/BottomBar';
import Content from '../../components/content/Content';
import getLocaleString from '../../../locale/index';
import PoemComponent from '../../components/common/poem/PoemComponent';
import { Poem } from 'interfaces/poem';

import { getList, refreshFeed, flushFeed } from '../../../actions/feed';
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
    getList?: (id: number, filters: any) => void;
    refreshFeed?: (options?: any) => void;
    getDailyPoem?: () => void;
    flushFeed?: () => void;
    isFocused?: boolean;
    paginator: Paginator;
    dailyPoem: any;
}

class DailyScreen extends React.Component<Props> {
    focusListener;

    componentDidMount() {
        const { navigation } = this.props;
        this.focusListener = navigation.addListener('didFocus', () => {
            this.props.getList(1, { daily: this.props.dailyPoem.id });
        });
    }

    componentWillUnmount() {
        this.focusListener.remove();
    }

    onRefresh() {
        this.props.refreshFeed({ filters: this.props.filters });
    }

    render() {
        const { navigation } = this.props;

        return (
            <Content>
                <ScrollContent
                    title={getLocaleString('daily_poem')}
                    navigation={navigation}
                    paginator={this.props.paginator}
                    isLoading={this.props.isLoading}
                    isRefreshLoading={this.props.isRefreshLoading}
                    onRefresh={this.onRefresh.bind(this)}
                    onPaginate={page => this.props.getList(page, this.props.filters)}
                    back>
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
        paginator: state.feed.paginator,
        dailyPoem: state.poem.daily
    };
};

export default connect(
    mapStateToProps,
    { getList, refreshFeed, flushFeed }
    //@ts-ignore
)(withNavigationFocus(DailyScreen));
