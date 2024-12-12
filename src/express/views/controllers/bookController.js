const db = require("../db");
const asyncHandler = require("express-async-handler");
const CustomErrorNotFoundError = require('../errors/CustomNotFoundError');

const getBookById = asyncHandler(async(req, res) => {
   const { bookId } = req.params;

   const book = await db.getBookById(Number(bookId));

   if (!book) {
       throw new CustomNotFoundError("Book not found");
       return;
   }

   res.send(`Book ID: ${bookId}`);
});

module.exports = { getBookById };