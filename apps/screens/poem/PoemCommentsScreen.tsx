import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavigationScreenProp, withNavigationFocus } from 'react-navigation';
import PoemComponent from '../../components/common/poem/PoemComponent';
import Content from '../../components/content/Content';
import BottomBar from '../../components/menu/bottombar/BottomBar';
import { loadPoemDetails } from '../../../actions/poem';
import Comments from '../../components/common/comments/Comments';

interface Props {
    isFocused?: boolean;
    navigation: NavigationScreenProp<any, any>;
}

const PoemCommentsScreen = (props: Props) => {
    const { navigation, isFocused } = props;

    const dispatch = useDispatch();
    const stateItem = useSelector((state: any) => state.poem.item);
    const screenItem = navigation.getParam('poem');

    useEffect(() => {
        if (isFocused && screenItem && screenItem.id && screenItem.id !== stateItem.id) {
            dispatch(loadPoemDetails(screenItem));
        }
    }, [isFocused]);

    const target = <PoemComponent item={stateItem} />;
    return (
        <Content>
            <Comments target={target} />
            {/* <ScrollView style={styles.scrollView}>
                <PoemComponent item={stateItem} />
            </ScrollView> */}
            <BottomBar navigation={navigation} />
        </Content>
    );
};

export default withNavigationFocus(PoemCommentsScreen);
