/**
 * ALGO: ceci est une classe...
 * Vous verrez ça plus tard en détail avec Rémi, pour l'instant on n'a pas trop besoin de savoir à quoi ça sert.
 */
class Tableau1 extends Phaser.Scene{
    /**
     * Précharge les assets
     */
    preload(){
        //bg 2 (tout au fond et très flou)
        this.load.image('bg2-terrain-2', 'assets/level/background-2/bg2-terrain-2.png');
        this.load.image('bg2-terrain-4', 'assets/level/background-2/bg2-terrain-4.png');
        this.load.image('bg2-tree-2', 'assets/level/background-2/bg2-tree-2.png');
        this.load.image('bg2-tree-1', 'assets/level/background-2/bg2-tree-1.png');
        this.load.image('bg2-terrain-1','assets/level/background-2/bg2-terrain-1.png');
        this.load.image('bg2-tree-3','assets/level/background-2/bg2-tree-3.png');


        //bg 1 (gris légèrement flou)
        this.load.image('bg1-terrain-3', 'assets/level/background-1/bg-terrain-3.png');
        this.load.image('bg1-tree-3','assets/level/background-1/bg-tree-3.png');
        this.load.image('bg1-tree-1','assets/level/background-1/bg-tree-1.png');
        this.load.image('bg1-tree-2','assets/level/background-1/bg-tree-2.png');
        this.load.image('bg1-terrain-1','assets/level/background-1/bg-terrain-1.png');
        this.load.image('bg1-terrain-4','assets/level/background-1/bg-terrain-4.png');
        this.load.image('bg1-pont','assets/level/background-1/bg-wooden-bridge.png');

        //ground (premier plan noir)
        this.load.image('gMid', 'assets/level/ground/g-mid.png');
        this.load.image('gRight', 'assets/level/ground/g-right.png');
        this.load.image('gTree1', 'assets/level/ground/g-tree-1.png');
        this.load.image('gTree2', 'assets/level/ground/g-tree-2.png');
        this.load.image('gStone1', 'assets/level/ground/g-stone-1.png');
        this.load.image('gMushroom1', 'assets/level/ground/g-mushroom1.png');
        this.load.image('gLiane1', 'assets/level/ground/g-vine-a.png');
        this.load.image('gLiane2', 'assets/level/ground/g-vine-b.png');
        this.load.image('gLiane3', 'assets/level/ground/g-vine-c.png');

        this.load.image('gMid', 'assets/level/ground/g-mid.png');
        this.load.image('gRight', 'assets/level/ground/g-right.png');
        this.load.image('gLeft', 'assets/level/ground/g-left.png');
        this.load.image('gMush1','assets/level/ground/g-mushroom1.png');
        this.load.image('gBridge','assets/level/ground/g-wooden-bridge.png');
        this.load.image('gBox2','assets/level/ground/g-box-2.png')
        this.load.image('gBox','assets/level/ground/g-box-1.png')

        this.load.image('gWater','assets/level/ground/g-water.png');
        this.load.image('gSpike-1','assets/level/ground/g-spike-1.png');
        this.load.image('gSpike-2','assets/level/ground/g-spike-2.png');
        this.load.image('gStone-4', 'assets/level/ground/g-stone-4.png');
        this.load.image('gStone-2', 'assets/level/ground/g-stone-2.png');
        this.load.image('gWater','assets/level/ground/g-water.png');

        this.load.image('gGrass4', 'assets/level/ground/g-grass-4.png');
        this.load.image('gGrass1', 'assets/level/ground/g-grass-1.png');
        this.load.image('gGrass2', 'assets/level/ground/g-grass-2.png');
        this.load.image('gGrass3', 'assets/level/ground/g-grass-3.png');
        this.load.image('gGrass5', 'assets/level/ground/g-grass-5.png');
        this.load.image('gFellen1', 'assets/level/ground/g-fellen-tree-1.png');
        this.load.image('zombie1', 'assets/level/zombies/z1.png');
        this.load.image('zombie2', 'assets/level/zombies/z4.png');
        this.load.image('zombie3', 'assets/level/zombies/z12.png');



        //au lieu d'écrire 5 lignes quasi identiques, on charge l'herbe avec une boucle
        // ALGO : ceci est une boucle
        for(let i=1;i<=5;i++){
            this.load.image('g-grass-'+i, 'assets/level/ground/g-grass-'+i+'.png');
        }

        //filtre film TODO élève : faire une boucle à la place des 3 lignes qui suivent


        for(let i=1;i<=3;i++){
            this.load.image('filterFilm'+i, 'assets/level/filters/film/frame-'+i+'.png');
        }
        for(let i=1;i<=3;i++){
            this.load.image('filterBloody'+i, 'assets/level/filters/bloody/frame'+i+'.png');
        }
        for(let i=1;i<=3;i++){
            this.load.image('filterWeather'+i, 'assets/level/weather/rain/frame'+i+'.png');
        }


        //texture au fond  TODO élève : faire une boucle pour charger les 3 images et démontrer par la même que vous savez aller au plus simple

        for(let i=1;i<=3;i++) {
            this.load.image('bg-animation-'+i, 'assets/level/background-2/bg-animation/bg-animation-'+i+'.png');
        }

    }

