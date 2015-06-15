'use strict';

var authentification = {
	check: function() {
		console.log('check');
	},
	validNick: function() {
		if(player.name == "") return false;
		
 		var regex = /^\w*$/;
        return regex.exec(player.name) !== null;
	},
};