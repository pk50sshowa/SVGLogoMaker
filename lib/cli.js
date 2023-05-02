const inquirer = require('inquirer');
const fs = require('fs');
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt');
const svg = require('./svg');
const {Circle, Square, Triangle} = require('./shapes');
// const {Circle, Square, Triangle} = require('./shapes.test');

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

      const tempSVG = new svg();
      tempSVG.setTextElement(characters, textColor);
      tempSVG.setShapeElement(shape);
      const SVGXMLCode = tempSVG.render(tempSVG);
      console.log(SVGXMLCode);

      fs.writeFile(`logo.svg`, SVGXMLCode, err => { 
        if (err) {
            throw err;
        }
        console.log ('Generated logo.svg');
    } )
    }
  )
}}

module.exports = CLI;