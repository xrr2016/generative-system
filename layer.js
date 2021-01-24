class Layer {
  sides = 0
  numShapes = 0
  angle = 0
  stepsOut = 8
  singleStep = 0
  thinStroke = 1
  thickStroke = 3
  layerColor = null

  constructor() {
    this.sides = SIDES
    this.numShapes = this.sides
    this.angle = 360 / this.numShapes
    this.stepsOut = 8
    this.singleStep = CRYSTAL_SIZE / 2 / this.stepsOut
    this.thinStroke = 1
    this.thickStroke = 3
    this.layerColor = getRandomFromPalette()
  }
}

class Circles extends Layer {
  constructor() {
    super()
    this.shapeSize = (CRYSTAL_SIZE / 2) * 0.93
    this.position = CRYSTAL_SIZE / 2 - this.shapeSize / 2
    // this.weight = randomSelectTwo() ? 3 : 1
  }

  render() {
    noFill()
    stroke(this.layerColor)
    strokeWeight(1)
    push()
    for (let i = 0; i <= this.numShapes; i++) {
      ellipse(this.position, 0, this.shapeSize)
      rotate(this.angle)
    }
    pop()
  }
}

class SimpleLines extends Layer {
  constructor() {
    super()
    this.numSteps = randomSelectTwo()
      ? this.stepsOut
      : int(this.stepsOut * 1.25)
    this.step = CRYSTAL_SIZE / 2 / this.numSteps
    this.start = floor(random(1, this.numSteps))
    this.stop = floor(random(this.start, this.numSteps) + 1)
    this.weight = randomSelectTwo() ? 3 : 1
    this.numShapes = randomSelectTwo() ? this.sides : this.sides * 2
    this.angle = 360 / this.numShapes
  }

  render() {
    noFill()
    stroke(this.layerColor)
    strokeWeight(this.weight)
    push()
    for (let i = 0; i < this.numShapes; i++) {
      line(this.start * this.step, 0, this.stop * this.step, 0)
      rotate(this.angle)
    }
    pop()
  }
}

class OutlineShape extends Layer {
  constructor() {
    super()
    this.weight = randomSelectTwo() ? 3 : 1
    this.drawHexagon = randomSelectTwo()
  }

  render() {
    push()
    stroke(this.layerColor)
    strokeWeight(this.weight)
    if (this.drawHexagon) {
      hexagon(0, 0, CRYSTAL_SIZE / 2)
    } else {
      ellipse(0, 0, CRYSTAL_SIZE, CRYSTAL_SIZE)
    }
    pop()
  }
}

class DottedLines extends Layer {
  constructor() {
    super()
    this.numShapes = randomSelectTwo() ? this.sides : this.sides * 2
    this.angle = 360 / this.numShapes
    this.shapeSize = 3
    this.centerOffset = this.singleStep
  }

  render() {
    fill(this.layerColor)
    noStroke()
    push()
    for (let i = 0; i < this.numShapes; i++) {
      for (
        let j = this.centerOffset;
        j < CRYSTAL_SIZE / 2;
        j += this.singleStep
      ) {
        rect(j, 0, this.shapeSize, this.shapeSize)
      }
      rotate(this.angle)
    }
    pop()
  }
}

class CenterShape extends Layer {
  constructor() {
    super()
    this.randomShape = random(1)
    this.shapeSize =
      floor(random(this.stepsOut / 2, this.stepsOut - 2)) * this.singleStep
  }

  render() {
    fill(this.layerColor)
    noStroke()
    push()
    if (this.randomShape < 0.3) {
      rect(0, 0, this.shapeSize * 2, this.shapeSize * 2)
    } else if (this.randomShape >= 0.3 && this.randomShape < 0.6) {
      ellipse(0, 0, this.shapeSize * 2)
    } else {
      rotate(this.angle / 2)
      hexagon(0, 0, this.shapeSize)
    }
    pop()
  }
}

class RingOfShapes extends Layer {
  constructor() {
    super()
    this.steps = floor(random(1, this.stepsOut))
    this.center = this.steps * this.singleStep
    this.randomShape = random(1)
    this.direction = randomSelectTwo()
    this.fillColor = randomSelectTwo() ? this.layerColor : color(0, 1)
    this.weight = randomSelectTwo() ? this.thinStroke : this.thickStroke
    if (this.steps < this.stepsOut / 2) {
      this.radius = floor(random(1, this.steps)) * this.singleStep
    } else if (this.steps > this.stepsOut / 2) {
      this.radius =
        floor(random(1, this.stepsOut - this.steps)) * this.singleStep
    } else {
      this.radius = floor(random(1, this.stepsOut / 2 + 1)) * this.singleStep
    }
  }

  render() {
    stroke(this.layerColor)
    fill(this.fillColor)
    strokeWeight(this.weight)
    push()
    for (let i = 0; i < this.numShapes; i++) {
      if (this.randomShape < 0.33) {
        ellipse(0, this.center, this.radius, this.radius)
      } else if (this.randomShape >= 0.33 && this.randomShape < 0.66) {
        rect(0, this.center, this.radius, this.radius)
      } else {
        myTriangle(this.center, this.radius, this.direction)
      }
      rotate(this.angle)
    }
    pop()
  }
}

class SteppedHexagons extends Layer {
  constructor() {
    super()
    this.numShapes = randomSelectTwo() ? this.stepsOut : this.stepsOut * 1.25
    this.centerOffset = (CRYSTAL_SIZE / 2) * 0.15
    this.singleStep = (CRYSTAL_SIZE / 2 - this.centerOffset) / this.numShapes
    this.weight = randomSelectTwo() ? this.thickStroke : this.thinStroke
  }

  render() {
    stroke(this.layerColor)
    noFill()
    strokeWeight(this.weight)
    push()
    rotate(this.angle / 2)
    for (let i = 0; i < this.numShapes; i++) {
      hexagon(0, 0, this.centerOffset + i * this.singleStep)
    }
    pop()
  }
}

class TestLines {
  render() {
    const strokeColor = getRandomFromPalette()
    const numShapes = randomSelectTwo() ? SIDES : SIDES * 2

    noFill()
    push()
    stroke(color(200, 52, 154))
    ellipse(0, 0, CRYSTAL_SIZE, CRYSTAL_SIZE)
    stroke(strokeColor)
    const angle = 360 / numShapes
    for (let i = 0; i < numShapes; i++) {
      line(0, 0, CRYSTAL_SIZE / 2, 0)
      rotate(angle)
    }
    pop()
  }
}
