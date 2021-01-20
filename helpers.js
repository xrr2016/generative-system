function hexagon(posX, poxY, radius) {
  const rotAngle = 360 / 6
  beginShape()
  for (let i = 0; i < 6; i++) {
    const thisVertex = pointOnCircle(posX, poxY, radius, i * rotAngle)
    vertex(thisVertex.x, thisVertex.y)
  }
  endShape(CLOSE)
}

function pointOnCircle(posX, poxY, radius, angle) {
  const x = posX + radius * cos(angle)
  const y = poxY + radius * sin(angle)

  return createVector(x, y)
}
