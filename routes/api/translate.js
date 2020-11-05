var db = require("../../models");
const router = require("express").Router();
const languageTranslator = require("../../config/apiTranslator");

console.log("tranalte set up");

// -> /api/translate/test
router.get("/test", (req, res) => {
    //res.json(languageTranslator);

    let translateParams = {
        text: 'What do you mean? I do not know. What do you want to say?',
        modelId: 'en-fr',
    };
    const translations = [];
    languageTranslator.translate(translateParams)
        .then(translationResult => {
            translations.push({
                params: translateParams,
                translation: translationResult.result.translations
            });

            // next translate
            translateParams = {
                text: 'What do you mean? I do not know. What do you want to say?',
                modelId: 'en-pt',
            }
            //res.json(translationResult.result.translations, null, 2);
            return languageTranslator.translate(translateParams);
        })
        .then(translationResult => {
            translations.push({
                params: translateParams,
                translation: translationResult.result.translations
            });

            res.json(translations);
        })
        .catch(err => {
            console.log('error:', err);
        });
});

module.exports=router;