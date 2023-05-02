class SVG {
    constructor(){
        this.textElement = ''
        this.shapeElement = ''
    }
        render(){

            return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`
        }
        setTextElement(characters,textColor){
            this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${characters}</text>`
        }
        setShapeElement(shape){
            this.shapeElement = shape.render(shape);
        }
    }

module.exports = SVG;