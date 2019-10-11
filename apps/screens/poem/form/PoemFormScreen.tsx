import React, { Component } from 'react';
import { ScrollView, Button } from 'react-native';
import { connect } from 'react-redux';
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
import { refreshFeed } from '../../../../actions/feed';
import { getDailyPoem } from '../../../../actions/poem';
import FormDailyPoem from './FormDailyPoem';

interface Props {
    navigation: NavigationScreenProp<any, any>;
    getDailyPoem?: () => void;
    refreshFeed: ({}) => void;
    isFocused?: boolean;
    daily: any;
}

interface State {
    title: '';
    content: '';
    isLoading: boolean;
    isDaily: boolean;
}

interface PoemResponse {
    id?: number;
}

class PoemFormScreen extends Component<Props, State> {
    model;
    isFocused;

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: '',
            isLoading: false,
            isDaily: false
        };
        this.isFocused = false;
        this.model = new BaseModel(config.paths.poems);
    }

    componentDidUpdate() {
        if (this.props.navigation.isFocused() && !this.isFocused) {
            this.isFocused = true;
            this.props.getDailyPoem();

            const item = this.props.navigation.getParam('item');

            if (!item) {
                return false;
            }

            this.setState({ title: item.title, content: item.content });
        }
    }

    async publicPoem() {
        this.setState({ isLoading: true });

        const response: PoemResponse = await this.model.createItem(this.getData());
        this.setState({ isLoading: false });

        if (response.id) {
            this.openFeed();
        }
    }

    async updatePoem() {
        const item = this.props.navigation.getParam('item');
        this.setState({ isLoading: true });

        const response: PoemResponse = await this.model.updateItem(item.id, this.getData());
        this.setState({ isLoading: false });

        if (response.id) {
            this.openFeed();
            //console.log('response', response);
            //navigation.navigate('PoemComments', { poem: response });
        }
    }

    openFeed() {
        this.props.refreshFeed({ filter: {} });
        this.props.navigation.navigate('Feed');
    }

    isValid() {
        return this.state.content !== '';
    }

    getData() {
        const data: any = {
            title: this.state.title.trim(),
            content: this.state.content.trim()
        };

        if (this.state.isDaily) {
            data.daily_id = this.props.daily.id;
        }

        return data;
    }

    onChange(key: string, value: string) {
        //@ts-ignore
        this.setState({ [key]: value });
    }

    toggleDaily() {
        this.setState({ isDaily: !this.state.isDaily });
    }

    render() {
        const { navigation } = this.props;
        const item = navigation.getParam('item');

        const navbarButton = item ? (
            <Button
                title={getLocaleString('edit')}
                disabled={!this.isValid() || this.state.isLoading}
                onPress={this.updatePoem.bind(this)}
            />
        ) : (
            <Button
                title={getLocaleString('public_verb')}
                disabled={!this.isValid() || this.state.isLoading}
                onPress={this.publicPoem.bind(this)}
            />
        );

        return (
            <Content>
                <NavBar title={getLocaleString('public_poem')} navigation={navigation} rightButton={navbarButton} />
                <ScrollView style={styles.scrollView}>
                    <Card>
                        <Input
                            placeholder={getLocaleString('poem_title')}
                            value={this.state.title}
                            onChangeText={value => this.onChange('title', value)}
                        />
                    </Card>

                    <Card>
                        <Input
                            placeholder={getLocaleString('poem_content')}
                            value={this.state.content}
                            onChangeText={value => this.onChange('content', value)}
                            numberOfLines={12}
                        />
                    </Card>

                    {this.props.daily.id && (
                        <FormDailyPoem active={this.state.isDaily} onPress={this.toggleDaily.bind(this)} />
                    )}
                </ScrollView>
                <BottomBar navigation={navigation} />
            </Content>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        daily: state.poem.daily
    };
};

export default connect(
    mapStateToProps,
    { refreshFeed, getDailyPoem }
)(withNavigationFocus(PoemFormScreen));
