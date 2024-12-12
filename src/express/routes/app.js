const express = require('express');
const app = express();
const authorRouter = require('./routes/authorRouter');
const bookRouter = require('./routes/bookRouter');
const indexRouter = require('./routes/indexRouter');

app.use('/authors', authorRouter);
app.use('/books', bookRouter);
app.use('/', indexRouter);

app.use((err, req, res, next) => {
    console.error(err);
    res.status(err.statusCode || 500).send(err);
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`);
})