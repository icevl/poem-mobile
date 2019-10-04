import Dark from './Dark';
import Ice from './Ice';
import BW from './BW';

// let defaultTheme = 'dark';
const themes = [];

themes['dark'] = Dark;
themes['ice'] = Ice;
themes['Black and white'] = BW;

export default function Theme(): ThemeUI {
    const selectedTheme = 'Black and white';

    if (themes[selectedTheme] != undefined) {
        return themes[selectedTheme];
    }
    return null;
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
