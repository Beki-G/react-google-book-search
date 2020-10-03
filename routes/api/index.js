const router = require("express").Router();
const bookRoutes = require("./books");
const searchRoutes = require("./search");

router.use("/search", searchRoutes);
router.use("/book", bookRoutes);

module.exports = router;