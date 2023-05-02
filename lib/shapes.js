// This file sets the type of shape and the color of the shape, which is exported back to cli.js
// Shapes are exported based on shape selected by the user

class Shape{

        constructor(){
            this.shapeColor=''
        }
        setColor(shapeColor){
            this.shapeColor=(shapeColor);
        }
    }

class Circle extends Shape {
    render () {
        return `<circle cx="50%" cy="50%" r="100" fill="${this.shapeColor}" />`
    }
}

class Square extends Shape {
    render () {
        return `<rect x="90" y="40" width="200" height="200" fill="${this.shapeColor}" />`
    }
};

class Triangle extends Shape {
    render () {
        return `<polygon points="0,200 300,200 150,0" fill="${this.shapeColor}" />`
    }
}

module.exports = {Circle, Square, Triangle}