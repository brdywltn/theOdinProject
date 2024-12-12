const express = require('express');
const app = express();
const path = require("node:path");
const authorRouter = require('./routes/authorRouter');
const bookRouter = require('./routes/bookRouter');
const indexRouter = require('./routes/indexRouter');

const assetsPath = path.join(__dirname, 'public');
app.use(express.static(assetsPath));

const links = [
    { href: "/", text: "Home" },
    { href: "about", text: "About"},
];

const users = [
    "Rose",
    "Cake",
    "Biff",
    "Chip",
];

app.get("/", (req, res) => {
    res.render("index", { links: links, users: users });
});

app.get("/about", (req, res) => {
    res.render("about", { links: links });
});

app.set("views", path.join(__dirname, 'views'));
app.set("view engine", "ejs");

app.use('/authors', authorRouter);
app.use('/books', bookRouter);
// app.use('/', indexRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`);
})
