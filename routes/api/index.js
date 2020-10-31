const router = require("express").Router();
const bookRoutes = require("./books");
const loginRoutes = require("./login");
// Book routes
router.use("/books", bookRoutes);
router.use("/user", loginRoutes);
module.exports = router;
