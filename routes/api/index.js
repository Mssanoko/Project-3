const router = require("express").Router();
const flashcardRoutes = require("./flashcards");
const loginRoutes = require("./login");
const translateRoutes = require("./translate");
// Book routes
router.use("/flashcards", flashcardRoutes);
router.use("/user", loginRoutes);
router.use("/translate", translateRoutes);

module.exports = router;
