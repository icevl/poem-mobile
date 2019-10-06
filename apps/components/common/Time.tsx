import 'moment/locale/ru';
// import 'moment/locale/zh-cn';

import React from 'react';
import { Text } from 'react-native';
import moment from 'moment';
import { getLocale } from '../../../locale/index';

interface Props {
    date: Date;
    style?: any;
}

const Time = (props: Props) => (
    <Text style={props.style}>
        {moment(props.date)
            .locale(getLocale())
            .fromNow()}
    </Text>
);

export default Time;
