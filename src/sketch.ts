// -------------------
//  Parameters and UI
// -------------------

let pg: p5.Graphics
let myShader: p5.Shader

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
    // Mask background
    pg.background(200)
    pg.noStroke()
    pg.fill(0)
    // Cut a shape in the mask with triangles
    pg.shader(myShader)
    pg.triangle(100, 100, 500, 300, 800, 100)
    // Apply the mask
    image(pg, 0, 0, width, height)
}

// -------------------
//    Initialization
// -------------------

function preload() {
    myShader = loadShader("shader/myShader.vert", "shader/myShader.frag")
}

function setup() {
    p6_CreateCanvas()
    pg = createGraphics(width, height, WEBGL)
}

function windowResized() {
    p6_ResizeCanvas()
    pg.resizeCanvas(width, height)
}