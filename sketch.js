const SIDES = 6
const CRYSTAL_SIZE = 150

const MARGIN = CRYSTAL_SIZE / 2
const COLUMNS = 9
const ROWS = 4
const PADDING = CRYSTAL_SIZE * 0.2
const GRIDBOX = CRYSTAL_SIZE + PADDING
const START = CRYSTAL_SIZE / 2 + MARGIN

let PALETTE = []
let canvas
const ALL_CRYSTALS = []

function getRandomFromPalette() {
  const rando2 = floor(random(0, PALETTE.length))
  return PALETTE[rando2]
}

function setup() {
  const totalX = START + GRIDBOX * COLUMNS
  const totalY = START + GRIDBOX * ROWS

  noLoop()
  rectMode(CENTER)
  angleMode(DEGREES)
  canvas = createCanvas(totalX, totalY)
  PALETTE = [color(200, 52, 154), color(4, 0, 152)]
}

function draw() {
  background('white')
  reRender()
}

function reRender() {
  for (let x = 0; x < COLUMNS; x++) {
    for (let y = 0; y < ROWS; y++) {
      const posX = START + x * GRIDBOX
      const poxY = START + y * GRIDBOX

      ALL_CRYSTALS.push(new Crystal(posX, poxY))
    }
  }

  ALL_CRYSTALS.forEach((crystal) => {
    crystal.render()
  })
}

document.addEventListener('keyup', (event) => {
  if (event.code === 'Space') {
    reRender()
    // saveCanvas(canvas, 'crystals', 'jpg')
  }
})
