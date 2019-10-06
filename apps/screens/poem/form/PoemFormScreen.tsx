import React, { useState } from 'react';
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
    const { navigation } = props;
    const model = new BaseModel(config.paths.poems);

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const isValid = () => {
        return content !== '';
    };

    const publicPoem = async () => {
        const data = {
            title: title.trim(),
            content: content.trim()
        };

        setIsLoading(true);

        const response: PoemResponse = await model.createItem(data);
        setIsLoading(false);

        if (response.id) {
            navigation.navigate('Feed');
        }
    };

    const button = (
        <Button
            title={getLocaleString('public_verb')}
            disabled={!isValid() || isLoading}
            onPress={() => publicPoem()}
        />
    );

    return (
        <Content>
            <NavBar title={getLocaleString('public_poem')} navigation={navigation} rightButton={button} />
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
