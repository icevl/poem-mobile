import Russian from './Russian';
//import English from "./English";

let defaultLanguage = 'ru';

var dictionary = [];
dictionary['ru'] = Russian;
//dictionary["en"] = English;

/**
 * Получить фразу из словаря
 */
export default function Phrase(word: string): string {
    let selectedLang = CurrentLocale();
    if (dictionary[selectedLang] != undefined && word in dictionary[selectedLang]) {
        return dictionary[selectedLang][word];
    }
    return null;
}

/**
 * Получить текущий язык
 */
export function CurrentLocale() {
    let selectedLang = defaultLanguage;
    // if (typeof Storage !== "undefined") {
    //     selectedLang = localStorage.getItem("lang");
    //     if (selectedLang) {
    //         if (dictionary[selectedLang] == undefined) {
    //             selectedLang = defaultLanguage;
    //         }
    //     }
    // }

    return selectedLang;
}
