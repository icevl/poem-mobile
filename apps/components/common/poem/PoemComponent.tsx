import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Image } from 'react-native-expo-image-cache';
import Icon from 'react-native-vector-icons/Feather';
import { NavigationScreenProp } from 'react-navigation';
import { Poem } from '../../../../interfaces/poem';
import getLocaleString from '../../../../locale/index';
import styles from './PoemComponent.style';
import Touch from '../../../components/common/Touch';
import PoemButton from './PoemButton';
import { update, removePoem } from '../../../../actions/poem';
import LikeModel from '../../../../models/LikeModel';
import Time from '../../../components/common/Time';
import Card from '../Card';
import { showOverlayMenu } from '../../../../actions/application';
import PoemText from './PoemText';
import Verified from '../user/Verified';
import ActionButton from '../buttons/ActionButton';

interface Props {
    navigator: NavigationScreenProp<any, any>;
    item: Poem;
    user?: any;
    update?: any;
    actions?: boolean;
    showOverlayMenu?: (menu: any) => void;
    removePoem?: (poem: Poem) => void;
    loadPoemDetails?: (poem: Poem) => void;
}

class PoemComponent extends Component<Props> {
    shortTextLines: number;
    likeModel: any;

    constructor(props) {
        super(props);

        this.shortTextLines = 12;
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

    openContext() {
        if (this.props.user.id === this.props.item.user.id) {
            const onRemove = () => {
                this.props.removePoem(this.props.item);
            };

            const onEdit = () => {
                this.props.navigator.navigate('PoemForm', { item: this.props.item });
            };

            const menu = {
                items: [
                    {
                        title: getLocaleString('poem_edit'),
                        description: getLocaleString('poem_edit_description'),
                        icon: 'square-edit-outline',
                        onClick: onEdit
                    },
                    {
                        title: getLocaleString('poem_remove'),
                        description: getLocaleString('poem_remove_description'),
                        icon: 'delete-outline',
                        onClick: onRemove
                    }
                ]
            };

            this.props.showOverlayMenu(menu);
        }
    }

    openPoemDetails() {
        // this.props.loadPoemDetails(this.props.item);
        this.props.navigator.navigate('PoemComments', { poem: this.props.item });
    }

    render() {
        if (!this.props.item || !this.props.item.id) {
            return null;
        }

        const isLiked = this.props.item.likes.reduce(
            (acc, like) => (like.user_id === this.props.user.id ? true : acc),
            false
        );

        const showActions = !('actions' in this.props) || this.props.actions;

        return (
            <Touch feedback={false}>
                <Card>
                    <View style={styles.authorRow}>
                        <View style={styles.avatarWrapper}>
                            <Image uri={this.props.item.user.avatar_url} style={styles.avatar} />
                        </View>
                        <View style={styles.authorWrapper}>
                            <View style={styles.authorNameWrapper}>
                                <Text style={styles.authorName}>{this.props.item.user.name}</Text>
                                <View style={styles.authorVerified}>
                                    {this.props.item.user.is_verified && <Verified />}
                                </View>
                            </View>
                            <Time style={styles.time} date={this.props.item.created_at} />
                        </View>
                        <View style={styles.contextMenuWrapper}>
                            <Touch onPress={this.openContext.bind(this)}>
                                <Icon name='more-horizontal' size={30} style={styles.moreButton} />
                            </Touch>
                        </View>
                    </View>
                    <View style={styles.contentWrapper}>
                        <Text style={styles.title}>{this.props.item.title}</Text>
                        <PoemText text={this.props.item.content} />
                    </View>

                    {this.props.item.dedicate_to && this.props.item.dedicate_to.length > 0 && (
                        <View style={styles.dedicateToWrapper}>
                            <Text style={styles.dedicateTo}>{getLocaleString('dedicate_to')}:</Text>
                            <View style={styles.dedicateToLinksWrapper}>{this.getDedicateItem()}</View>
                        </View>
                    )}

                    {showActions && (
                        <View style={styles.buttonsWrapper}>
                            <View style={styles.buttonsAction}>
                                <View style={styles.buttonsActionWrapper}>
                                    <ActionButton
                                        onPress={this.toggleLike.bind(this, isLiked)}
                                        value={this.props.item.likes_count.toString()}
                                        active={isLiked}
                                        icon='like'
                                    />

                                    <ActionButton
                                        onPress={this.openPoemDetails.bind(this)}
                                        value={this.props.item.comments_count.toString()}
                                        icon='comment'
                                    />

                                    <ActionButton icon='star' />
                                </View>
                            </View>

                            <View style={styles.buttonsInfo}>
                                <View style={styles.buttonsInfoWrapper}>
                                    <PoemButton
                                        icon='eye-outline'
                                        value={this.props.item.views_count.toString()}
                                        small
                                    />
                                </View>
                            </View>
                        </View>
                    )}
                </Card>
            </Touch>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        user: state.user,
        navigator: state.navigation.navigator
    };
};

export default connect(
    mapStateToProps,
    { update, showOverlayMenu, removePoem }
)(PoemComponent);
