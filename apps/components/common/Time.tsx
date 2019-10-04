import 'moment/locale/ru';

import React from 'react';
import { Text } from 'react-native';
import moment from 'moment';
import { CurrentLocale } from '../../../language/index';
moment.locale(CurrentLocale());

interface Props {
    date: Date;
    style?: any;
}

const Time = (props: Props) => <Text style={props.style}>{moment(props.date).format('LLL')}</Text>;

export default Time;
