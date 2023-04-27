const fs = require('fs');
const getSvg = require('./utils/svg.js');
const inquirer = require('inquirer');

const shapeList = [
  'circle', 'square', 'triangle'
];

const init = () => {
  inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Enter the name of the text you would like in the SVG file'
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
      choices: shapeList,
      default: shapeList[0],
    },
  ])
  .then((answers) => {
    const chosenShape = answers.shape;
    const svgFile = getSvg(chosenShape, answers);
    fs.writeFile('./gen/image.svg', svgFile, (err) => {
      if (err) throw err;
      console.log('SVG successfully created');
    });
  });
};

init();
