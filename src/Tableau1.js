let cursors;
let dude;
var platforms;

class Tableau1 extends Phaser.Scene {

    /**
     * Précharge les assets
     */
    preload() {
        this.load.image('cochon1','assets/png/cochon1.png')
        this.load.image('land1','assets/png/landscape1.png')
        this.load.image('steve1','assets/png/steve1.png')
        this.load.image('trait','assets/png/trait.png')
        this.load.image('platform1','assets/png/platform.png')
    }


    create(){





        this.bgcontainer = this.add.container(0,0);

        let bglandscape1 = this.add.image(0,0,'land1').setOrigin(0,0);
        this.bgcontainer.add(bglandscape1);
        bglandscape1.setScale(0.9,0.9)



        this.gcontainer =this.add.container(0,0);
        //let gcochon1 = this.add.image(100,150,'cochon1').setOrigin(0,0);
        dude = this.physics.add.image(200,150,'steve1').setOrigin(0,0);




        dude.setBounce(0,0.2);
        dude.setCollideWorldBounds(true);
        dude.body.setGravityY(300);

        cursors = this.input.keyboard.createCursorKeys()

        //this.gcontainer.add(gcochon1);
        this.gcontainer.add(dude);


        dude.setScale(0.5,0.5);
        //gcochon1.setScale(0.5,0.5);




        platforms = this.physics.add.staticGroup();
        platforms.create(500,570, 'platform1').setScale(2.5).refreshBody();



        this.speed=0;
        //initialise ce qui se passe avec le clavier
        this.initKeyboard();
        // Définit l'espace de déplacement de la caméra
        this.cameras.main.setBounds(0, 0, 2000, 540);
        //définit à quelles vitesse se déplacent nos différents plans
        this.bgcontainer.scrollFactorX=0.6;
        this.gcontainer.scrollFactorX=1;


        console.log(cursors)
    }
    initKeyboard(){
        let me=this;
        this.input.keyboard.on('keydown', function(kevent)
        {
            switch (kevent.keyCode)
            {
                case Phaser.Input.Keyboard.KeyCodes.RIGHT:
                    me.speed=5;
                    break;
                case Phaser.Input.Keyboard.KeyCodes.LEFT:
                    me.speed=-5;
                    break;
            }
        });
        this.input.keyboard.on('keyup', function(kevent)
        {
            switch (kevent.keyCode)
            {
                case Phaser.Input.Keyboard.KeyCodes.RIGHT:
                case Phaser.Input.Keyboard.KeyCodes.LEFT:
                    me.speed=0;
                    break;
            }
        });
    }

    update(){
        dude.setVelocityX(0)
        //déplacement de la caméra
        //this.cameras.main.scrollX+=this.speed; // on aurait pu écrire : this.cameras.main.scrollX= this.cameras.main.scrollX + this.speed;
        if (cursors.up.isDown){
            dude.setVelocity(0,-300)
        }
        if (cursors.right.isDown){
            dude.setVelocityX(100)
        }
        if (cursors.left.isDown){
            dude.setVelocityX(-100)
        }



    }
}
