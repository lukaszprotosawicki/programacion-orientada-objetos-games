class Game {
  constructor({ lettersWrapper, categoryWrapper, wordWrapper, outpuWrapper }) {
    this.lettersWrapper = lettersWrapper;
    this.categoryWrapper = categoryWrapper;
    this.wordWrapper = wordWrapper;
    this.outpuWrapper = outpuWrapper;
  }

  guess(letter) {
    console.log(letter);
  }
  start() {
    for (let i = 0; i < 26; i++) {
      const label = (i + 10).toString(36);
      const button = document.createElement("button");
      button.innerHTML = label;
      button.addEventListener("click", () => this.guess(label));
      this.lettersWrapper.appendChild(button);
    }
  }
}
