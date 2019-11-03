const authRouter = require("express").Router();
const bodyParser = require('body-parser');

authRouter.use(bodyParser.urlencoded({
    extended: true
}));

authRouter.post("/login", (req, res) => {
    // pls never do this kids
    if(req.body.password == "1234"){
        res.cookie("auth", JSON.stringify({loggedIn: true, username: "Admin", shelterId: 1234}))
        return res.send({success: true, error: ""})
    } else {
        res.cookie("auth", JSON.stringify({loggedIn: false, username: null, shelterId: null}))
        return res.send({success: false, error: "Wrong Password (Hint: it's 1234)"});
    }
})


authRouter.post("/logout", (req, res) => {
    // pls never do this kids
    res.cookie("auth", JSON.stringify({loggedIn: false, username: null, shelterId: null}))
    return res.send({success: true, error: ""})
})

module.exports = authRouter;