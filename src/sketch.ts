// -------------------
//  Parameters and UI
// -------------------

let pg: p5.Graphics

const gui = new dat.GUI()
const params = {
    Ellipse_Size: 30,
    Download_Image: () => save(),
}
gui.add(params, "Ellipse_Size", 0, 100, 1)
gui.add(params, "Download_Image")

// -------------------
//       Drawing
// -------------------

function draw() {
    // Any random drawing code
    randomSeed(0)
    background(0,255, 2)
    for (let i = 0; i < 100; ++i) {
        fill(random(255), random(255), random(255))
        ellipse(random(width), random(height), 100)
    }
    // Create the mask
    pg.background(255)
    pg.noStroke()
    pg.fill(0)
    // Do your triangles here
    pg.triangle(100, 100, 500, 300, 800, 100)
    // Apply the mask
    blendMode(ADD)
    image(pg, 0, 0, width, height)
    blendMode(BLEND)
}

// -------------------
//    Initialization
// -------------------

function setup() {
    p6_CreateCanvas()
    pg = createGraphics(width, height)
}

function windowResized() {
    p6_ResizeCanvas()
    pg.resizeCanvas(width, height)
}