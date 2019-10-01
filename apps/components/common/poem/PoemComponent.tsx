import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Image } from 'react-native-expo-image-cache';
import { Poem } from '../../../../interfaces/poem';
import Phrase from '../../../../language/index';
import styles from './PoemComponent.style';
import Touch from '../../../components/common/Touch';
import PoemButton from './PoemButton';

interface Props {
    item: Poem;
}

export default class PoemComponent extends Component<Props> {
    getDedicateItem(): React.ReactNode {
        return this.props.item.dedicate_to.map((item, key) => (
            <Touch key={key}>
                <View>
                    <Text style={styles.dedicateToLink}>@{item} </Text>
                </View>
            </Touch>
        ));
    }

    render() {
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
                    <PoemButton icon='thumbs-up' value={this.props.item.likes_count.toString()} />
                </View>
            </View>
        );
    }
}
