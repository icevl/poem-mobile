import React from 'react';
import { View } from 'react-native';
import Constants from 'expo-constants';
import { connect } from 'react-redux';

interface Props {
    statusBarColor?: string;
}

class StatusBar extends React.Component<Props> {
    render() {
        const styles = {
            backgroundColor: this.props.statusBarColor,
            height: Constants.statusBarHeight
        };
        return <View style={styles} />;
    }
}

const mapStateToProps = (state: any) => {
    return {
        statusBarColor: state.application.statusBarColor
    };
};

export default connect(mapStateToProps)(StatusBar);
