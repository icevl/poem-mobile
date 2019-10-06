import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AsyncStorage } from 'react-native';
import AuthModel from '../../../models/AuthModel';
import MenuBlock from './MenuBlock';
import MenuLink from './MenuLink';
import { refreshApplication } from '../../../actions/application';
import { setAuth } from '../../../actions/user';

interface Props {
    accountUsers: any;
    userId: number;
    refreshApplication: () => void;
    setAuth: (data: any) => void;
}

class MenuUserSwitch extends Component<Props> {
    authModel;
    constructor(props) {
        super(props);
        this.authModel = new AuthModel();
    }

    async onUserSwitch(id: number) {
        const userData = await this.authModel.getUser(id);

        if (!userData.token) {
            return false;
        }

        this.props.setAuth(userData);
        await AsyncStorage.setItem('token', userData.token);
        this.props.refreshApplication();
    }

    render() {
        return (
            <MenuBlock>
                {this.props.accountUsers.map((user, index) => {
                    let title = `${user.login}`;
                    if (this.props.userId === user.id) {
                        title += '  (current)';
                    }
                    return (
                        <MenuLink
                            key={index}
                            title={title}
                            onPress={this.onUserSwitch.bind(this, user.id)}
                            icon='announcement'
                        />
                    );
                })}
            </MenuBlock>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        accountUsers: state.user.accountUsers,
        userId: state.user.id
    };
};

export default connect(
    mapStateToProps,
    { refreshApplication, setAuth }
)(MenuUserSwitch);
