const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./src/page-template');

const profileDataArgs = process.argv.slice(2);

const [name, github] = profileDataArgs;

fs.writeFile('./index.html', generatePage(name, github), err => {
    if(err) throw new Error(err);

    console.log('Portfolio Complete! Checkout index.html to see the output!');
});