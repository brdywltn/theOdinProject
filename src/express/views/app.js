const express = require('express');
const app = express();
const path = require("node:path");
const authorRouter = require('./routes/authorRouter');
const bookRouter = require('./routes/bookRouter');
const indexRouter = require('./routes/indexRouter');

app.set("views", path.join(__dirname, 'views'));
app.set("view engine", "ejs");

app.use('/authors', authorRouter);
app.use('/books', bookRouter);
app.use('/', indexRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`);
})