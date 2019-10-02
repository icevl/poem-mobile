import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Image } from 'react-native-expo-image-cache';
import { Poem } from '../../../../interfaces/poem';
import Phrase from '../../../../language/index';
import styles from './PoemComponent.style';
import Touch from '../../../components/common/Touch';
import PoemButton from './PoemButton';
import { update } from '../../../../actions/poem';
import LikeModel from '../../../../models/LikeModel';

interface Props {
    item: Poem;
    user?: any;
    update?: any;
}

class PoemComponent extends Component<Props> {
    constructor(props) {
        super(props);
        this.likeModel = new LikeModel();
    }
    getDedicateItem(): React.ReactNode {
        return this.props.item.dedicate_to.map((item, key) => (
            <Touch key={key}>
                <View>
                    <Text style={styles.dedicateToLink}>@{item} </Text>
                </View>
            </Touch>
        ));
    }

    toggleLike(isLiked: boolean) {
        if (!this.props.user.id) {
            return false;
        }

        const poem = { ...this.props.item };

        if (!isLiked) {
            poem.likes_count += 1;
            poem.likes = [...poem.likes, { user_id: this.props.user.id, user_login: this.props.user.login }];
            this.likeModel.like('poem', this.props.item.id);
        } else {
            poem.likes_count -= 1;
            poem.likes = poem.likes.filter(user => user.user_id != this.props.user.id);
            this.likeModel.unLike('poem', this.props.item.id);
        }

        this.props.update(poem);
    }

    render() {
        const isLiked = this.props.item.likes.reduce(
            (acc, like) => (like.user_id === this.props.user.id ? true : acc),
            false
        );
        return (
            <View style={styles.container}>
                <View style={styles.authorRow}>
                    <View style={styles.avatarWrapper}>
                        <Image uri='https://image.flaticon.com/icons/png/128/236/236831.png' style={styles.avatar} />
                    </View>
                    <View style={styles.authorWrapper}>
                        <Text style={styles.authorName}>{this.props.item.user.name}</Text>
                        <Text style={styles.authorLocation}>Russia, Sochi</Text>
                    </View>
                    <View style={styles.contextMenuWrapper}></View>
                </View>
                <View style={styles.contentWrapper}>
                    <Text style={styles.title}>{this.props.item.title}</Text>
                    <Text style={styles.text}>
                        {/* {this.props.item.content} */}
                        Октябрь уж наступил — уж роща отряхает{'\n'}
                        Последние листы с нагих своих ветвей;{'\n'}
                        Дохнул осенний хлад — дорога промерзает.{'\n'}
                        Журча еще бежит за мельницу ручей,{'\n'}
                        Но пруд уже застыл; сосед мой поспешает{'\n'}В отъезжие поля с охотою своей,{'\n'}И страждут
                        озими от бешеной забавы,{'\n'}И будит лай собак уснувшие дубравы.{'\n'}
                        {'\n'}
                        {'\n'}
                        Теперь моя пора: я не люблю весны;{'\n'}
                        Скучна мне оттепель; вонь, грязь — весной я болен;{'\n'}
                        Кровь бродит; чувства, ум тоскою стеснены.{'\n'}
                        Суровою зимой я более доволен,{'\n'}
                        Люблю ее снега; в присутствии луны{'\n'}
                        Как легкий бег саней с подругой быстр и волен,{'\n'}
                        Когда под соболем, согрета и свежа,{'\n'}
                        Она вам руку жмет, пылая и дрожа!
                    </Text>
                </View>

                {this.props.item.dedicate_to && this.props.item.dedicate_to.length > 0 && (
                    <View style={styles.dedicateToWrapper}>
                        <Text style={styles.dedicateTo}>{Phrase('dedicate_to')}:</Text>
                        <View style={styles.dedicateToLinksWrapper}>{this.getDedicateItem()}</View>
                    </View>
                )}

                <View style={styles.buttonsWrapper}>
                    <PoemButton icon='eye' value={this.props.item.views_count.toString()} />
                    <PoemButton
                        isActive={isLiked}
                        icon='thumbs-up'
                        value={this.props.item.likes_count.toString()}
                        onPress={this.toggleLike.bind(this, isLiked)}
                    />
                </View>
            </View>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        user: state.user
    };
};

export default connect(
    mapStateToProps,
    { update }
)(PoemComponent);
