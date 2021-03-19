import { Quote } from "./Quotes.js";

class Game {
  currentStep = 0;
  lastStep = 7;
  quotes = [
    {
      text: "quiero ser odontologo",
      category: "frase dental",
    },
    {
      text: "diente que nace torcido el ortodoncista lo endereza",
      category: "frase dental",
    },
    {
      text: "tienes una cita conmigo tu odontologo",
      category: "frase dental",
    },
    {
      text: "una sonrisa se mantiene con amor magia y odontologia",
      category: "frase dental",
    },
    {
      text: "tu sonrisa lo cura todo",
      category: "frase dental",
    },
  ];
  constructor({ lettersWrapper, categoryWrapper, wordWrapper, outpuWrapper }) {
    this.lettersWrapper = lettersWrapper;
    this.categoryWrapper = categoryWrapper;
    this.wordWrapper = wordWrapper;
    this.outpuWrapper = outpuWrapper;

    const { text, category } = this.quotes[
      Math.floor(Math.random() * this.quotes.length)
    ];
    this.categoryWrapper.innerHTML = category;
    this.quote = new Quote(text);
  }

  guess(letter, event) {
    event.target.disabled = true;
    if (this.quote.quess(letter)) {
      this.drawQuote();
    } else {
      this.currentStep++;
      document.getElementsByClassName("step")[
        this.currentStep
      ].style.opacity = 1;
      if (this.currentStep == this.lastStep) {
        this.loosing();
      }
    }
  }

  drawLetters() {
    for (let i = 0; i < 26; i++) {
      const label = (i + 10).toString(36);
      const button = document.createElement("button");
      button.innerHTML = label;
      button.addEventListener("click", (event) => this.guess(label, event));
      this.lettersWrapper.appendChild(button);
    }
  }

  drawQuote() {
    const content = this.quote.getContent();
    this.wordWrapper.innerHTML = content;
    if (!content.includes("_")) {
      this.winning();
    }
  }
  start() {
    document.getElementsByClassName("step")[this.currentStep].style.opacity = 1;
    this.drawLetters();
    this.drawQuote();
  }
  winning() {
    this.wordWrapper.innerHTML = "Enhorabuena! has ganado!";
    this.lettersWrapper.innerHTML = "";
  }

  loosing() {
    this.wordWrapper.innerHTML = "Buuu! Has perdido!!!";
    this.lettersWrapper.innerHTML = "";
  }
}
const game = new Game({
  lettersWrapper: document.getElementById("letters"),
  categoryWrapper: document.getElementById("category"),
  wordWrapper: document.getElementById("word"),
  outpuWrapper: document.getElementById("output"),
});
game.start();
