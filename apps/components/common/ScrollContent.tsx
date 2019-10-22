import React, { Component } from 'react';
import { ScrollView, RefreshControl } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { NavigationScreenProp } from 'react-navigation';
import NavBar from '../../components/menu/navbar/NavBar';
import styles from './ScrollContent.style';

interface Paginator {
    page: number;
    pages: number;
    total: number;
}

interface Props {
    title: string;
    navigation: NavigationScreenProp<any, any>;
    isRefreshLoading?: boolean;
    onRefresh?: () => void;
    children: React.ReactNode;
    isLoading?: boolean;
    paginator?: Paginator;
    onPaginate?: (page: number) => void;
}

interface State {
    isShowNavbar: boolean;
}

export default class ScrollContent extends Component<Props, State> {
    scrollRef;
    lastScrollPosition;
    lastUpdate;
    offset;

    constructor(props) {
        super(props);
        this.state = {
            isShowNavbar: true
        };

        this.offset = 1000;
        this.lastScrollPosition = 0;

        //@ts-ignore
        this.lastUpdate = parseInt(new Date().getTime() / 1000);
    }

    onScroll({ nativeEvent }) {
        //@ts-ignore
        const currentTimestamp = parseInt(new Date().getTime() / 1000);

        if (
            !this.props.isLoading &&
            this.isCloseToBottom(nativeEvent) &&
            this.props.paginator.page < this.props.paginator.pages
        ) {
            const nextpage = this.props.paginator.page + 1;
            if (this.props.onPaginate) {
                this.props.onPaginate(nextpage);
            }
        }

        const positionY = nativeEvent.contentOffset.y + nativeEvent.layoutMeasurement.height;

        if (positionY <= this.offset && !this.state.isShowNavbar) {
            this.setState({ isShowNavbar: true });
            return true;
        }

        if (currentTimestamp - this.lastUpdate >= 1) {
            this.lastUpdate = currentTimestamp;

            if (positionY - this.lastScrollPosition > 100 && positionY > this.offset) {
                this.setState({ isShowNavbar: false });
            }

            if (this.lastScrollPosition - positionY > 400) {
                this.setState({ isShowNavbar: true });
            }

            this.lastScrollPosition = positionY;
        }
    }

    isCloseToBottom({ layoutMeasurement, contentOffset, contentSize }) {
        return layoutMeasurement.height + contentOffset.y >= contentSize.height - 1000;
    }

    render() {
        const { title, navigation, isRefreshLoading, onRefresh, children } = this.props;

        return (
            <React.Fragment>
                <NavBar title={title} navigation={navigation} display={this.state.isShowNavbar} />

                {/* <Loader isLoading={this.props.isLoading && this.props.paginator.page === 1} /> */}

                <ScrollView
                    scrollEventThrottle={16}
                    ref={ref => (this.scrollRef = ref)}
                    style={styles.scrollView}
                    refreshControl={
                        onRefresh ? (
                            <RefreshControl
                                refreshing={isRefreshLoading}
                                onRefresh={onRefresh.bind(this)}
                                tintColor={EStyleSheet.value('$cardText')}
                            />
                        ) : null
                    }
                    onScroll={this.onScroll.bind(this)}>
                    {children}
                </ScrollView>
            </React.Fragment>
        );
    }
}
