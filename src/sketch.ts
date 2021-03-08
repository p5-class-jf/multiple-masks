let myShader: p5.Shader

// -------------------
//  Parameters and UI
// -------------------

const gui = new dat.GUI()
const params = {
    Blue: 0,
    Download_Image: () => save(),
}
gui.add(params, "Blue", 0, 1, 0.1)
gui.add(params, "Download_Image")

// -------------------
//       Drawing
// -------------------

function draw() {
    // Restore usual p5 coordinates
    translate(-width/2, -height/2)
    // Setup shader
    shader(myShader)
    myShader.setUniform("uAspectRatio", width / height)
    myShader.setUniform("uBlue", params.Blue)
    // Draw on the whole canvas
    noStroke()
    rect(0, 0, width, height)
}

// -------------------
//    Initialization
// -------------------

function preload() {
    myShader = loadShader("shader/myShader.vert", "shader/myShader.frag")
}

function setup() {
    p6_CreateCanvas()
}

function windowResized() {
    p6_ResizeCanvas()
}