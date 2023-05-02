const {Circle, Square, Triangle} = require("../lib/shapes")

describe('Circle', () => {
    test('Renders correctly', () => {
        const shape = new Circle();
        var color =('blue')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<circle cx="50%" cy="50%" r="100" fill="${color}" />`);
    });
  });
  describe('Square', () => {
      test('Renders correctly', () => {
        const shape = new Square();
        var color =('green')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<rect x="90" y="40" width="200" height="200" fill="${color}" />`);
      });
    });
  describe('Triangle', () => {
      test('Renders correctly', () => {
        const shape = new Triangle();
        var color =('yellow')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<polygon points="0,200 300,200 150,0" fill="${color}" />`);
      });
    });