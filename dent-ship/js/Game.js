import { Dentship } from "./Dentship.js";

class Game {
  #htmlElements = {
    spaceship: document.querySelector("[data-spaceship"),
  };
  #ship = new Dentship(this.#htmlElements.spaceship);
  init() {
    this.#ship.init();
  }
}

window.onload = function () {
  const game = new Game();
  game.init();
};
