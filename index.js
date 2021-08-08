const express = require("express");
const Routes = require("./Routes");

const router = express.Router();

const app = express();

app.use("/", router);

Routes(router);

app.listen(5000);
