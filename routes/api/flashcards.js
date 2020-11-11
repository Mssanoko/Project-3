const router = require("express").Router();


const booksController = require("../../controllers/flashController");
var db = require("../../models");
// Matches with "/api/books"



  router.get('/userFlashcards', function(req,res){
    console.log("userFlashcard route hit!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")

    db.User.findById(req.user._id)
    .populate("flashcards")
    .then(function(userData){
      console.log("flashcards", userData)
      res.json(userData.flashcards)
    })




  })



router.route("/")
  .get(booksController.findAll)
  .post(booksController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);







module.exports = router;
