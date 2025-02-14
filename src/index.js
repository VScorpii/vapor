const { marked } = require('marked');
const fs = require('fs');
const path = require('path');
const dirAndFilesList = require("./required.json");

const configDir = path.join(__dirname, './config/');
const assetsDir = path.join(__dirname, './assets/');
const staticDir = path.join(__dirname, './static/');
const pagesDir = path.join(__dirname, './pages/');
const stylesDir = path.join(__dirname, './config/styles/');

fs.readdir(configDir, (err, files) => {
    if (err) {
        return console.log('Não é possível ler a pasta.');
    }

    files.forEach( (file) => {
        console.log(file);
    })

});
