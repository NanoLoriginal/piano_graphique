

let cursors;
let dude;
var platforms;
var cochon;
var stars;
var orbs;






function disparitionEpee(){
    epee.setPosition(-100,100)
}

function collectStar (dude, star)
{
    star.disableBody(true, true);
    this.popsound.play()
}

function collectOrbs (dude, orb)
{
    orb.disableBody(true, true);
    this.expsound.play()
}

function spawnCochon (){

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
        this.load.image('porc1','assets/png/porc.png')
        this.load.audio('pig', 'assets/png/pig.mp3')
        this.load.audio('pop', 'assets/png/pop.mp3')
        this.load.audio('exp', 'assets/png/exp.mp3')
        this.load.audio('sword', 'assets/png/sword.mp3')
    }


    create(){

        this.lettres = "spaceZQSDER".split("")
        console.log("liste des touches prises en charge...");
        console.log(this.lettres);


        this.bgcontainer = this.add.container(0,0);

        let bglandscape1 = this.add.image(0,0,'land1').setOrigin(0,0);
        this.bgcontainer.add(bglandscape1);
        bglandscape1.setScale(0.9,0.9)



        this.gcontainer =this.add.container(0,0);
        //let gcochon1 = this.add.image(100,150,'cochon1').setOrigin(0,0);

        cochon = this.physics.add.image(600,150,'cochon1').setOrigin(0,0);
        dude = this.physics.add.image(200,150,'steve1').setOrigin(0,0);

        //this.gcontainer.add(epee)
        //epee = this.add.image(100,100,'epee1').setOrigin(0.5,0.5);
        //epee.setScale(0.1,0.1);



        dude.setBounce(0,0.2);
        dude.setCollideWorldBounds(true);
        dude.body.setGravityY(300);

        cochon.setBounce(0,0.2);
        cochon.setCollideWorldBounds(true);
        cochon.body.setGravityY(300);

        cursors = this.input.keyboard.createCursorKeys()
        cursors = this.input.keyboard.addKeys('Z,Q,D,SPACE,R,E')


        //this.gcontainer.add(gcochon1);

        this.gcontainer.add(cochon);
        this.gcontainer.add(dude);


        dude.setScale(0.5,0.5);
        cochon.setScale(0.2,0.2);

        //gcochon1.setScale(0.5,0.5);





        platforms = this.physics.add.staticGroup();
        platforms.create(500,570, 'platform1').setScale(2.5).refreshBody();



        this.speed=0;
        //initialise ce qui se passe avec le clavier

        this.creerClavier();

        this.initKeyboard();
        this.creerSons();

        // Définit l'espace de déplacement de la caméra
        this.cameras.main.setBounds(0, 0, 2000, 540);
        //définit à quelles vitesse se déplacent nos différents plans

        stars = this.physics.add.group({
            key: 'porc1',
            repeat: 5,
            setXY: { x: 10, y: 0, stepX: 70 }
        });

        stars.children.iterate(function (child) {

            child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));

        });
        this.physics.add.collider(stars, platforms);
        this.physics.add.overlap(dude, stars, collectStar, null, this);






        //this.time.events.add(Phaser.Timer.SECOND + 5, disparitionEpee(),this);


        this.physics.add.collider(cochon, platforms);





        this.physics.add.collider(dude, platforms);
        console.log(cursors)
    }



    creerClavier() {
        //feedback visuel de la pression des touches
        let espacement = (this.game.config.width - 2) / this.lettres.length; // -2 c'est pour avoir une petite marge d'un pixel
        let x = 1;
        for (let lettre of this.lettres) {
            let objetGraphique = this.add.text(x, 1, lettre, {
                color: "#FFFFFF", //blanc
                align: "center",
                backgroundColor: "#345EE3", //bleu
                fixedWidth: espacement - 1  // -1 c'est pour avoir une petite marge d'un pixel entre les lettres
            });
            //position X de la rouche suivante
            x += espacement;
            //donne un nom à l'élément graphique
            objetGraphique.name = lettre;
        }
    }
    creerSons(){


        this.pigsound = this.sound.add('pig', {loop: false});
        this.pigsound.volume = 1

        this.popsound = this.sound.add('pop', {loop: false});
        this.popsound.volume = 1

        this.expsound = this.sound.add('exp', {loop: false});
        this.expsound.volume = 1

        this.swordsound = this.sound.add('sword', {loop: false});
        this.swordsound.volume = 1


    }



    initKeyboard(){
        let me = this
        this.input.keyboard.on('keydown', function(kevent)
        {
            console.log("keydown", kevent.key, kevent)
            for (let lettre of me.lettres) {
                if (kevent.key === lettre) {
                    /**
                     *
                     * @type {Phaser.GameObjects.Text}
                     */
                    let objetGraphique = me.children.getByName(lettre);
                    objetGraphique.toucheEnfoncee = true;

                }
            }
            switch (kevent.keyCode)

            {
                case Phaser.Input.Keyboard.KeyCodes.D:
                    dude.setVelocityX(100);
                    dude.setFlipX(1);
                    break;
                case Phaser.Input.Keyboard.KeyCodes.Q:
                    dude.setVelocityX(-100)
                    dude.setFlipX(0);
                    break;

                case Phaser.Input.Keyboard.KeyCodes.SPACE:



                    if (dude.x>cochon.x-50 && dude.x<cochon.x+50){
                        let mx = cochon.x
                        cochon.visible = false
                        cochon.disableBody(true)




                    }
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
        if (cursors.Z.isDown){
            dude.setVelocityY(-300)



        }
        if (cursors.D.isDown){
            dude.setVelocityX(200)


        }
        if (cursors.Q.isDown){
            dude.setVelocityX(-200)

        }
        if (cursors.SPACE.isDown ){
            this.swordsound.play()
            if (dude.x>cochon.x-50 && dude.x<cochon.x+50){
                this.pigsound.play()
                this.expsound.play()
            }

        }
        if (cursors.R.isDown){
            cochon = this.physics.add.image(600,150,'cochon1').setOrigin(0,0);
            cochon.setBounce(0,0.2);
            cochon.setCollideWorldBounds(true);
            cochon.body.setGravityY(300);
            this.gcontainer.add(cochon);
            cochon.setScale(0.2,0.2);
        }
        if (cursors.E.isDown){
            orbs = this.physics.add.group({
                key: 'bottle1',
                repeat: 0,
                setXY: { x: dude.x+60 , y: 50 , stepX: 0 }
            });

            orbs.children.iterate(function (child) {

                child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));

            });
            this.physics.add.collider(orbs, platforms);
            this.physics.add.overlap(dude, orbs, collectOrbs, null, this);

        }


    }
}
