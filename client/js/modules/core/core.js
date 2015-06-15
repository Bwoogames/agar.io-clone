/**
 * The boot file for the module core / Le fichier boot du module core
 * @author Bwoogames
 * @version 1.0.0
 */
'use strict';

var binding = require("../binding");

console.log(binding.KEY_ENTER);

/** The core Object / L'objet core */
var core = {
	/** The game area / La zone de jeu */
	gameAreaWrapper: document.querySelector('#gameAreaWrapper'),
	
	/** The menu / Le menu */
	startMenuWrapper: document.querySelector('#startMenuWrapper'),
	
	/** The Play button / Le bouton jouer */
	btnPlay: document.querySelector('#startButton'),
	
	/** Nickname error text / Pseudo erreur texte */
	nickErrorText: document.querySelector('#startMenu .input-error'),
	
	/** Player name input / Champ de texte nom du joueur */
	playerNameInput: document.querySelector('#playerNameInput'),
	
	/**
	 * 
	 */
	startMenu: function() {
		
	},
	
	/**
	 * Show the Game Area if the param display equal true or Hide him / Afficher la zone de jeu si le param display est égale à vrai sinon on la cache
	 * @param bool display
	 */
	displayGameArea: function(display) {
		if(display) {
			this.gameAreaWrapper.style.display = 'block';
			this.startMenuWrapper.style.display = 'none';
		}
		else {
			this.gameAreaWrapper.style.display = 'none';
			this.startMenuWrapper.style.display = 'block';
		}
	},
	
	/**
	 * 
	 */
	gameLoop: function() {
		
	},
};

core.startMenu();