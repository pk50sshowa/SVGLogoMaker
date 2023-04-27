const inquirer = require('inquirer');
const fs = require('fs');
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt');

const Shape = require('./shapes');

inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt)

class CLI {
  run () {
    inquirer
  .prompt([
    {
        type: 'maxlength-input',
        message: 'Please enter three characters.',
        name: 'characters',
        maxLength: 3,
    },
    {
        type: 'input',
        message: 'What text color would you like?',
        name: 'textColor',
    },
    {
        type: 'list',
        message: 'What shape would you like to choose?',
        choices: ['Circle', 'Triangle', 'Square'],
        name: 'shapes',
    },
    {
        type: 'input',
        message: 'What text color would you like?',
        name: 'shapeColor',
    }
  ]).then(console.log)
  }
}

  module.exports = CLI;

//   .then(( {characters, textColor, shapes, shapeColor})) => {
//     let shape;
//     switch ()
//   }
//   shape.SetColor(shapeColor);

//   const svg = new SVG();
//   svg.setText(characters, textColor);
//   svg.setShape(shapes);

//   .then((response) =>
//     writeFile(`logo.svg`, JSON.stringify(response),  err => { 
//         if (err) {
//             throw err;
//         }
//         console.log ('Generated logo.svg');
//     } )nod
//   );