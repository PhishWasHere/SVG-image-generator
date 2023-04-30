//required files
const fs = require('fs');
const inquirer = require('inquirer');
const circle = require('./utils/circle');
const square = require('./utils/square');
const triangle = require('./utils/triangle');

const validation = (input) => { //validation function to make sure input is 
  if (input.length > 3) {
    return 'Name should be less than or equal to 3 characters'; //indicates input is invalid and prompts user to change input
  }
  return true; //indicated input is valid
};

const genFile = (answers) => {
  let svg;

  if (answers.shape === 'circle') {  
    svg = new circle.Circle(answers);
  } else if (answers.shape === 'square') {
    svg = new square.Square(answers);
  } else if (answers.shape === 'triangle') {
    svg = new triangle.Triangle(answers);
  }

  fs.writeFile('./gen/logo.svg', svg.render(), (err) => {
    if (err) throw err;
    console.log('SVG successfully created');
  });
};


const init = () => {
  inquirer.prompt([
    {
      type: 'maxlength-input',
      name: 'name',
      message: 'Enter the name of the text you would like in the SVG file (max length of 3)',
      validate: validation, //calls validation function
    },
    {
      type: 'input',
      name: 'txtcolor',
      message: 'What color would you like the text to be?'
    },
    {
      type: 'input',
      name: 'color',
      message: 'What color would you like?'
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Which shape would you like to use?',
      choices: ['circle', 'square', 'triangle'],
    },
  ])
  
    .then((answers) => {  //calls genFile function
      genFile(answers);
    })
};

init() //calls init function to start program
