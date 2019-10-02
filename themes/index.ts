import Dark from './Dark';
import Ice from './Ice';

// let defaultTheme = 'dark';
const themes = [];

themes['dark'] = Dark;
themes['ice'] = Ice;

export default function Theme(): ThemeUI {
    const selectedTheme = 'ice';

    if (themes[selectedTheme] != undefined) {
        return themes[selectedTheme];
    }
    return null;
}

export interface ThemeUIColor {
    background: string;
    navbarText: string;
    navbarBackground: string;
    primary: string;
    cardBackground: string;
    cardText: string;
    poemBackground: string;
}

export interface ThemeUI {
    color: ThemeUIColor;
}
