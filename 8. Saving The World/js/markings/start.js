class Start extends Marking {
   constructor(center, directionVector, width, height, occupancy = 1) {
      super(center, directionVector, width, height);

      this.img = new Image();
      this.img.src = "car.png";
      this.type = "start";
      this.occupancy = occupancy;
   }

   draw(ctx) {
      ctx.save();
      ctx.translate(this.center.x, this.center.y);
      ctx.rotate(angle(this.directionVector) - Math.PI / 2);

      ctx.drawImage(this.img, -this.img.width / 2, -this.img.height / 2);

      // Draw occupancy indicator
      //[TODO]: make it dynamic 
      // in the sense it shows different # for each car
      // update other files with the logic
      
      ctx.fillStyle = "black";
      ctx.font = "bold 16px Arial";
      ctx.fillText(`  ${this.occupancy}`, -this.img.width / 2, -this.img.height / 2 - 10);

      ctx.restore();
   }
}
