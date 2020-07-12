const chunk = document.getElementById('chunk')
const context = chunk.getContext('2d')
context.canvas.width = WINDOW_WIDTH
context.canvas.height = WINDOW_HEIGHT
var noiseGenerator = new NoiseGenerator(SEED)
var camera = new Camera({x: CAMERA_POS_X, z: CAMERA_POS_Z})
var renderer = new Renderer()
var app = new Application(renderer, noiseGenerator, camera)
app.runLoop()