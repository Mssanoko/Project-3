require('dotenv').config();
const apiKey = process.env.APITRANSLATEKEY;
const apiURL = process.env.APITRANSLATEURL;
const version = process.env.APITRANSLATEVERSION;
console.log({apiKey, apiURL, version})


const LanguageTranslatorV3 = require('ibm-watson/language-translator/v3');
const { IamAuthenticator } = require('ibm-watson/auth');
const { countDocuments, model } = require('../models/Flashcard');

const languageTranslator = new LanguageTranslatorV3({
    version: version,
    authenticator: new IamAuthenticator({
        apikey: apiKey,
    }),
    serviceUrl: apiURL,
});


module.exports=languageTranslator;

// function loadVal(){
//     fetch(LanguageTranslatorV3)
//     .then(function(response){
//         return response.jason();

//     })
//     .then(function(wordsPair){
//         const div = document.createElement('div');
//        div.innerHTML = wordsPair.name;
//         body.appendChild(div);
//     })
// }