const router = require("express").Router();
const bookController = require("../../controllers/booksController");

router.route("/")
    .post(bookController.saveBook)
    .get(bookController.find);

router.route("/:id")
    .delete(bookController.remove)

module.exports= router;