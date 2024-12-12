const express = require('express');
const app = express();
const path = require('node:path');

const assetsPath = path.join(__dirname, 'public');
app.use(express.static(assetsPath));

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
})

app.set("views", path.join(__dirname, 'views'));
app.set("view engine", "ejs");

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`);
});