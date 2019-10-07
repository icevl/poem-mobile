import React, { useState, useEffect } from 'react';
import { ScrollView, Button } from 'react-native';
import { NavigationScreenProp, withNavigationFocus } from 'react-navigation';
import Content from '../../../components/content/Content';
import NavBar from '../../../components/menu/navbar/NavBar';
import getLocaleString from '../../../../locale/index';
import BottomBar from '../../../components/menu/bottombar/BottomBar';
import Card from '../../../components/common/Card';
import Input from '../../../components/form/Input';
import styles from './PoemFormScreen.style';
import BaseModel from '../../../../models/Base';
import config from '../../../../config';

interface Props {
    navigation: NavigationScreenProp<any, any>;
}

interface PoemResponse {
    id?: number;
}

const PoemFormScreen = (props: Props) => {
    const { navigation, isFocused } = props;
    const item = navigation.getParam('item');

    const model = new BaseModel(config.paths.poems);

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (isFocused && item) {
            setTitle(item.title);
            setContent(item.content);
        }
    }, [isFocused]);

    const isValid = () => {
        return content !== '';
    };

    const getData = () => {
        return {
            title: title.trim(),
            content: content.trim()
        };
    };

    const publicPoem = async () => {
        setIsLoading(true);

        const response: PoemResponse = await model.createItem(getData());
        setIsLoading(false);

        if (response.id) {
            navigation.navigate('Feed');
        }
    };

    const updatePoem = async () => {
        setIsLoading(true);

        const response: PoemResponse = await model.updateItem(item.id, getData());
        setIsLoading(false);

        if (response.id) {
            navigation.navigate('Feed');
        }
    };

    const navbarButton = item ? (
        <Button title={getLocaleString('edit')} disabled={!isValid() || isLoading} onPress={() => updatePoem()} />
    ) : (
        <Button
            title={getLocaleString('public_verb')}
            disabled={!isValid() || isLoading}
            onPress={() => publicPoem()}
        />
    );

    return (
        <Content>
            <NavBar title={getLocaleString('public_poem')} navigation={navigation} rightButton={navbarButton} />
            <ScrollView style={styles.scrollView}>
                <Card>
                    <Input
                        placeholder={getLocaleString('poem_title')}
                        value={title}
                        onChangeText={value => setTitle(value)}
                    />
                </Card>

                <Card>
                    <Input
                        placeholder={getLocaleString('poem_content')}
                        value={content}
                        onChangeText={value => setContent(value)}
                        numberOfLines={12}
                    />
                </Card>

                {/* <Card>
                    <Text>123</Text>
                </Card>

                <Card>
                    <Text>123</Text>
                </Card>

                <Card>
                    <Text>123</Text>
                </Card> */}
            </ScrollView>
            <BottomBar navigation={navigation} />
        </Content>
    );
};

export default withNavigationFocus(PoemFormScreen);
