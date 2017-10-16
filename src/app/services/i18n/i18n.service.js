const es = require('./json/es.json');
const en = require('./json/en.json');

const languages = Object.freeze({
    es,
    en,
});

const defaultLenguage = Object.freeze(es);

export const translate = (reference) => {
    if(typeof reference === 'string') {
        let json = languages[navigator.language] || defaultLenguage;
        reference.split('.').forEach( key => {
            json = json[key];
        });
        return json ? json.toString() : reference;
    }
    return undefined;
};
