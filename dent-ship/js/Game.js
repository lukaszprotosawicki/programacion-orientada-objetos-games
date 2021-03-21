import { Dentship } from "./Dentship.js";
import { Enemy } from "./Enemy.js";

class Game {
  #htmlElements = {
    spaceship: document.querySelector("[data-spaceship"),
    container: document.querySelector("[data-container"),
  };
  #ship = new Dentship(
    this.#htmlElements.spaceship,
    this.#htmlElements.container
  );
  #enemies = [];
  #enemiesInterval = null;
  #checkPositionInterval = null;
  #createEnemyInterval = null;

  init() {
    this.#ship.init();
    this.#newGame();
  }
  #newGame() {
    this.#enemiesInterval = 20;
    this.#createEnemyInterval = setInterval(() => this.#randomNewEnemy(), 1000);
    this.#checkPositionInterval = setInterval(() => this.#checkPosition(), 1);
  }

  #randomNewEnemy() {
    const randomNumber = Math.floor(Math.random() * 5) + 1;
    randomNumber % 5
      ? this.#createNewEnemy(
          this.#htmlElements.container,
          this.#enemiesInterval,
          "enemy"
        )
      : this.#createNewEnemy(
          this.#htmlElements.container,
          this.#enemiesInterval * 2,
          "enemy--big",
          3
        );
  }

  #createNewEnemy(...params) {
    const enemy = new Enemy(...params);
    enemy.init();
    this.#enemies.push(enemy);
  }

  #checkPosition() {
    this.#enemies.forEach((enemy, enemyIndex, enemiesArr) => {
      const enemyPosition = {
        top: enemy.element.offsetTop,
        right: enemy.element.offsetLeft + enemy.element.offsetWidth,
        bottom: enemy.element.offsetTop + enemy.element.offsetHeight,
        left: enemy.element.offsetLeft,
      };
      if (enemyPosition.top > window.innerHeight) {
        enemy.remove();
        enemiesArr.splice(enemyIndex, 1);
      }
    });
  }
}

window.onload = function () {
  const game = new Game();
  game.init();
};
