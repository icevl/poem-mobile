import { AsyncStorage } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Dark from './Dark';
import Ice from './Ice';
import BW from './BW';

let selectedTheme = 'dark';

const themes = [];

themes['dark'] = Dark;
themes['ice'] = Ice;
themes['Black and white'] = BW;

export function getTheme(theme: string) {
    if (themes[theme] != undefined) {
        return themes[theme];
    }
    return null;
}

export async function setTheme(theme: string) {
    if (themes[theme]) {
        selectedTheme = theme;
        EStyleSheet.build(themes[theme]);
        await AsyncStorage.setItem('theme', theme);
    }
}

export function getCurrentTheme() {
    return themes[selectedTheme];
}

export interface ThemeUIColor {
    background: string;
    navbarText: string;
    navbarBackground: string;
    bottombarBackground: string;
    bottombarBorder: string;
    bottombarText: string;
    bottombarActive: string;
    primary: string;
    cardBackground: string;
    cardText: string;
    cardBorder: string;
    poemBackground: string;
}

export interface ThemeUI {
    color: ThemeUIColor;
}
