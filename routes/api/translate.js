var db = require("../../models");
const router = require("express").Router();
const languageTranslator = require("../../config/apiTranslator");

console.log("tranalte set up");

// -> /api/translate/test
router.post("/translate", (req, res) => {
    //res.json(languageTranslator);

    console.log("tranlating", req.body.text)
    console.log("user info", req.user)

    let translateParams = {
        text: req.body.text,
        modelId: 'en-fr',
    };
    const translations = [];
    languageTranslator.translate(translateParams)
        .then(translationResult => {

            var translatedPhrase =translationResult.result.translations[0].translation;
            var originalPhrase = req.body.text;
            console.log("translation result", translationResult.result.translations[0].translation)

            translations.push({
                params: translateParams,
                translation: translationResult.result.translations
            });

            // next translate
            // translateParams = {
            //     text: 'What do you mean? I do not know. What do you want to say?',
            //     modelId: 'en-pt',
            // }
            //res.json(translationResult.result.translations, null, 2);
            return languageTranslator.translate(translateParams);
        // })
        // .then(translationResult => {
        //     translations.push({
        //         params: translateParams,
        //         translation: translationResult.result.translations
        //     });

            res.json(translations);
        })
        .catch(err => {
            console.log('error:', err);
        });
});

module.exports=router;