import en from '../lang/ecolanguage-en.json';
import tr from '../lang/ecolanguage-tr.json';

const langs ={
	'en':en,
	'en-EN':en,
	'en-US':en,
	'tr':tr,
	'tr-TR':tr
}

export function GetLang() {
	
	var e = GetComputedLang()
	return langs[e]
}

export function GetLangCode(){
	var lang = "en";
	
	if(localStorage.getItem("lang") !== null)
		lang = localStorage.getItem("lang");
	
	return lang;
}

function GetComputedLang(){
	var e = getFirstBrowserLanguage();
	var set;
	if (typeof(Storage) !== "undefined") {
		if(localStorage.getItem("lang") === null){
			
			if(e != null)
				set = e
			else
				set = "en-EN"
			localStorage.setItem("lang",set);
		}
		else{
			set = localStorage.getItem("lang");
			if(!(set in langs)){
				set = "en-EN"
				localStorage.setItem("lang",set);
			}
		}
	}
	else{
		if(e != null)
				set = e
			else
				set = "en-EN"
	}

	return set;
}

function getFirstBrowserLanguage() {
        var nav = window.navigator,
            browserLanguagePropertyKeys = ['language', 'browserLanguage', 'systemLanguage', 'userLanguage'],
            i,
            language,
            len,
            shortLanguage = null;

        // support for HTML 5.1 "navigator.languages"
        if (Array.isArray(nav.languages)) {
            for (i = 0; i < nav.languages.length; i++) {
                language = nav.languages[i];
                len = language.length;
                if (!shortLanguage && len) {
                    shortLanguage = language;
                }
                if (language && len>2) {
                    return language;
                }
            }
        }

        // support for other well known properties in browsers
        for (i = 0; i < browserLanguagePropertyKeys.length; i++) {
            language = nav[browserLanguagePropertyKeys[i]];
            len = language.length;
            if (!shortLanguage && len) {
                shortLanguage = language;
            }
            if (language && len > 2) {
                return language;
            }
        }

        return shortLanguage;
    }