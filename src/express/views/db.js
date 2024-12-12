const authors = [
    { id: 1, name: "Bryan"},
    { id: 2, name: "Christian"},
    { id: 3, name: "Jason"},
];

const books = [
    { id: 1, name: "The Bible"},
    { id: 2, name: "The Qu'ran"},
    { id: 3, name: "The Torah"},
];

async function getAuthorById(authorId) {
    return authors.find(author => author.id === authorId);
};

async function getBookById(bookId) {
    return books.find(book => book.id === bookId);
};

module.exports = { getAuthorById, getBookById };