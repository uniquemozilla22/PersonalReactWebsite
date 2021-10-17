const express = require("express");
const bodyParser = require("body-parser");
const allowAccess = require("./Services/accessOrigin.js");

const router = express.Router();

const app = express();

app.use((req, res, next) => allowAccess(req, res, next));

app.use(bodyParser.json());
app.use("/", router);

require("./Routes")(router);

app.listen(5000);
