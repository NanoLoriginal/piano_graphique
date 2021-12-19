

class tableau extends Phaser.Scene {


    /**
     * Précharge les assets
     */
    preload() {
        this.load.image('cochon1','assets/png/cochon1.png')

    }
    create(){
        this.gcontainer =this.add.container(0,0)


        let gcochon1 = this.add.image(100,50,'cochon1').setOrigin(0,0);
        this.gcontainer.add(gcochon1)

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

    }
}
