const SIDES = 6
const CRYSTAL_SIZE = 500

let PALETTE = []

function setup() {
  PALETTE = [color(200, 52, 154), color(4, 0, 152)]
  createCanvas(600, 600)
  noLoop()
  rectMode(CENTER)
  angleMode(DEGREES)
}

function draw() {
  const circles = new Circles()
  circles.render()

  const simpleLines = new SimpleLines()
  simpleLines.render()

  const outlineShape = new OutlineShape()
  outlineShape.render()
  testLines()
  // outlineShape()
  // simpleLines()
  // circles()

  // let picker = random(1)

  // if (picker > 0.3) {
  //   outlineShape()
  // }

  // picker = random(1)

  // if (picker > 0.3) {
  //   simpleLines()
  // }

  // picker = random(1)

  // if (picker > 0.3) {
  //   circles()
  // }
}

function circles(params) {
  const numShapes = SIDES
  const angle = 360 / numShapes
  const shapeSize = (CRYSTAL_SIZE / 2) * 0.93
  const position = CRYSTAL_SIZE / 2 - shapeSize / 2
  const strokeColor = getRandomFromPalette()

  noFill()
  stroke(strokeColor)
  strokeWeight(1)
  push()
  translate(width / 2, height / 2)
  for (let i = 0; i <= numShapes; i++) {
    ellipse(position, 0, shapeSize, shapeSize)
    rotate(angle)
  }
  pop()
}

function simpleLines() {
  const stepsOut = 8
  const numSteps = randomSelectTwo() ? stepsOut : int(stepsOut * 1.25)
  const step = CRYSTAL_SIZE / 2 / numSteps
  const start = floor(random(0, numSteps))
  const stop = floor(random(start, numSteps + 1))

  const numShapes = randomSelectTwo() ? SIDES : SIDES * 2
  const strokeColor = getRandomFromPalette()
  const weight = randomSelectTwo() ? 3 : 1
  const angle = 360 / numShapes

  noFill()
  stroke(strokeColor)
  strokeWeight(weight)
  push()
  translate(width / 2, height / 2)
  for (let i = 0; i < numShapes; i++) {
    line(start * step, 0, stop * step, 0)
    rotate(angle)
  }
  pop()
}

function outlineShape() {
  const strokeColor = getRandomFromPalette()
  const weight = randomSelectTwo() ? 3 : 1
  const drawHexagon = randomSelectTwo()

  stroke(strokeColor)
  strokeWeight(weight)
  push()
  translate(width / 2, height / 2)
  if (drawHexagon) {
    hexagon(0, 0, CRYSTAL_SIZE / 2)
  } else {
    ellipse(0, 0, CRYSTAL_SIZE, CRYSTAL_SIZE)
  }
  pop()
}

function testLines() {
  // strokeWeight(3)
  const strokeColor = getRandomFromPalette()
  const numShapes = randomSelectTwo() ? SIDES : SIDES * 2

  noFill()
  push()
  stroke(PALETTE[0])
  translate(width / 2, height / 2)
  ellipse(0, 0, CRYSTAL_SIZE, CRYSTAL_SIZE)
  stroke(strokeColor)
  const angle = 360 / numShapes
  for (let i = 0; i < numShapes; i++) {
    line(0, 0, CRYSTAL_SIZE / 2, 0)
    rotate(angle)
  }
  pop()
}

function randomSelectTwo() {
  return random(1) > 0.5
}

function getRandomFromPalette() {
  const rando2 = floor(random(0, PALETTE.length))
  return PALETTE[rando2]
}
