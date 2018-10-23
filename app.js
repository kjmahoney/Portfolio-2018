const bodyParser = require('body-parser');
const express = require('express');
const ejs = require('ejs');
const fetch = require('node-fetch');

const app = express();
const port = process.env.PORT || 4001;

//TODO: Extrapolate out as a 'model'
const getProjects = async () => {
  const projects = await fetch('https://aqueous-waters-18637.herokuapp.com/api/projects').then((res) => {
    return res.json();
  }).then((projectsJson) => {
    return projectsJson;
  })
  return projects;
}

//TODO: Extrapolate out as a 'controller'
const loadPage = async function (req, res) {
  const projects = await getProjects();
  res.render('base', { projects: projects})
}

app.engine('.html', ejs.__express);
app.set("view engine", ".html")

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', loadPage);

app.listen(port, () => console.log(`Listening on port ${port}`));
