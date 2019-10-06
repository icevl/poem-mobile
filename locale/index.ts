import Russian from './Russian';
import English from './English';
import Chinese from './Chinese';

import { AsyncStorage } from 'react-native';

const dictionary = [];
let current = 'ru';

dictionary['ru'] = Russian;
dictionary['en'] = English;
dictionary['cn'] = Chinese;

export default function getLocaleString(word: string): string {
    const selectedLang = getLocale();
    if (dictionary[selectedLang] != undefined && word in dictionary[selectedLang]) {
        return dictionary[selectedLang][word];
    }
    return null;
}

export function getLocale(): string {
    if (current === 'cn') {
        current = 'ru';
    }
    return current;
}

export async function setLocale(locale: string) {
    if (!dictionary[locale]) {
        return false;
    }

    current = locale;
    await AsyncStorage.setItem('locale', locale);
}
