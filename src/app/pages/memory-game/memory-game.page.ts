import { Component, OnInit } from "@angular/core";

class Card {
  private image: string;
  private revealed: boolean;
  private static BASE_PATH = "/assets/imgs/";
  private frozen: boolean = false;

  constructor(image: string) {
    this.image = image;
    this.revealed = false;
  }

  public getImageURL() {
    if (this.revealed) {
      return Card.BASE_PATH + "cards/" + this.image;
    } else {
      return Card.BASE_PATH + "question-mark.png";
    }
  }

  public isSame(anotherCard: Card) {
    return this.image == anotherCard.getImage();
  }

  public getImage() {
    return this.image;
  }

  public isFrozen() {
    return this.frozen;
  }

  public freeze() {
    this.frozen = true;
    this.reveal();
  }

  public reveal() {
    this.revealed = true;
    if (!this.frozen) {
      setTimeout(() => {
        this.revealed = false;
      }, 500);
    }
  }
}

@Component({
  selector: "app-memory-game",
  templateUrl: "./memory-game.page.html",
  styleUrls: ["./memory-game.page.scss"],
})
export class MemoryGamePage implements OnInit {
  public cardDeck: Array<Card> = [];
  public numberOfUniqueCards = 2;
  public score = 0;

  private previousCard: Card;
  private previousCardIndex: number;

  constructor() {}

  /**
   * Génération de la pile de carte
   */
  private generateDeck() {
    for (let i = 0; i < this.numberOfUniqueCards; i++) {
      //Génération d'une paire de cartes identiques
      this.cardDeck.push(new Card(i + ".png"));
      this.cardDeck.push(new Card(i + ".png"));
    }
    // Mélange des cartes
    this.shuffleCards();
  }

  private shuffleCards() {
    //Boucle sur toutes les cartes
    for (let pos in this.cardDeck) {
      //Choix d'un position aléatoire au sein du jeu de carte
      let randomPos = Math.floor(Math.random() * this.cardDeck.length);
      //Permutation des positions
      let tmp = this.cardDeck[pos];
      this.cardDeck[pos] = this.cardDeck[randomPos];
      this.cardDeck[randomPos] = tmp;
    }
  }

  ngOnInit() {
    this.generateDeck();
    console.log(this.cardDeck);
  }

  public cardClick(card, pos) {
    if (card.isFrozen()) {
      //Ne rien faire
    } else if (
      this.previousCard &&
      this.previousCardIndex != pos &&
      card.isSame(this.previousCard)
    ) {
      card.freeze();
      this.previousCard.freeze();
      this.score++;
    } else {
      this.previousCard = card;
      this.previousCardIndex = pos;
      card.reveal();
    }
  }

  public playAgain() {
    this.cardDeck = [];
    this.generateDeck();
    this.score = 0;
    this.previousCard = null;
    this.previousCardIndex = null;
  }
}
