class Application {
    constructor(renderer, noiseGenerator, camera) {
        this.renderer = renderer
        this.camera = camera
        this.world = new World(noiseGenerator)
        this.startTime = Date.now()
        this.nbFrame = 0
        this.runLoop = this.runLoop.bind(this)
    }

    runLoop() {
        this.world.loadChunks(this.camera)
        this.world.draw(this.renderer)
        this.renderer.render(this.camera)
        requestAnimationFrame(this.runLoop)
    }
}