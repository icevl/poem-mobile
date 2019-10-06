import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Image } from 'react-native-expo-image-cache';
import Icon from 'react-native-vector-icons/Feather';
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
import { buildPoemArray } from '../../../../helpers/poem';

interface Props {
    item: Poem;
    user?: any;
    update?: any;
    showOverlayMenu?: (menu: any) => void;
    removePoem?: (poem: Poem) => void;
}

interface State {
    isShowMore: boolean;
}

class PoemComponent extends Component<Props, State> {
    shortTextLines: number;
    likeModel: any;

    constructor(props) {
        super(props);
        this.state = {
            isShowMore: false
        };

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
        const onRemove = () => {
            this.props.removePoem(this.props.item);
        };

        const menu = {
            items: [
                {
                    title: getLocaleString('remove_poem'),
                    description: getLocaleString('remove_poem_description'),
                    icon: 'delete-outline',
                    onClick: onRemove
                }
            ]
        };
        this.props.showOverlayMenu(menu);
    }

    toggleMoreButton() {
        const text = this.state.isShowMore ? 'Hide' : 'Show more';
        return (
            <Touch onPress={this.toggleMore.bind(this)}>
                <View>
                    <Text>{text}</Text>
                </View>
            </Touch>
        );
    }

    toggleMore() {
        this.setState({ isShowMore: !this.state.isShowMore });
    }

    render() {
        const isLiked = this.props.item.likes.reduce(
            (acc, like) => (like.user_id === this.props.user.id ? true : acc),
            false
        );

        const poemArray = buildPoemArray(this.props.item.content);

        return (
            <Card>
                <View style={styles.authorRow}>
                    <View style={styles.avatarWrapper}>
                        <Image uri='https://image.flaticon.com/icons/png/128/236/236831.png' style={styles.avatar} />
                    </View>
                    <View style={styles.authorWrapper}>
                        <Text style={styles.authorName}>{this.props.item.user.name}</Text>
                        <Time style={styles.time} date={this.props.item.created_at} />
                    </View>
                    <View style={styles.contextMenuWrapper}>
                        {this.props.user.id === this.props.item.user.id && (
                            <Touch onPress={this.openContext.bind(this)}>
                                <Icon name='more-horizontal' size={30} style={styles.moreButton} />
                            </Touch>
                        )}
                    </View>
                </View>
                <View style={styles.contentWrapper}>
                    <Text style={styles.title}>{this.props.item.title}</Text>

                    {poemArray.length <= this.shortTextLines || this.state.isShowMore ? (
                        <React.Fragment>
                            <Text style={styles.text}>{poemArray.map(line => `${line}\n`)}</Text>
                            {this.state.isShowMore && this.toggleMoreButton()}
                        </React.Fragment>
                    ) : (
                        <React.Fragment>
                            <Text style={styles.text}>
                                {poemArray.slice(0, this.shortTextLines).map(line => `${line}\n`)}
                            </Text>
                            {this.toggleMoreButton()}
                        </React.Fragment>
                    )}
                </View>

                {this.props.item.dedicate_to && this.props.item.dedicate_to.length > 0 && (
                    <View style={styles.dedicateToWrapper}>
                        <Text style={styles.dedicateTo}>{getLocaleString('dedicate_to')}:</Text>
                        <View style={styles.dedicateToLinksWrapper}>{this.getDedicateItem()}</View>
                    </View>
                )}

                <View style={styles.buttonsWrapper}>
                    <View style={styles.buttonsAction}>
                        <View style={styles.buttonsActionWrapper}>
                            <PoemButton
                                isActive={isLiked}
                                icon={isLiked ? 'heart' : 'heart-outline'}
                                value={this.props.item.likes_count.toString()}
                                onPress={this.toggleLike.bind(this, isLiked)}
                            />
                            <PoemButton icon='comment-outline' value={this.props.item.comments_count.toString()} />
                        </View>
                    </View>

                    <View style={styles.buttonsInfo}>
                        <View style={styles.buttonsInfoWrapper}>
                            <PoemButton icon='eye-outline' value={this.props.item.views_count.toString()} small />
                        </View>
                    </View>
                </View>
            </Card>
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
    { update, showOverlayMenu, removePoem }
)(PoemComponent);
