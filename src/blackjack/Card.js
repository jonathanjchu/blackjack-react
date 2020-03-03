import {CARDNAMES, SUITS, CARDVALUES} from './CardConsts';

class Card {
    constructor(suit, number) {
        this.suit = suit;
        this.value = number;
        this.strValue = CARDNAMES[number];
        this.imgName = (this.suit[0] + CARDVALUES[this.value]).toLowerCase();
    }

    show() {
        console.log(`${this.strValue} of ${this.suit}`);
    }

    getImgName() {
        return this.imgName;
    }

    getStrValue() {
        return this.strValue;
    }

    // get numerical value
    getValue() {
        return this.value;
    }
}

export default Card;