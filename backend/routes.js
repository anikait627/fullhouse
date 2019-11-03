const backend = require("express").Router();

backend.use("/auth", require("./auth/routes"));

module.exports = backend;