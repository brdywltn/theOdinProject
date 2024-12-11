const db = require("../db");
const asyncHandler = require('express-async-handler');


const getAuthorById = asyncHandler(async (req, res) => {
    const { authorId } = req.params;

    const author = await db.getAuthorById(authorId);

    if (!author) {
        res.status(404).send("Not Found");
        return;
    }

    res.send(`Author Name: ${author.name}`);
});

module.exports = { getAuthorById };