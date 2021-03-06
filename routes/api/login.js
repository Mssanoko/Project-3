// Requiring our models and passport as we've configured it
var db = require("../../models");
var passport = require("../../config/passport");
const router = require("express").Router();
//const { Json } = require("sequelize/types/lib/utils");

  console.log("/api/user is defined"); 
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  // router.post("/login", passport.authenticate("local"), function(req, res) {
  //   res.json(req.user);
  // });
  // Using the passport.authenticate middleware with our local strategy.
// If the user has valid login credentials, send them to the members page.
// Otherwise the user will be sent an error
// -> /api/user/login
router.post("/login", passport.authenticate("local"), (req, res) => {
  // Sending back a password, even a hashed password, isn't a good idea
  res.json({
      email: req.user.email,
      _id: req.user._id
  });
});

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  router.post("/signup", function(req, res) {
    console.log("working?");
    console.log(req.body);
    db.User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })
      .then(function(data) {
        res.redirect(307, "/login");
        console.log("signed up");
        res.status(200).json(data);
      })
      .catch(function(err) {
        console.log(err);
        res.status(401).json(err);
      });
  });

  // Route for logging user out
  router.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
    res.json(true);
  });

  // Route for getting some data about our user to be used client side

  // you NEED to return flashcards too!
  router.get("/user_data", function(req, res) {

    // use the user ID to find the user in Mongoose
    //db.User.findById more or less
    // you need to return that, alond with the flashcards in it
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        _id: req.user._id
      });
    }
  });
module.exports = router; 
