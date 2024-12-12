const express = require('express');
const app = express();
const path = require('node:path');

const assetsPath = path.join(__dirname, 'public');
app.use(express.static(assetsPath));

app.use(express.urlencoded({ extended: true }));

const messages = [
    {
        text: "Hi there!",
        user: "Amando",
        added: new Date(),
    },
    {
        text: "Hello world!",
        user: "Charles",
        added: new Date(),
    },
];

app.get("/", (req, res) => {
    res.render("index", { messages: messages });
});

app.get("/new", (req, res) => {
   res.render("form");
});

app.get("/open", (req, res) => {
   res.render("message", {
       text: req.query.text,
       user: req.query.user,
       added: req.query.added,
   });
});

app.post("/new", (req, res) => {
   let name = req.body.name;
   let message = req.body.message;
   let added = new Date();

   messages.push({text: message, user: name, added: added});
   res.redirect("/");
});

app.set("views", path.join(__dirname, 'views'));
app.set("view engine", "ejs");

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`);
});