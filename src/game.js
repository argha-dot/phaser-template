//@ts-check
import Phaser from 'phaser';
import { GameScene } from './js/gameScene';



const config = {
    type: Phaser.AUTO,
    parent: "game-window",
    width: 400,
    height: 300,
    scene: GameScene,
    physics: {
        default: "arcade"
    }
}

window.onload = () => {
    new Phaser.Game(config);
}