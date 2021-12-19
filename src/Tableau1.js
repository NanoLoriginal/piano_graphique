let cursors;
let dude;
var platforms;
var cochons;
var stars;

function collectStar (dude, star)
{
    star.disableBody(true, true);
}

function spawnCochon(){
    cochons.create(Phaser.Math.Between(0,600),400, 'cochon1').setScale(0.5,0.5).refreshBody();
}


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
        this.load.image('epee1','assets/png/epee1.png')
    }


    create(){




        this.bgcontainer = this.add.container(0,0);

        let bglandscape1 = this.add.image(0,0,'land1').setOrigin(0,0);
        this.bgcontainer.add(bglandscape1);
        bglandscape1.setScale(0.9,0.9)



        this.gcontainer =this.add.container(0,0);
        //let gcochon1 = this.add.image(100,150,'cochon1').setOrigin(0,0);
        dude = this.physics.add.image(200,150,'steve1').setOrigin(0,0);


        let gEpee = this.add.image(100,100,'epee1').setOrigin(0,0);
        this.gcontainer.add(gEpee)



        dude.setBounce(0,0.2);
        dude.setCollideWorldBounds(true);
        dude.body.setGravityY(300);

        cursors = this.input.keyboard.createCursorKeys()

        //this.gcontainer.add(gcochon1);
        this.gcontainer.add(dude);

        gEpee.setScale(0.1,0.1);
        dude.setScale(0.5,0.5);

        //gcochon1.setScale(0.5,0.5);



        cochons = this.physics.add.staticGroup();


        platforms = this.physics.add.staticGroup();
        platforms.create(500,570, 'platform1').setScale(2.5).refreshBody();




        this.speed=0;
        //initialise ce qui se passe avec le clavier
        this.initKeyboard();

        // Définit l'espace de déplacement de la caméra
        this.cameras.main.setBounds(0, 0, 2000, 540);
        //définit à quelles vitesse se déplacent nos différents plans
        stars = this.physics.add.group({
            key: 'star',
            repeat: 11,
            setXY: { x: 12, y: 0, stepX: 70 }
        });

        stars.children.iterate(function (child) {

            child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));

        });
        this.physics.add.collider(stars, platforms);
        this.physics.add.overlap(dude, stars, collectStar, null, this);
        this.physics.add.collider(dude, platforms);
        console.log(cursors)
    }





    initKeyboard(){
        let me = this
        this.input.keyboard.on('keydown', function(kevent)
        {
            switch (kevent.keyCode)
            {
                case Phaser.Input.Keyboard.KeyCodes.RIGHT:
                    dude.setVelocityX(100);
                    dude.setFlipX(1);
                    spawnCochon()

                    break;
                case Phaser.Input.Keyboard.KeyCodes.LEFT:
                    dude.setVelocityX(-100)
                    dude.setFlipX(0);
                    unspawnCochon()


                    break;
            }
        });
        this.input.keyboard.on('keyup', function(kevent)
        {
            switch (kevent.keyCode)
            {
                case Phaser.Input.Keyboard.KeyCodes.RIGHT:
                    dude.setVelocityX(0);



                    break;
                case Phaser.Input.Keyboard.KeyCodes.LEFT:
                    dude.setVelocityX(0);
                    break;
            }
        });
    }

    update(){
        dude.setVelocityX(0);

        //déplacement de la caméra
        //this.cameras.main.scrollX+=this.speed; // on aurait pu écrire : this.cameras.main.scrollX= this.cameras.main.scrollX + this.speed;
        if (cursors.up.isDown){
            dude.setVelocityY(-300)

        }
        if (cursors.right.isDown){
            dude.setVelocityX(200)


        }
        if (cursors.left.isDown){
            dude.setVelocityX(-200)

        }



    }
}
