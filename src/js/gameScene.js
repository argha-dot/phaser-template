import playerImg from "url:../assets/player.png";


class GameScene extends Phaser.Scene {
    constructor() {
        super({ key: "GameScene" });
    }

    preload() {
        this.load.image("player", playerImg);
    }

    create() {
        this.add.image(this.game.config.width / 2, this.game.config.height / 2, "player").setScale(0.5, 0.5);
        this.add.text(10, 10, "HELLO WORLD");
    }

    update() {

    }

}


export { GameScene }