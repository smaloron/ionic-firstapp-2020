import { Component, OnInit } from "@angular/core";
import { ToastController } from "@ionic/angular";

@Component({
  selector: "app-animals",
  templateUrl: "./animals.page.html",
  styleUrls: ["./animals.page.scss"],
})
export class AnimalsPage implements OnInit {
  public animals = [
    {
      title: "Vache",
      image: "img/animals/cow-icon.png",
      desc: "Meugle",
      file: "/sounds/cow.mp3",
      playing: false,
    },
    {
      title: "Dauphin",
      image: "img/animals/dolphin-icon.png",
      desc: "Siffle",
      file: "/sounds/dolphin.mp3",
      playing: false,
    },
    {
      title: "Grenouille",
      image: "img/animals/frog-icon.png",
      desc: "Coasse",
      file: "/sounds/frog.mp3",
      playing: false,
    },
    {
      title: "Oiseau",
      image: "img/animals/bird-icon.png",
      desc: "Chante",
      file: "/sounds/bird.mp3",
      playing: false,
    },
    {
      title: "Cochon",
      image: "img/animals/pig-icon.png",
      desc: "Grogne",
      file: "/sounds/pig.mp3",
      playing: false,
    },
    {
      title: "Chien",
      image: "img/animals/puppy-icon.png",
      desc: "Aboie",
      file: "/sounds/dog.mp3",
      playing: false,
    },
    {
      title: "Chat",
      image: "img/animals/black-cat-icon.png",
      desc: "Miaule",
      file: "/sounds/cat.mp3",
      playing: false,
    },
    {
      title: "Cheval",
      image: "img/animals/horse-icon.png",
      desc: "Hennit",
      file: "/sounds/horse.wav",
      playing: false,
    },
    {
      title: "Ane",
      image: "img/animals/donkey-icon.png",
      desc: "Brait",
      file: "/sounds/donkey.wav",
      playing: false,
    },
  ];

  public currentAnimalIndex;

  public media: HTMLAudioElement;

  public reorderDisabled = true;

  constructor(private toastCtrl: ToastController) {}

  ngOnInit() {}

  play() {
    //choix aléatoire d'un animal
    if (!this.currentAnimalIndex) {
      this.currentAnimalIndex = Math.floor(Math.random() * this.animals.length);
    }

    let animal = this.animals[this.currentAnimalIndex];

    //mise en pause si le son se joue déjà
    if (this.media && this.media.currentTime > 0) {
      this.media.pause();
    }

    //Lecture du son
    this.media = new Audio("/assets" + animal.file);
    this.media.load();
    this.media.play();
    animal.playing = true;

    //Masquage de la note de musique à la fin du son
    this.media.ontimeupdate = (even) => {
      if (this.media.ended) {
        animal.playing = false;
      }
    };
  }

  guessAnimal(animalPos) {
    console.log(animalPos);
    console.log(this.currentAnimalIndex);
    let message;
    if (!this.currentAnimalIndex) {
      message = "Tu dois d'abord cliquer sur JOUER";
    } else if (this.currentAnimalIndex == animalPos) {
      message = "Bravo tu as gagné";
      this.media = null;
      this.currentAnimalIndex = null;
    } else {
      message = "Essaie encore";
    }

    this.showResult(message);
  }

  async showResult(message) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 1000,
      position: "middle",
    });

    toast.present();
  }

  reorderAnimal(ev) {
    ev.detail.complete();
  }

  deleteAnimal(pos) {
    let title = this.animals[this.currentAnimalIndex].title;

    this.animals.splice(pos, 1);

    if (pos == this.currentAnimalIndex) {
      this.currentAnimalIndex = null;
      this.media = null;
    } else {
      this.currentAnimalIndex = this.animals.findIndex((item) => {
        console.log(item.title + "=" + title);
        return item.title == title;
      });
    }
  }
}
