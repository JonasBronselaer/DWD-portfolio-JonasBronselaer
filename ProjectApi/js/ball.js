class Ball{
 
 
    constructor() {
        this.z = 30; //wordt gebruikt voor breedte en hoogte te berekenen wanneer bal getekend wordt.
        this.reset();
    }

    // z wordt als diameter gebruikt om aanraking grenzen te berekenen
    show() {
        ellipse(this.x, this.y, this.z, this.z);
    }

    reset() {
        // width en height zijn de afmetingen van het canvas 
        // door ze door 2 te delen is de oorsprong van de bal het midden van het canvas
        this.x = width/2; 
        this.y = height/2;
        
        // verplaatsing snelheid op x-as (gaat naar links by default)
        this.xVerplaatsing = 6;
         
        // random met 1 parameter geeft een nummer tussen 0 en aangegeven parameter
        let leftStart = random(2) > 1;

        // als leftstart true is wordt xVerplaatsing omgekeerd 
        // waardoor de bal naar links gaat ipv rechts, met dezelfde snelheid
        if (leftStart) {
            this.xVerplaatsing = -this.xVerplaatsing;
        } 
         
        // random getal kiezen tussen -6 en 6 (exclusief 5 bovengrens wordt niet meegetelt) berekent snelheid van verplaatsing op Y-as
        this.yVerplaatsing = random(-6, 6);
        this.yCorrectie = random(-1,1);
        if(this.yVerplaatsing == 0)
        {
            this.yVerplaatsing = this.yVerplaatsing + this.yCorrectie
        }
        if(this.yVerplaatsing > 0 && this.yVerplaatsing < 1)
        {
            this.yVerplaatsing + 1
        } else if(this.yVerplaatsing < 0 && this.yVerplaatsing > -1)
        {
            this.yVerplaatsing - 1
        }
    }
     
     
    move() {
        // als boven en onderrand worden geraakt verander van richting Y-as door y verplaatsing
        // y waarde bevindt zich niet bij bovenste van bal maar het midden waardoor Y = 0 fout is -> oplossing this.y < this.z / 2 (midden)
        // this.z is de diameter van de bal zo kan bovengrens berekend worden
        if (this.y < this.z / 2 || this.y > height - this.z / 2) {
            this.xVerplaatsing += 1;
            this.yVerplaatsing = -this.yVerplaatsing;
        } 

        // als eind van canvas bereikt wordt, gebruik reset functie
        if (this.x < this.z / 2 || this.x > width - this.z / 2) {
            this.reset();
        }
         
        // X waarde wordt geupdate met constant berekende x verplaatsing
        // y waarde wordt geupdate met constant berekende y verplaatsing
        this.x += this.xVerplaatsing;
        this.y += this.yVerplaatsing;
     
    }

    HitPlayer(controlblock) {
        let hit = new Audio('../sounds/hit.mp3');
        if (this.x - this.z / 2 <= controlblock.x + controlblock.width && this.x > controlblock.x) {
            if (this.isSameHeight(controlblock)) {
                this.xVerplaatsing = -this.xVerplaatsing;
                hit.play();
            }
        }
    }
     
    HitAi(opponentblock) {
        let hit = new Audio('../sounds/hit.mp3');
        if (this.x + this.z / 2 >= opponentblock.x && this.x <= opponentblock.x + opponentblock.width) {
            if (this.isSameHeight(opponentblock)) {
                this.xVerplaatsing = -this.xVerplaatsing;
                hit.play();
            }
        }
    }
         
    isSameHeight(block) {
        return this.y >= block.y && this.y <= block.y + block.height
    } 
}