const express = require('express');
const router = require('./router.js');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
  }));

app.use("*",cors());

app.set('views', path.join(__dirname, 'views'));
app.use("/assets", express.static("./views/public"));
app.set('view engine', 'ejs');

app.use(router);

app.listen(3000, () => console.log('Server has started on port 3000'));