class Crystal {
  x = 0
  y = 0
  layers = []

  constructor(poxX, poxY) {
    this.x = poxX
    this.y = poxY

    layerConstructors.forEach((lcon) => {
      let picker = random(1)

      if (picker > lcon.weight) {
        this.layers.push(lcon.init())
      }
    })
  }

  render() {
    push()
    translate(this.x, this.y)
    this.layers.forEach((layer) => {
      layer.render()
    })
    pop()
  }
}
