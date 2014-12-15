fs = require('fs');

exports.checkCommands = function(c, callback){
	if(c == "commands\r\n"){
		var commands = 	"\n-------------------------------------------------------------------\n"+
						"PLEASE ENTER ONE OF THE FOLLOWING COMMANDS:\n"+
						"-------------------------------------------------------------------\n"+
						"say - say anything you like, others in the space will hear you\n"+
						"example: say hello world!\n"+
						"-------------------------------------------------------------------\n"+
						"look - look arround the gallery space in a general way\n"+
						"example: look around or look north wall\n"+
						"-------------------------------------------------------------------\n"+
						"contemplate - use this command to a specific artpiece by its name\n"+
						"example: contemplate monalisa\n"+
						"-------------------------------------------------------------------\n"+
						"commands - use this command to see a list of all available actions\n"+
						"example: commands\n"+
						"-------------------------------------------------------------------\n"+
						"walk - move to other rooms or exits\n"+
						"example: walk room2!\n"+
						"-------------------------------------------------------------------\n";
	}else if(c == "look around\r\n"){
		var commands = 	"\nYou are in the first floor of the gallery.\n"+
						"The atmosphere is very clean. White walls perfectly painted almos glow under the\n"+
						"uniform light. The floor is pure flat light grey marble and the ceiling gives the\n"+
						"space an industrial touch. The appereance of the space is a convergence of post-minimalism\n"+
						"and ready-made aesthetics\n"+
						"Four walls populated with 2D art work and a sculpture in the center of the space...\n";
	}else if(c == "look north\r\n"){
		var commands = 	"\n-------------------------------------------------------------\n"+
						"You are looking at the north wall of the space.\n"+
						"You notice 2 different art pieces hanging from this wall.\n\n"+
						"On the left:\n"+
						"Report a Problem.\n"+ 
						"Author: Emilio Vavarella, 2012.\n"+
						"Digital photograph.\n"+
						"Variable dimensions\n"+
						"Description:  Report a Problem is the first part of the project, The Google Trilogy, about\n"+
						"the relationship between humans, power and technological errors. “Report a Problem” is the\n"+
						"message that appears at the bottom of the Google Street View screen, which allows viewers to\n"+
						"report a problem during the viewing of the place they are virtually visiting: missing\n"+
						"censorship, wrong colors, random appearances. I traveled on Google Street View photographing\n"+
						"all the “wrong landscapes” I encountered before others could report the problems and prompt\n"+
						"the company to adjust the images. Common landscapes are transformed by Google’s unexpected\n"+
						"technical errors into something new.\n\n"+
						"On the right:\n"+
						"Photoshop CS Series.\n"+ 
						"Author: Cory Arcangel.\n"+
						"Digital Painting.\n"+
						"Variable dimensions\n"+
						"Description:  Arcangel’s Photoshop CS series are large c-print gradient digital paintings \n"+
						"solely in the eponymous popular image editing program. They appear to be a pop art version\n"+
						"of abstract expressionism or color field painting.\n\n";
	}else if(c == "look\r\n"){
		var commands = 	"\nYou need to specify where to look\n"+
						"Example: look around, look north, look east, etc...\n";
	}else if(c == "@store_art\r\n"){
		var commands = 	"store_art";
	}}else if(c == "contemplate\r\n"){
		var commands = 	"store_art";
	}else{
		var commands = 	"Sorry... Command not found!\n"+
						"Please try again.\n";
	}
	callback(commands);
} 