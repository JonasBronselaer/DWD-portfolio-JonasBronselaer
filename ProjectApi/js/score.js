class Score {

	// bepaal x coordinaat als parameter, bepaal afmetingen van text en zet inhoud op 0
	constructor(x) {
		this.x = x;
		this.width = 60;
        this.height = 40;
		this.y = this.height;
		this.currentScore = 0;
	}

	// vul constructor informatie in om volwaardige tekst te bekomen met bepaalde textgrootte
	show() {
		textSize(40);
        text(this.currentScore, this.x, this.y, this.width, this.height); //neemt waarden constructor voor text
    }
}
