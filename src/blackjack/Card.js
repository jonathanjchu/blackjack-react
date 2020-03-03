import {CARDNAMES, SUITS, CARDVALUES} from './CardConsts';

class Card {
    constructor(suit, number) {
        this.suit = suit;
        this.value = number;
        this.strValue = CARDVALUES[number];
        // this.imgName = (this.suit[0] + CARDVALUES[this.value]).toLowerCase();
        this.imgName = CARDVALUES[this.value] + this.suit[0];
    }

    show() {
        console.log(`${this.strValue} of ${this.suit}`);
    }

    getImgName() {
        return this.imgName;
    }

    getStrValue() {
        // return this.strValue;
        return this.value + this.suit
    }

    // get numerical value
    getValue() {
        return this.value;
    }
}

export default Card;