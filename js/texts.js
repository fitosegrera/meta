exports.texts = function(text, callback){
	if(text == "title"){
		var t = "Welcome to the meta-gallery \n";
	}else if(text == "init_description"){
		var t = "Let me do a quick introduction for you:\n"+
				"The gallery is a two floor space with room in each level\n"+
				"In each floor you will find diferent art pieces from different artists...\n"+
				"The current exibition is entitled XXXXX, curated by fito_segrera\n\n"+
				"To start press 'commands' to get a list with everything you can do...\n"; 
	}else if(text == commands){
		t = "\n-------------------------------------------------------------------\n"+
			"PLEASE ENTER ONE OF THE FOLLOWING COMMANDS:\n"+
			"-------------------------------------------------------------------\n"+
			"say - say anything you like, others in the space will hear you\n"+
			"example: say hello world!\n"+
			"-------------------------------------------------------------------\n"+
			"look - look arround the gallery space in a general way\n"+
			"example: look\n"+
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
	}
	callback(t);
}