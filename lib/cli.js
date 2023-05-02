// Variable declarations for the CLI file, which serves as the index file for the application

const inquirer = require('inquirer');
const fs = require('fs');
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt');
const svg = require('./svg');
const {Circle, Square, Triangle} = require('./shapes');

// Special inquirer prompt which makes sure a certain field is only up to a max amount of characters (in this case, 3 characters)
inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt)

class CLI {
  run () {
    // inquirer.prompt to get values from the user
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
    // Calls for individual functions to create the base shapes, the first part of the SVG file generation
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
      // Setting the color of the shape, the second part of the SVG file generation
      shape.setColor(shapeColor);

      // Set of commands to call svg.js, which sets the final elements in the SVG file and exports the code in a variable called "SVGXMLCode"
      const tempSVG = new svg();
      tempSVG.setTextElement(characters, textColor);
      tempSVG.setShapeElement(shape);
      const SVGXMLCode = tempSVG.render(tempSVG);
      console.log(SVGXMLCode);

      // "SVGXMLCode" is exported to a file called logo.svg, completing the application's run
      fs.writeFile(`logo.svg`, SVGXMLCode, err => { 
        if (err) {
            throw err;
        }
        console.log ('Generated logo.svg');
    } )
    }
  )
}}

// Call to the base index.js file
module.exports = CLI;