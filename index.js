const googleCreds = require('./google-creds.json');
const { Translate } = require('@google-cloud/translate').v2;

const translate = new Translate({ credentials: googleCreds });

async function translateText(text, target) {
    const [translations, otherInfo] = await translate.translate(text, target);
    console.log(translations, otherInfo.data)
    return translations;
};

async function getLanguages(target) {
    const [languages, otherInfo] = await translate.getLanguages(target && target);
    console.log(languages, otherInfo.data);
    return languages;
};

async function detectLanguage(text) {
    const [{confidence,language, input}, {data}] = await translate.detect(text);
    console.log(language, confidence, input, data);
    return language;
}

const text = 'Hello, world!';
const target = 'ja';

(async () => {
    await translateText(text, target);
    await getLanguages("ja");
    await getLanguages();
    await detectLanguage("Hola");
})();
