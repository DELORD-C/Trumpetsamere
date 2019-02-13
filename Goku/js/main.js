var Platformer = Platformer || {};

var game = new Phaser.Game("100%", "100%", Phaser.CANVAS);
game.state.add("BootState", new Platformer.BootState());
game.state.add("LoadingState", new Platformer.LoadingState());
game.state.add("GameState", new Platformer.TiledState());
<<<<<<< HEAD
game.state.start("BootState", true, false, "Goku/assets/levels/level1.json");
=======
game.state.start("BootState", true, false, "Luffy/assets/levels/level1.json");
>>>>>>> Map
