const bodyParser = require('body-parser');
const express = require('express');
const ejs = require('ejs');

const app = express();
const port = process.env.PORT || 4001;


app.engine('.html', ejs.__express);
app.set("view engine", ".html")

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', (req, res) => res.render('base', {}));


app.listen(port, () => console.log(`Listening on port ${port}`));
