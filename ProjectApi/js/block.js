class Block {
 
    //constructor voor blok stelt display waarden vast maar tekent geen blok
    constructor(x) {
        this.x = x;
        this.width = 25;   // tweede afmeting voor rectangle
        this.height = 110; // grootte wordt meegegeven aan rectangle
        this.y = height / 2.5; // height is grootte van canvas waarin het zich zal bevinden
        this.ascend = false;
        this.descend = false;
        
    }
     
    //functie voor het tekenen van een figuur gebasseerd op waarden van constructor
    show() {
        fill(235, 160, 125); //vult blok in met kleur
        rect(this.x, this.y, this.width, this.height, 5); //neemt waarden van constructor voor tekenen + zelfgekozen afronding
    }


    // Bepaald mogelijke bewegingen van blok
    GoUp() {
        if (this.y > 10) {
            this.y -= 2.5; //2.5
        }
    }
     
    // eerste height in if is afkomstig van grootte gekleurd canvas
    // waarden y coordinaat lijken omgekeerd omdat y coodinaten van canvas omgekeerd tellen
    GoDown() {
        if (this.y < height - this.height - 10) {
            this.y += 2.5;
        }
    }

    // zet blok bewegingen aan gebasseerd op bools and keys in hoofdscripts
    updateStatus() {
        if (this.ascend) {
            this.GoUp();
        } 
        else if (this.descend) {
            this.GoDown();
        }
    }

}