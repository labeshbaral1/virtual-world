class Start extends Marking {
   constructor(center, directionVector, width, height, occupancy = 1) {
      super(center, directionVector, width, height);

      this.img = new Image();
      this.img.src = "car.png";
      this.type = "start";
      this.occupancy = occupancy;
      this.blinkColor = 'red'; 



   }


   startBlinking(ctx, canvas) {
      // Save the context and canvas references
      this.ctx = ctx;
      this.canvas = canvas;

      // Initialize blinking
      setInterval(() => {
          this.blinkColor = (this.blinkColor === 'red') ? 'black' : 'red';
          // Clear the entire canvas
          this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
          // Redraw the object with the new color
          this.draw(this.ctx);
          console.log("Blinking color is ", this.blinkColor);
      }, 500); // Blink interval set to 500ms
  }

   



   draw(ctx) {
      ctx.save();
      ctx.translate(this.center.x, this.center.y);
      ctx.rotate(angle(this.directionVector) - Math.PI / 2);
      ctx.font = "bold 24px Arial";
      ctx.textAlign = "center";
      ctx.fillStyle = "red"; // Fill color
      ctx.strokeStyle = "white"; // Outline color
      ctx.lineWidth = 10; // Width of the outline
      ctx.drawImage(this.img, -this.img.width / 2, -this.img.height / 2);


      ctx.fillText(`${this.occupancy}`, (-this.img.width / 4) + 7, -this.img.height / 2 + 33);


      
      

      // Draw occupancy indicator


      ctx.restore();
   }
}



