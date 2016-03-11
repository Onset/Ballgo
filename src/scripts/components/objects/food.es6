var Circle = require('./circle')

class Food extends Circle {
	constructor(image) {
		super()
		this.radius = 15
		this.color = '#0000FF'

		this.image = image
	}

	render(context) {
		context.drawImage(this.image, this.x-this.radius, this.y-this.radius, this.radius*2, this.radius*2)
	}
}

module.exports = Food
