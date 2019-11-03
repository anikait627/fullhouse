const express = require('express');
const cookieParser = require('cookie-parser')
const authorizer = require("./backend/auth/authorizer");
const app = express();
const port = process.env.PORT || 3000;

app.use(cookieParser())

app.use('/backend', require('./backend/routes.js'))

app.use("/static", express.static('../frontend/my-app/build/public'));
app.get("/", authorizer.isAuthorizedRedirect, (req, res) => {
    return res.sendFile('frontend/my-app/build/index.html', { root: "./"});
});
app.get("/messages", authorizer.isAuthorizedRedirect, (req, res) => {
    return res.sendFile('frontend/my-app/build/index.html', { root: "./"});
});
app.get("/update", authorizer.isAuthorizedRedirect, (req, res) => {
    return res.sendFile('frontend/my-app/build/index.html', { root: "./"});
});
app.get("/inventory", authorizer.isAuthorizedRedirect, (req, res) => {
    return res.sendFile('frontend/my-app/build/index.html', { root: "./"});
});
app.get("/login", (req, res) => {
    res.cookie("auth", JSON.stringify({loggedIn: false, username: null, shelterId: null}));
    return res.sendFile('frontend/my-app/build/index.html', { root: "./"});
});
app.use("/", express.static('frontend/my-app/build/'));

app.listen(port, () => console.log(`Fullhouse listening on port ${port}!`))