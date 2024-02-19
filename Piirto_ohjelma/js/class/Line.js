import { Shape } from './Shape.js'

export class Line extends Shape {
    constructor(x1, y1, x2, y2, lineWidth, color) {
        super(x1, y1, lineWidth, color)
        this._x2 = x2
        this._y2 = y2
    }

    draw(ctx) {
        ctx.beginPath()
        ctx.moveTo(this._x, this._y)
        ctx.lineTo(this._x2, this._y2)
        ctx.lineWidth = this._lineWidth
        ctx.stroke()
    }
}