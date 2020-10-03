const router = require("express").Router();
const searchContoller = require("../../controllers/searchController");

router.route("/:title")
    .get(searchContoller.findBookbyTitle)

module.exports = router;