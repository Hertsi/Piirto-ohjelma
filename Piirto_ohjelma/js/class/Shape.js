export class Shape {
    _x
    _y
    _lineWidth
    _color

    constructor(x, y, lineWidth = 1, color = '#000000') {
        this._x = x
        this._y = y
        this._lineWidth = lineWidth
        this._color = color
    }

    set lineWidth(lineWidth) {
        this._lineWidth = lineWidth
    }

    get color() {
        return this._color
    }

    set color(color) {
        this._color = color
    }
}