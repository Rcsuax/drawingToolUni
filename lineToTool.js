function LineToTool(){
	this.icon = "assets/lineTo.jpg";
	this.name = "LineTo";

	var startMouseX = -1;
	var startMouseY = -1;
	var drawing = false;

	this.draw = function(){

		if(mouseIsPressed){
			if(startMouseX == -1){
                // Sets first start point for the line
				startMouseX = mouseX;
				startMouseY = mouseY;
				drawing = true;

                // We load the pixels from the display canvas into the pixels[]
                // which allows us to know what pixels we have on the canvas
				loadPixels();
			}

			else{
                // Displays a line on screen when the mouse is pressed from the inital mouse click coordinates to where the mouse pointer currently is.

                // Allows us to update the pixels on the canvas with the pixels[]
				updatePixels();
				line(startMouseX, startMouseY, mouseX, mouseY);
			}

		}

		else if(drawing){
			line(startMouseX, startMouseY, mouseX, mouseY);

            // reset state to not drawing
			drawing = false;
			startMouseX = -1;
			startMouseY = -1;
		}
	};


}
