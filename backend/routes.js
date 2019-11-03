const backend = require("express").Router();

backend.use("/auth", require("./auth/routes"));
backend.use("/items", require("./items/routes"));
backend.use("/shelters", require("./shelters/routes"));
backend.use("/cron", require("./cron/routes"));

module.exports = backend;