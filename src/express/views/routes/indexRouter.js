const { Router } = require('express');
const indexRouter = Router();

indexRouter.get("/", (req, res) => {

    res.render("index", {message: "EJS rocks!"});
});

module.exports = indexRouter;