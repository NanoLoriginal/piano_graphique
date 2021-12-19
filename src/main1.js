let gameConfig = {
    type: Phaser.AUTO,
    width: 960,
    height: 540,
    backgroundColor: '#ffffff',
    parent: 'game',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    },
    scene: new tableau()
};
let game = new Phaser.Game(gameConfig);
