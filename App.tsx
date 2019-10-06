import React from 'react';
import { SafeAreaView, Platform } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import * as reducers from './reducers/index';
import { StyleSheet } from 'react-native';
import AppMain from './AppMain';
import StatusBar from './apps/components/menu/StatusBar';
import AppContainer from './AppContainer';
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

export default function App() {
    return (
        <Provider store={store}>
            <StatusBar />
            <SafeAreaView style={styles.container}>
                <AppContainer>
                    <AppMain />
                </AppContainer>
            </SafeAreaView>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    }
});
