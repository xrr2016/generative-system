const SIDES = 6
const CRYSTAL_SIZE = 500

let PALETTE = []

function getRandomFromPalette() {
  const rando2 = floor(random(0, PALETTE.length))
  return PALETTE[rando2]
}

function setup() {
  PALETTE = [color(200, 52, 154), color(4, 0, 152)]
  createCanvas(600, 600)
  noLoop()
  rectMode(CENTER)
  angleMode(DEGREES)
}

function draw() {
  const crystal = new Crystal(width / 2, height / 2)

  crystal.render()
}
