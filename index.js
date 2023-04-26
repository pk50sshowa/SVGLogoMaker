const inquirer = require('inquirer');
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt');

inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt)

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

//   .then((response) =>
//     writeFile(`${response.name}.json`, JSON.stringify(response),  err => { 
//         if (err) {
//             throw err;
//         }
//         console.log ('Generated logo.svg');
//     } )nod
//   );