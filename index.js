const express = require("express");
const Routes = require("./Routes");
const bodyParser = require("body-parser");

const router = express.Router();

const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(bodyParser.json());
app.use("/", router);

Routes(router);

app.listen(5000);
