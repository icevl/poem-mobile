import React from 'react';
import * as Font from 'expo-font';

interface Props {
    children: React.ReactNode;
    actions: any;
    isFontLoaded: boolean;
}

interface State {
    isFontsLoaded: boolean;
}

export default class AppContainer extends React.Component<Props, State> {
    constructor(props) {
        super(props);
        this.state = {
            isFontsLoaded: false
        };
    }

    async componentDidMount() {
        await Font.loadAsync({
            Electrolize: require('./assets/fonts/Electrolize.ttf'),
            Nautilus: require('./assets/fonts/Nautilus.otf')
        });

        this.setState({ isFontsLoaded: true });
    }
    render() {
        if (!this.state.isFontsLoaded) {
            return null;
        }

        return this.props.children;
    }
}
