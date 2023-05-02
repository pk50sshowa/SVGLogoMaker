// svg.js file to set the final elements of the SVG file and create the entire XML code to be exported

class SVG {
    constructor(){
        this.textElement = ''
        this.shapeElement = ''
    }
        // This renders the entire SVG XML code, which is sent back to cli.js
        render(){

            return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`
        }
        // This sets the text and the text color to be put in the shape
        setTextElement(characters,textColor){
            this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${characters}</text>`
        }
        // This sets the shape element, based on what was created in shapes.js
        setShapeElement(shape){
            this.shapeElement = shape.render(shape);
        }
    }

module.exports = SVG;