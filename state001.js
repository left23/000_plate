// defining a single global object (myPlate) and adding some functions in to its prototype (eg preload, create functions)
var myPlate = {};

myPlate.State001 = function (game) {

};

myPlate.State001.prototype = {

    preload: function () {

      this.load.image('bg', 'assets/rusty-bg-landscape.jpg');
      this.load.image('body', 'assets/rusty-bg-portrait.jpg');
      this.load.atlas('sprites', 'assets/sprites.png', 'assets/sprites.json');

    },

    create: function () {

      game.physics.startSystem(Phaser.Physics.ARCADE);
      game.physics.startSystem(Phaser.Physics.BOX2D);

      bg = this.add.image(0, 0, 'bg');
      bg.height = game.height;
      bg.width = game.width;
      bg.alpha = 0.6;



      // image sprite
      body = this.add.image(170, 0, 'body');


      // entire spritesheet
      //this.add.sprite(0, 0, 'sprites');


      // specific elements
      arm = game.add.sprite(200, 0, 'sprites');
      arm.filename = 'arm.png';

      // specific elements
      cellPhone = game.add.sprite(600, 200, 'sprites');
      cellPhone.frameName = 'cell.png';
      cellPhone.anchor.set(0.5,0.5);


      cellPhone.inputEnabled = true;
      cellPhone.events.onInputDown.add(listener, this);



    },

    update: function() {

      cellPhone.rotation += 0.02;

    },

    render: function() {
      //game.debug.box2dWorld();

    }

}


function listener () {

  this.game.state.start('State002');

}