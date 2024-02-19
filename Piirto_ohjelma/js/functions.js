import { Circle } from "./class/Circle.js"
import { Line } from "./class/Line.js"
import { Rectangle } from "./class/Rectangle.js"
import { Square } from "./class/Square.js"

const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
const x_input = document.querySelector('#x')
const y_input = document.querySelector('#y')
const draw_button = document.querySelector('button')
const radio_form = document.querySelector('form')
const line_width_input = document.querySelector('input[type=number]')
const color_picker = document.querySelector('#color_picker');


const updateUI =(label3, label4)=> {
    document.querySelector('div#third label').innerHTML = label3

    if (label4 !== undefined) {
        document.querySelector('div#fourth label').innerHTML = label4
        document.querySelector('div#fourth label').style.display = "inline-block"
        document.querySelector('div#fourth input').style.display = "inline-block"
    } else {
        document.querySelector('div#fourth label').style.display = "none"
        document.querySelector('div#fourth input').style.display = "none"
    }
}

draw_button.addEventListener('click', () => {
    const shape = document.querySelector('input[name="shape"]:checked').value
    switch (shape) {
     case 'line':
        drawLine()
        break;
    case 'circle':
        drawCircle()
        break;
    case 'rectangle':
        drawRectangle()
        break;
    case 'square':
        drawSquare()
        break;
    }
})

const drawCircle = () => {
    const x = x_input.value
    const y = y_input.value
    const radius = document.querySelector('div#third input').value
    const lineWidth = line_width_input.value
    const color = color_picker.value
    const circle = new Circle(x, y, radius, lineWidth, color)
    circle.draw(ctx)
}

const drawLine = () => {
    const x1 = x_input.value
    const y1 = y_input.value
    const x2 = document.querySelector('div#third input').value
    const y2 = document.querySelector('div#fourth input').value
    const lineWidth = line_width_input.value
    const color = color_picker.value
    const line = new Line(x1, y1, x2, y2, lineWidth, color)
    line.draw(ctx)
}

const drawRectangle = () => {
    const x = x_input.value
    const y = y_input.value
    const width = document.querySelector('div#third input').value
    const height = document.querySelector('div#fourth input').value
    const lineWidth = line_width_input.value
    const color = color_picker.value
    const rectangle = new Rectangle(x, y, width, height, lineWidth, color)
    rectangle.draw(ctx)
}

const drawSquare = () => {
    const x = x_input.value
    const y = y_input.value
    const sideLength = document.querySelector('div#third input').value
    const lineWidth = line_width_input.value
    const color = color_picker.value
    const square = new Square(x, y, sideLength, lineWidth, color)
    square.draw(ctx)
}