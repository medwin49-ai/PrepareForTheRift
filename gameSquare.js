class gameRect {
    constructor() {
        this.x = 100;
        this.y = 200;

        this.show = function(){
           let c = color(70,25,25);
           fill(c);
           noStroke();
            rect(this.x, this.y, 1700, 600);
            
        };

    }
}