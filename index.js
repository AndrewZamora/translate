const googleCreds = require('./google-creds.json');
const { Translate } = require('@google-cloud/translate').v2;

const translate = new Translate({ credentials: googleCreds });

async function translateText(text, target) {
    let translations = await translate.translate(text, target);
    console.log(translations,)
    // translations = Array.isArray(translations) ? translations : [translations];
    // console.log('Translations:');
    // translations.forEach((translation, i) => {
    //     console.log(`${text[i]} => (${target}) ${translation}`);
    // });
};

const text = 'Hello, world!';
const target = 'ja';

(async () => {
    await translateText(text, target);
})();
