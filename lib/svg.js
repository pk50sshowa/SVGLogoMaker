var svg = new Svg();
	svg.setTextElement(user_text, user_font_color);
	svg.setShapeElement(user_shape);
	svgString = svg.render();

class SVG {
    constructor(){
        this.textElement = ''
        this.shapeElement = ''
    }
        render(){

            return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`
        }
        setTextElement(text,color){
            this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
        }
        setShapeElement(shape){
            this.shapeElement = shape.render()
    
        }
        
    }

    

module.exports = SVG;