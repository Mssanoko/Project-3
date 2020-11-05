const router = require("express").Router();
const bookRoutes = require("./books");
const loginRoutes = require("./login");
const translateRoutes = require("./translate");
// Book routes
router.use("/books", bookRoutes);
router.use("/user", loginRoutes);
router.use("/translate", translateRoutes);
module.exports = router;
