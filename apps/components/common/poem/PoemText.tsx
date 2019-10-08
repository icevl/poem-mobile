import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Touch from '../../../components/common/Touch';
import { buildPoemArray, getMaxLine } from '../../../../helpers/poem';
import getLocaleString from '../../../../locale/index';
import styles from './PoemText.style';

const PoemText = props => {
    const { text } = props;

    const shortTextLines = 12;
    const poemArray = buildPoemArray(text);

    const [isShowMore, setIsShowMore] = useState(false);
    const [layoutWidth, setLayoutWidth] = useState(0);

    const toggleMoreButton = () => {
        const text = isShowMore
            ? getLocaleString('poem_content_collapse').toUpperCase()
            : getLocaleString('poem_content_expand').toUpperCase();
        return (
            <Touch onPress={() => toggleMore()}>
                <View>
                    <Text style={styles.showMore}>{text}</Text>
                </View>
            </Touch>
        );
    };

    const toggleMore = () => {
        setIsShowMore(!isShowMore);
    };

    const getTextSize = () => {
        if (!layoutWidth) {
            return 0;
        }

        const maxSize = 18,
            minSize = 16;

        const maxLineSize = getMaxLine(poemArray);
        let fontSize = Math.round(layoutWidth / (maxLineSize * 0.7));

        if (fontSize > maxSize) {
            fontSize = maxSize;
        }

        if (fontSize < minSize) {
            fontSize = minSize;
        }

        return fontSize;
    };

    const style = { ...styles.text, fontSize: getTextSize() };

    return (
        <View onLayout={event => setLayoutWidth(event.nativeEvent.layout.width)}>
            {poemArray.length <= shortTextLines || isShowMore ? (
                <React.Fragment>
                    <Text style={style}>{poemArray.map(line => `${line}\n`)}</Text>
                    {isShowMore && toggleMoreButton()}
                </React.Fragment>
            ) : (
                <React.Fragment>
                    <Text style={style}>{poemArray.slice(0, shortTextLines).map(line => `${line}\n`)}</Text>
                    {toggleMoreButton()}
                </React.Fragment>
            )}
        </View>
    );
};

export default PoemText;
