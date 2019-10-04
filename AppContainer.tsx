import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import * as Font from 'expo-font';

interface Props {
    children: React.ReactNode;
}

const AppContainer = (props: Props) => {
    const [isFontsLoaded, setIsFontsLoaded] = useState<Boolean>(false);
    const user = useSelector((state: any) => state.user);

    const loadFonts = async () => {
        await Font.loadAsync({
            Electrolize: require('./assets/fonts/Electrolize.ttf'),
            Nautilus: require('./assets/fonts/Nautilus.otf')
        });

        setIsFontsLoaded(true);
    };

    useEffect(() => {
        loadFonts();
    }, [isFontsLoaded]);

    useEffect(() => {
        // console.log('user', user);
    }, [user]);

    return isFontsLoaded ? props.children : null;
};
export default AppContainer;
