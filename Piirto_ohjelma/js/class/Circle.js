import { Shape } from "./Shape.js"

export class Circle extends Shape{
    _radius

    constructor(x ,y ,radius ,lineWidth ,color) {
        super(x , y, lineWidth, color)
        this._radius = radius
    }

    draw(ctx) {
        ctx.beginPath()
        ctx.arc(this._x, this._y, this._radius, 0, 2 * Math.PI)
        ctx.lineWidth = this._lineWidth
        ctx.strokeStyle = this._color
        ctx.stroke()
    }
}