import 'moment/locale/ru';

import React, { Component } from 'react';
import { Text } from 'react-native';
import moment from 'moment';
import { CurrentLocale } from '../../../language/index';

interface Props {
    date: Date;
    style?: any;
}

export default class Time extends Component<Props> {
    constructor(props) {
        super(props);
        moment.locale(CurrentLocale());
    }
    render() {
        return <Text style={this.props.style}>{moment(this.props.date).format('LLL')}</Text>;
    }
}
