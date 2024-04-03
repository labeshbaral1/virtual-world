class Animal extends Marking {
    constructor(center, directionVector, width, height) {
        super(center, directionVector, width, height);

        this.borders = [this.poly.segments[0], this.poly.segments[2]];
        this.type = "animal"; 
    }

    draw(ctx) {
        // Define the font size based on the width of the marking
        const fontSize = this.width / 2; // Adjust the divisor to scale the emoji size
        ctx.font = `${fontSize}px serif`; // Set the font size and family
        ctx.textAlign = 'center'; // Align text horizontally center
        ctx.textBaseline = 'middle'; // Align text vertically center

        // Draw the cat emoji
        ctx.fillText("🐈‍⬛", this.center.x, this.center.y);

     

    }
}
