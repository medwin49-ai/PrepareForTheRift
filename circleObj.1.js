class circleObj {
    constructor() {
        this.y = random(maxCanvas.height);
        this.x = random(maxCanvas.width);
this.show = function () {
            color(255,204,0)
           
            circle(this.x, this.y, 20);
        };

    }
}
