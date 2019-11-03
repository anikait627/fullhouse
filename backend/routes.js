const backend = require("express").Router();

backend.use("/auth", require("./auth/routes"));
backend.use("/items", require("./items/routes"));

module.exports = backend;