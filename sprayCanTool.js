function SprayCanTool() {
    //set an icon and a name for the object
    this.icon = "assets/sprayCan.jpg";
    this.name = "sprayCan";

    // set a number of points and a spread for the object
    this.points = 13;
    this.spread = 10;

    this.draw = function() {
        //if the mouse is pressed paint on the canvas
        //spread describes how far to spread the paint from the mouse pointer
        //points holds how many pixels of paint for each mouse press.
        if (mouseIsPressed) {
            for (var i = 0; i < this.points; i++) {
                point(random(mouseX - this.spread, mouseX + this.spread), random(mouseY - this.spread, mouseY + this.spread));
            }
        }
    }
}
