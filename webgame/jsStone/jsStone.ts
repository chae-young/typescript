// interface Card {
//     att: number;
//     hp: number,
//     cost: number,
// }

interface Player{
    hero: HTMLDivElement
    deck: HTMLDivElement
    field: HTMLDivElement
    cost: HTMLDivElement
    deckData: Card[]
    heroData?: Card[] | null
    fieldData?: Card[]
    chosenCard?: HTMLDivElement | null
    chosenCardData?: Card[] | null
}

const opponent: Player = {
    hero: document.getElementById('rival-hero') as HTMLDivElement, //타입 좁혀주기 ts는 인식못함 
    deck: document.getElementById('rival-deck') as HTMLDivElement,
    field: document.getElementById('rival-cards') as HTMLDivElement,
    cost: document.getElementById('rival-cost') as HTMLDivElement,
    deckData: [],
    heroData: null,
    fieldData: [],
    chosenCard: null,
    chosenCardData: null,
}
interface ICard {
    att:number,
    hp:number,
   
}
class Card {
    public att: number;
    public hp: number;
    private cost?: number;
    private mine?: boolean;
    constructor(hero:boolean, mine:boolean){
        if(hero){
            return new Hero(mine)
        }else{
            this.att = Math.ceil(Math.random() * 5);
            this.hp = Math.ceil(Math.random() * 5);
            this.cost = Math.floor((this.att + this.hp) / 2);
        }
        if(mine){
            this.mine = true;
        }
    }
}
new Card(true,false)

class Hero extends Card{
    private hero: boolean;
    private field: boolean;
    constructor(mine){
        super(true,mine)
        this.att = Math.ceil(Math.random() * 5);
        this.hp = Math.ceil(Math.random() * 5) + 25;
        this.hero = true;
        this.field = true;
    }
}

