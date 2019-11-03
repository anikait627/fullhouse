const isAuthorized = (req, res, next) => {
    let auth = req.cookies.auth;
    if (auth == null || auth == "")
        return res.status(401).send({success: false, error: "Not Authorized"})
    let authObj = JSON.parse(auth);
    if (authObj.loggedIn == false)
        return res.status(401).send({success: false, error: "Not Authorized"});
    
    req.user = authObj;
    return next(req, res);
}