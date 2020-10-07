class circleObj {
    constructor() {
        this.y = random(maxCanvas.height);
        this.x = random(maxCanvas.width);
        this.show = function () {
        color(random(255),random(255),random(255))   
            circle(this.x, this.y, 20);
        };

    }
}