    /**
     * Crée la scène
     * TODO élèves : reproduire à l'identique assets/level/00-preview-example/sample1.jpg
     * TODO élèves : plus tard, continuez le décor vers la droite en vous servant des assets mis à votre disposition
     */
    create(){
        /**
         * Fond très clair avec une trame
         * animation au dernier plan
         * @type {Phaser.GameObjects.Sprite}
         */
        this.bgAnimation = this.add.sprite(0, 0, 'bgAnimation1').setOrigin(0,0);
        //animation de 3 images
        this.anims.create({
            key: 'animation',
            frames: [
                {key:'bg-animation-1'},
                {key:'bg-animation-2'},
                {key:'bg-animation-3'},
            ],
            frameRate: 16,
            repeat: -1
        });
        this.bgAnimation.play('animation');

        //let bgAnimation1=this.add.sprite(0,0, 'bg-animation-1').setOrigin(0,0);
        //--------------background 2 (tout au fond et flou)--------------------

        /**
         * contient tous les éléments du background 2 (gris clair très flou)
         * @type {Phaser.GameObjects.Container}
         * @see https://photonstorm.github.io/phaser3-docs/Phaser.GameObjects.Container.html
         */
        this.bg2Container=this.add.container(0,0);
        /**
         * Terrain dans bg2
         * @type {Phaser.GameObjects.Image}
         */
        let bg2Terrain2 = this.add.image(-135,100, 'bg2-terrain-2').setOrigin(0,0);
        this.bg2Container.add(bg2Terrain2);
        bg2Terrain2.setScale(1, 1.1);
        let bg2Terrain1 = this.add.image(720,180, 'bg2-terrain-1').setOrigin(0,0);
        this.bg2Container.add(bg2Terrain1);
        bg2Terrain1.setScale(0.7, 0.7)
        let bg2Terrain4 = this.add.image(720,100, 'bg2-terrain-4').setOrigin(0,0);
        this.bg2Container.add(bg2Terrain4);
        bg2Terrain4.setScale(1, 1.1);




        /**
         * Arbre dans bg2
         * @type {Phaser.GameObjects.Image}
         */
        let bg2Tree2=this.add.image(430,-30, 'bg2-tree-2').setOrigin(0,0);
        this.bg2Container.add(bg2Tree2);
        bg2Tree2.setScale(0.5, 0.5);
        let bg2Tree1=this.add.image(1000,-30, 'bg2-tree-1').setOrigin(0,0);
        this.bg2Container.add(bg2Tree1);
        bg2Tree1.setScale(0.5, 0.5);
        let bg2Tree1_2=this.add.image(1400,-60, 'bg2-tree-1').setOrigin(0,0);
        this.bg2Container.add(bg2Tree1_2);
        bg2Tree1_2.setScale(0.8, 0.7);


        let bg2Tree3=this.add.image(720,-50, 'bg2-tree-3').setOrigin(0,0);
        this.bg2Container.add(bg2Tree3);
        bg2Tree3.angle=-5; //pencher l'arbre de -5 degrès
        bg2Tree3.setScale(0.6, 0.8);



        //--------------background 1 (gris) --------------------

        /**
         * contient tous les éléments du background 1 (gris)
         * @type {Phaser.GameObjects.Container}
         */
        this.bg1Container=this.add.container(0,0);
        /**
         * Terrain
         * @type {Phaser.GameObjects.Image}
         */
        let bg1Terrain3=this.add.image(-400,200, 'bg1-terrain-3').setOrigin(0,0);
        let bg1Tree3=this.add.image(170, -80,'bg1-tree-3').setOrigin(0,0);
        let bg1Tree1=this.add.image(-20, -25, 'bg1-tree-1').setOrigin(0, 0);
        let bg1Tree2=this.add.image(900, -10, 'bg1-tree-2').setOrigin(0, 0);
        let bg1Tree2_2=this.add.image(1500, -10, 'bg1-tree-2').setOrigin(0, 0);
        let bg1Tree2_3=this.add.image(1690, -10, 'bg1-tree-2').setOrigin(0, 0);
        let bg1Terrain1=this.add.image(700, 200, 'bg1-terrain-1').setOrigin(0, 0);
        let bg1Terrain4=this.add.image(400, 420, 'bg1-terrain-4').setOrigin(0, 0);
        let bg1_pont=this.add.image(1050, 200, 'bg1-pont').setOrigin(0, 0);
        let bg1Terrain1_2=this.add.image(1300, 200, 'bg1-terrain-1').setOrigin(0, 0);
        let bg1Terrain3_2=this.add.image(1350, 230, 'bg1-terrain-3').setOrigin(0, 0);


        this.bg1Container.add(bg1Terrain3);
        this.bg1Container.add(bg1Terrain3_2);
        this.bg1Container.add(bg1_pont);
        this.bg1Container.add(bg1Terrain4);
        this.bg1Container.add(bg1Tree2);
        this.bg1Container.add(bg1Tree2_2);
        this.bg1Container.add(bg1Tree2_3);
        this.bg1Container.add(bg1Tree1);
        this.bg1Container.add(bg1Terrain1);
        this.bg1Container.add(bg1Terrain1_2);
        this.bg1Container.add(bg1Tree3);
        bg1Tree1.setScale(0.6, 0.6);
        bg1Tree2.setScale(0.8, 0.8);
        bg1Tree2_2.setScale(0.6, 0.6);
        bg1Tree2_3.setScale(0.6, 0.6);
        bg1Tree3.setScale(0.6, 0.6);
        bg1Terrain1.setScale(0.7, 1);
        bg1Terrain1_2.setScale(0.7, 1);


        //-------------ground (premier plan noir)---------------------------

        /**
         * contient tous les éléments du premier plan (noir)
         * @type {Phaser.GameObjects.Container}
         */
        this.groundContainer=this.add.container(0,0);
        /**
         * Arbre
         * @type {Phaser.GameObjects.Image}
         */

        let zombie3=this.add.image(180, 130, 'zombie3').setOrigin(0, 0);
        this.groundContainer.add(zombie3);
        zombie3.setScale(1, 1.5);

        let zombie1=this.add.image(1510, 200, 'zombie1').setOrigin(0, 0);
        this.groundContainer.add(zombie1);
        zombie1.setScale(1, 0.8);

        let zombie2=this.add.image(1200, 260, 'zombie2').setOrigin(0, 0);
        this.groundContainer.add(zombie2);
        zombie2.setScale(1, 0.6);

        let vine101=this.add.image(500,-10, 'gLiane3').setOrigin(0,0);
        this.groundContainer.add(vine101);
        vine101.setScale(1,0.7);

        let vine102=this.add.image(500,20, 'gLiane1').setOrigin(0,0);
        this.groundContainer.add(vine102);
        vine102.setScale(1,0.7);
        let vine103=this.add.image(505,50, 'gLiane2').setOrigin(0,0);
        this.groundContainer.add(vine103);
        vine103.setScale(1,0.7);
        let vine104=this.add.image(505,80, 'gLiane2').setOrigin(0,0);
        this.groundContainer.add(vine104);
        vine104.setScale(1,0.7);

        let vine105=this.add.image(500,110, 'gLiane3').setOrigin(0,0);
        this.groundContainer.add(vine105);
        vine105.setScale(1,0.7);
        let vine106=this.add.image(500,140, 'gLiane1').setOrigin(0,0);
        this.groundContainer.add(vine106);
        vine106.setScale(1,0.7);
        let vine107=this.add.image(505,170, 'gLiane2').setOrigin(0,0);
        this.groundContainer.add(vine107);
        vine107.setScale(1,0.7);
        let vine201=this.add.image(550,-10, 'gLiane3').setOrigin(0,0);
        this.groundContainer.add(vine201);
        vine201.setScale(1,0.7);
        let vine202=this.add.image(550,20, 'gLiane1').setOrigin(0,0);
        this.groundContainer.add(vine202);
        vine202.setScale(1,0.7);
        let vine203=this.add.image(555,50, 'gLiane2').setOrigin(0,0);
        this.groundContainer.add(vine203);
        vine203.setScale(1,0.7);

        let vine204=this.add.image(555,80, 'gLiane2').setOrigin(0,0);
        this.groundContainer.add(vine204);
        vine204.setScale(1,0.7);

        let gWater=this.add.tileSprite(400,390,2900,300,'gWater').setOrigin(0,0);
        this.groundContainer.add(gWater);
        let tree2=this.add.image(280,400, 'gTree2').setOrigin(0,1);
        this.groundContainer.add(tree2);
        tree2.setScale(0.6, 0.7);

        let tree21=this.add.image(20, -150, 'gTree2').setOrigin(0,0);
        this.groundContainer.add(tree21);
        tree21.setScale(0.8, 1);
        tree21.setFlipX(1);
        /**
         * Caillou
         * @type {Phaser.GameObjects.Image}
         */
        let stone1=this.add.image(360, 335, 'gStone1').setOrigin(0, 0);
        this.groundContainer.add(stone1);
        stone1.setScale(1, 1.5);

        let mushroom1=this.add.image(140, 275, 'gMushroom1').setOrigin(0, 0);
        this.groundContainer.add(mushroom1);
        mushroom1.setScale(0.9, 0.9);
        mushroom1.setRotation(0.2)

        /**
         * Terrain 1
         * @type {Phaser.GameObjects.Image}
         */
        //ici on va calculer les positions
        let gMid1=this.add.image(-100,350, 'gMid').setOrigin(0,0);
        this.groundContainer.add(gMid1);
        /**
         * Terrain 2
         * @type {Phaser.GameObjects.Image}
         */
        let gMid2=this.add.image(gMid1.x+gMid1.width,350, 'gMid').setOrigin(0,0); //on rajoute 1 px pour l'exemple
        this.groundContainer.add(gMid2);
        /**
         * Terrain 3
         * @type {Phaser.GameObjects.Image}
         */
        let gMid3=this.add.image(gMid2.x+150,350, 'gRight').setOrigin(0,0);
        this.groundContainer.add(gMid3);
        /**
         * De l'herbe en textures qui se répète
         * @type {Phaser.GameObjects.TileSprite}
         */
        let grass=this.add.tileSprite(0,370,gMid3.x+gMid3.width-40,50,'g-grass-1').setOrigin(0,1)
        this.groundContainer.add(grass);
        /**
         * encore de l'herbe
         * @type {Phaser.GameObjects.TileSprite}
         */
        let grass2=this.add.tileSprite(0,370,gMid3.x+gMid3.width-40,50,'g-grass-3').setOrigin(0,1)
        this.groundContainer.add(grass2);

        let gBridge=this.add.image(400,295,'gBridge').setOrigin(0,0);
        gBridge.scale=0.8
        gBridge.angle=-1
        this.groundContainer.add(gBridge);



        let gBox2=this.add.image(500,287,'gBox2').setOrigin(0,0);
        gBox2.scale=0.6
        gBox2.angle=3
        this.groundContainer.add(gBox2);

        let gmid_d=this.add.image(850, 350, 'gMid').setOrigin(0, 0);
        let gmid_d2=this.add.image(1000, 350, 'gMid').setOrigin(0, 0);
        let gmid_d3=this.add.image(1800, 380, 'gMid').setOrigin(0, 0);
        let gleft_d=this.add.image(800, 350, 'gLeft').setOrigin(0,0);
        let gright_d=this.add.image(1150, 350, 'gRight').setOrigin(0,0);
        let gright_d2=this.add.image(1250, 350, 'gRight').setOrigin(0,0);
        this.groundContainer.add(gmid_d);
        this.groundContainer.add(gmid_d2);
        this.groundContainer.add(gmid_d3);
        this.groundContainer.add(gleft_d);
        this.groundContainer.add(gright_d);
        this.groundContainer.add(gright_d2);

        let mushroom1_2=this.add.image(140, 275, 'gMushroom1').setOrigin(0, 0);
        let mushroom1_3=this.add.image(1250, 325, 'gMushroom1').setOrigin(0, 0);

        this.groundContainer.add(mushroom1_2);
        mushroom1_2.setScale(0.9, 0.9);
        mushroom1_2.setRotation(0.2);

        this.groundContainer.add(mushroom1_3);
        mushroom1_3.setScale(0.6, 0.5);
        mushroom1_3.setRotation(-0.2);

        let gtree2_d=this.add.image(1000, -150, 'gTree2').setOrigin(0, 0);
        this.groundContainer.add(gtree2_d);
        gtree2_d.setScale(0.8,1);
        let gstone1_d=this.add.image(1000, 320, 'gStone1').setOrigin(0, 0);
        this.groundContainer.add(gstone1_d);
        gstone1_d.setScale(2.6,2.4);
        let ggrass4=this.add.image(1360, 300, 'gGrass4').setOrigin(0, 0);
        this.groundContainer.add(ggrass4);
        ggrass4.setScale(1.2,1.2);
        let gfellen1=this.add.image(1400, 270, 'gFellen1').setOrigin(0, 0);
        this.groundContainer.add(gfellen1);
        gfellen1.setScale(0.8,1);
        gfellen1.setRotation(0.1);

        let gleft_d2=this.add.image(1700, 380, 'gLeft').setOrigin(0,0);
        this.groundContainer.add(gleft_d2);
        let ggrass2=this.add.image(1200, 300, 'gGrass2').setOrigin(0, 0);
        this.groundContainer.add(ggrass2);
        ggrass2.setScale(1.2,1.2);
        let ggrass2_2=this.add.image(930, 300, 'gGrass2').setOrigin(0, 0);
        this.groundContainer.add(ggrass2_2);
        ggrass2_2.setScale(1.2,1.2);
        let gstone2=this.add.image(980, 330, 'gStone-2').setOrigin(0, 0);
        this.groundContainer.add(gstone2);
        gstone2.setScale(0.8,0.8);

        let ggrass4_2=this.add.image(980, 290, 'gGrass4').setOrigin(0, 0);
        this.groundContainer.add(ggrass4_2);
        ggrass4_2.setScale(1, 1);
        let gspike1=this.add.image(1350, 420, 'gSpike-1').setOrigin(0, 0);
        this.groundContainer.add(gspike1);
        gspike1.setScale(1, 1.5);

        let gspike2=this.add.image(1510, 400, 'gSpike-2').setOrigin(0, 0);
        this.groundContainer.add(gspike2);
        gspike2.setScale(1, 1.5);
















        /**
         * filtre type film au premier plan
         * @type {Phaser.GameObjects.Sprite}
         */
        this.filterFilm = this.add.sprite(0, 0, 'filterFilm1').setOrigin(0,0);
        //animation de 3 images
        this.anims.create({
            key: 'film',
            frames: [
                {key:'filterBloody1'},
                {key:'filterBloody2'},
                {key:'filterBloody3'},
            ],
            frameRate: 16,
            repeat: -1
        });
        this.filterFilm.play('film');

        this.filterWeather = this.add.sprite(0, 0, 'filterWeather1').setOrigin(0,0);
        //animation de 3 images
        this.anims.create({
            key: 'weather',
            frames: [
                {key:'filterWeather1'},
                {key:'filterWeather2'},
                {key:'filterWeather3'},
            ],
            frameRate: 16,
            repeat: -1
        });
        this.filterWeather.play('weather');

        //TODO élève faire une animation du même genre que filter mais pour bgAnimationA

        //gestion du parallaxe
        /**
         * Vitesse de déplacement du décor
         * @type {number}
         */
        this.speed=0;
        //initialise ce qui se passe avec le clavier
        this.initKeyboard();
        // Définit l'espace de déplacement de la caméra
        this.cameras.main.setBounds(0, 0, 2000, 540);
        //définit à quelles vitesse se déplacent nos différents plans
        this.bgAnimation.scrollFactorX=0;
        this.filterFilm.scrollFactorX=0;
        this.filterWeather.scrollFactorX=0;
        this.bg2Container.scrollFactorX=0.6;
        this.bg1Container.scrollFactorX=0.8;
        this.groundContainer.scrollFactorX=1;
    }
    /**
     * Définit ce qui se passe quand on appuie ou relache une touche du clavier
     * ALGO : ceci est une fonction ou méthode
     */
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

    /**
     * Cette fonction s'exécute en boucle (à peu près 60 fois par secondes)
     */
    update(){
        //déplacement de la caméra
        this.cameras.main.scrollX+=this.speed; // on aurait pu écrire : this.cameras.main.scrollX= this.cameras.main.scrollX + this.speed;

        //petit effet de vibrance sur le filtre film au tout premier plan
        this.filterFilm.setAlpha(Phaser.Math.Between(95,100)/100)
    }


}
