import React from 'react';
import { ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { NavigationScreenProp } from 'react-navigation';
import NavBar from '../../components/menu/navbar/NavBar';
import Content from '../../components/content/Content';
import Phrase from '../../../language/index';
import PoemComponent from '../../components/common/poem/PoemComponent';
import { Poem } from 'interfaces/poem';
import styles from './FeedScreen.style';
import Loader from '../../components/common/Loader';
import { getList } from '../../../actions/feed';

interface Props {
    actions: any;
    feed: Poem[];
    isLoading: boolean;
    navigation: NavigationScreenProp<any, any>;
    getList?: (id: number) => void;
}

class FeedScreen extends React.Component<Props> {
    componentDidMount() {
        this.props.getList(1);
    }

    render() {
        const feed = this.props.feed;

        console.log('feed', feed);

        return (
            <Content>
                <NavBar title={Phrase('feed')} leftButton='menu' navigation={this.props.navigation} />
                <Loader isLoading={this.props.isLoading} />
                {!this.props.isLoading && (
                    <ScrollView style={styles.scrollView}>
                        {feed.map((item, key) => (
                            <PoemComponent item={item} key={key} />
                        ))}
                    </ScrollView>
                )}
            </Content>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        feed: state.feed.items,
        isLoading: state.feed.isLoading
    };
};

export default connect(
    mapStateToProps,
    { getList }
)(FeedScreen);
