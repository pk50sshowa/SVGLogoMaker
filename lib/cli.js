const inquirer = require('inquirer');
const fs = require('fs');
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt');
const svg = require('./svg');
const {Circle, Square, Triangle} = require('./shapes');

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
        message: 'What shape color would you like?',
        name: 'shapeColor',
    }
  ])
  .then(({ characters, textColor, shapes, shapeColor }) => {
      console.log(characters);
      console.log(textColor);
      console.log(shapes);
      console.log(shapeColor);
      let shape;
      switch (shapes) {
        case "Circle":
          shape = new Circle();
          break;

        case "Square":
          shape = new Square();
          break;
        
        case "Triangle":
          shape = new Triangle();
          break;
      }
      shape.setColor(shapeColor);
      console.log(shape);

      const tempSVG = new svg();
      console.log(shape);
      tempSVG.setTextElement(characters, textColor);
      console.log(tempSVG);
      tempSVG.setShapeElement(shape);
      console.log(tempSVG);
      tempSVG.render(shape);
      console.log(tempSVG);
    }
  )
}}

module.exports = CLI;
  
  //   .then((response) =>
  //     writeFile(`logo.svg`, JSON.stringify(response),  err => { 
  //         if (err) {
  //             throw err;
  //         }
  //         console.log ('Generated logo.svg');
  //     } )nod
  //  )