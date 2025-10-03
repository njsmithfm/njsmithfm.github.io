class Letter {
    constructor(x, y) {
      this.alphabets = [`you want to hire NJ Smith`];
      this.letter = random(this.alphabets);
      this.f = fonts;
      this.size = random(5,15);
      
      this.x = x;
      this.y = y
      this.dx = random(-5, 5);
      this.dy = random(-5, 5);
      
      this.angle = random(360);
      this.angleV = random(1, 1);
    }
    
    update() {
      this.x += this.dx;
      this.y += this.dy;
      
      this.angle += this.angleV;
      
    }
    
    display() {
      push();
      translate(this.x, this.y);
      rotate(this.angle);
      textFont(this.f);
      textSize(this.size);
      text(this.letter, 0, 0);
      pop();
    }
    
    offScreen() {
      let margin = this.size * 5;
      if (this.x > width + margin  || this.x < 0 - margin || this.y > height + margin || this.y < 0 - margin) {
        return true;
      } else {
        return false;
      }
    }
  }