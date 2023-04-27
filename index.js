//required files
const fs = require('fs');
const inquirer = require('inquirer');
const genSVG = require('./utils/svg.js');

const validation = (input) => { //validation function to make sure input is =<3 
  if (input.length > 3) {
    return 'Name should be less than or equal to 3 characters'; //indicates input is invalid and prompts user to change input
  }
  return true; //indicated input is valid
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
  .then((answers) => {  //creates svg file based on answers
    const svg = genSVG(answers);
    fs.writeFile('./gen/image.svg', svg, (err) => {
      if (err) throw err; 
      console.log('SVG successfully created'); 
    });
  })
};

init() //calls init function to start program
