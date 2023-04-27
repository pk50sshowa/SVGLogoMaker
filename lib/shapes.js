class Shape {
    constructor(characters, textColor, shapes, shapeColor) {
        this.characters = characters;
        this.textColor = textColor;
        this.shapes = shapes;
        this.shapeColor = shapeColor;
    }
}

class Circle extends Shape {
    render () {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}>`
    }
}

class Triangle extends Shape {
    render () {
        return `<triangle >`
    }
}

class Square extends Shape {
    render () {
        return `<square >`
    }
}

module.exports = Shape;