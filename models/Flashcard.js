const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FlashcardSchema = new Schema({
  phrase: { type: String, required: true },
  translation: {type: String},
  date: { type: Date, default: Date.now }
});

const Flashcard = mongoose.model("Flashcard", FlashcardSchema);

module.exports = Flashcard;
