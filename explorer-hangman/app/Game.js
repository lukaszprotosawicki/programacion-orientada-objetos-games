class Game {
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
    this.wordWrapper.innerHTML = text;
  }

  guess(letter) {
    console.log(letter);
  }

  drawLetters() {
    for (let i = 0; i < 26; i++) {
      const label = (i + 10).toString(36);
      const button = document.createElement("button");
      button.innerHTML = label;
      button.addEventListener("click", () => this.guess(label));
      this.lettersWrapper.appendChild(button);
    }
  }
  start() {
    this.drawLetters();
  }
}
