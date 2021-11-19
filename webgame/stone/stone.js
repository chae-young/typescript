/**
 * strictnullchecks를 false로 하면 hero?:Card 가 가능하다 -> Card | undefind라는 뜻
 * strictnullchecks true라면 ?를 하더라도 null이 못들어가기 때문에 null을 적어주어야한다
 * ? 는 undefind를 의미
 * 물음표와 null은 별도
 */
var Hero = /** @class */ (function () {
    function Hero(hero, mine) {
        if (hero) {
            return new Hero(mine);
        }
        else {
            this.att = Math.ceil(Math.random() * 5);
            this.hp = Math.ceil(Math.random() * 5);
            this.cost = Math.floor((this.att + this.hp) / 2);
        }
        if (mine) {
            this.mine = true;
        }
    }
    return Hero;
}());
var Sub = /** @class */ (function () {
    function Sub(hero, mine) {
        if (hero) {
            return new Hero(mine);
        }
        else {
            this.att = Math.ceil(Math.random() * 5);
            this.hp = Math.ceil(Math.random() * 5);
            this.cost = Math.floor((this.att + this.hp) / 2);
        }
        if (mine) {
            this.mine = true;
        }
    }
    return Sub;
}());
//타입스크립트는 DIV를 인식못해유
var opponent = {
    hero: document.getElementById("rival-hero"),
    deck: document.getElementById("rival-deck"),
    field: document.getElementById("rival-cards"),
    cost: document.getElementById("rival-cost"),
    deckData: [],
    heroData: null,
    fieldData: [],
    chosenCard: null,
    chosenCardData: null
};
var me = {
    hero: document.getElementById("my-hero"),
    deck: document.getElementById("my-deck"),
    field: document.getElementById("my-cards"),
    cost: document.getElementById("my-cost"),
    deckData: [],
    heroData: null,
    fieldData: [],
    chosenCard: null,
    chosenCardData: null
};
