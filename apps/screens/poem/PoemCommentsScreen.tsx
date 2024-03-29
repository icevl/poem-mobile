import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavigationScreenProp, withNavigationFocus } from 'react-navigation';
import PoemComponent from '../../components/common/poem/PoemComponent';
import Content from '../../components/content/Content';
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

    const target = <PoemComponent item={stateItem} actions={false} />;
    return (
        <Content>
            <Comments target={target} type='poem' id={screenItem.id} navigation={navigation} />
        </Content>
    );
};

export default withNavigationFocus(PoemCommentsScreen);
