import { Shape } from './Shape.js'

export class Rectangle extends Shape {
    constructor(x, y, width, height, lineWidth, color) {
        super(x, y, lineWidth, color)
        this._width = width
        this._height = height
    }

    draw(ctx) {
        ctx.beginPath()
        ctx.rect(this._x, this._y, this._width, this._height)
        ctx.lineWidth = this._lineWidth
        ctx.stroke()
    }
}