(function(){

	// Library depencencies
	var Application = include('springroll.Application'),
		Game = include('Phaser.Game'),
		Phaser = include('Phaser');

	// Create a new application
	var app = new Application({
		name: "_name_",
		configPath: "assets/config/config.json"
	});

	// The Phaser game
	var game;

	// Handle when app is ready to use
	app.on('init', function()
	{
		// Start application
		this.game = game = new Game(
			_width_,
			_height_,
			Phaser.AUTO,
			"content",
			{
				preload: preload,
				create: create
			}
		);
	});

	// Preload assets for Phaser
	function preload()
	{
		game.load.image('logo', 'assets/images/logo.png');
	}

	// When the Phaser game has been created
	function create()
	{
		var logo = game.add.sprite(
			game.world.centerX, 
			game.world.centerY, 
			'logo'
		);
		logo.anchor.setTo(0.5, 0.5);
	}

	// Assign to the window for easy access
	window.app = app;
	
}());