function setup() {
  createCanvas(500, 500, SVG)
  background('teal')
  noLoop()
  rectMode(CENTER)
  angleMode(DEGREES)
}

function draw() {
  fill(0)

  push()
  translate(width / 2, height / 2)
  rotate(45)
  rect(0, 0, 50, 50)
  pop()

  fill('red')
  rect(0, 0, 50, 50)
}
