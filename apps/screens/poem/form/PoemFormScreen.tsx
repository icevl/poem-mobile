import React, { useState } from 'react';
import { ScrollView, Text, Button } from 'react-native';
import { NavigationScreenProp, withNavigationFocus } from 'react-navigation';
import Content from '../../../components/content/Content';
import NavBar from '../../../components/menu/navbar/NavBar';
import Phrase from '../../../../language/index';
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

    const isValid = () => {
        return content !== '';
    };

    const publicPoem = async () => {
        const data = {
            title: title.trim(),
            content: content.trim()
        };

        const response: PoemResponse = await model.createItem(data);
        if (response.id) {
            navigation.navigate('Feed');
        }

        console.log('HI!', data);
    };

    return (
        <Content>
            <NavBar title={Phrase('public_poem')} navigation={navigation} />
            <ScrollView style={styles.scrollView}>
                <Card>
                    <Input placeholder='Название стихотворения' value={title} onChangeText={value => setTitle(value)} />
                </Card>

                <Card>
                    <Input
                        placeholder='Текст'
                        value={content}
                        onChangeText={value => setContent(value)}
                        numberOfLines={12}
                    />
                </Card>

                <Card>
                    <Text>123</Text>
                </Card>

                <Card>
                    <Text>123</Text>
                </Card>

                <Card>
                    <Text>123</Text>
                </Card>

                <Card>
                    <Button title='PUBLIC' disabled={!isValid()} onPress={() => publicPoem()} />
                </Card>
            </ScrollView>
            <BottomBar navigation={navigation} />
        </Content>
    );
};

export default withNavigationFocus(PoemFormScreen);
