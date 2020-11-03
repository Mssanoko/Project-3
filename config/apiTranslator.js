const apiKey=process.env.APITRANSLATEKEY;
const apiURL=process.env.APITRANSLATEURL;
const version=process.env.APITRANSLATEVERSION;

const LanguageTranslatorV3 = require('ibm-watson/language-translator/v3');
const { IamAuthenticator } = require('ibm-watson/auth');

const languageTranslator = new LanguageTranslatorV3({
  version: version,
  authenticator: new IamAuthenticator({
    apikey: apiKey,
  }),
  serviceUrl: apiURL,
});