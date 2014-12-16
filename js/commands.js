exports.checkCommands = function(c, callback) {
    var commands;
    if (c == "commands\r\n") {
        commands = "\n-------------------------------------------------------------------\n" +
            "PLEASE ENTER ONE OF THE FOLLOWING COMMANDS:\n" +
            "-------------------------------------------------------------------\n" +
            "say - say anything you like, others in the space will hear you\n" +
            "example: say hello world!\n" +
            "-------------------------------------------------------------------\n" +
            "look - look arround the gallery space in a general way\n" +
            "example: look around or look north wall\n" +
            "-------------------------------------------------------------------\n" +
            "contemplate - use this command with a specific artpiece by its name\n" +
            "example: contemplate monalisa\n" +
            "-------------------------------------------------------------------\n" +
            "commands - use this command to see a list of all available actions\n" +
            "example: commands\n" +
            "-------------------------------------------------------------------\n" +
            "walk - move to other rooms or exits\n" +
            "example: walk room2!\n" +
            "-------------------------------------------------------------------\n";
    } else if (c == "look around\r\n") {
        commands = "\nYou are in the first floor of the gallery.\n" +
            "The atmosphere is very clean. White walls perfectly painted almost glow under the\n" +
            "uniform light. The floor is pure flat light grey marble and the ceiling gives the\n" +
            "space an industrial touch. The appereance of the space is a convergence of post-minimalism\n" +
            "and ready-made aesthetics\n" +
            "Four walls populated with 2D art work and a sculpture in the center of the space...\n";
    } else if (c == "look north\r\n") {
        commands = "\n-------------------------------------------------------------\n" +
            "You are looking at the north wall of the space.\n" +
            "You notice 2 different art pieces hanging from this wall.\n\n" +
            "On the left:\n" +
            "report_a_problem\n" +
            "Author: emilio_vavarella, 2012.\n" +
            "Digital photograph.\n" +
            "Variable dimensions\n" +
            "Description:  Report a Problem is the first part of the project, The Google Trilogy, about\n" +
            "the relationship between humans, power and technological errors. “Report a Problem” is the\n" +
            "message that appears at the bottom of the Google Street View screen, which allows viewers to\n" +
            "report a problem during the viewing of the place they are virtually visiting: missing\n" +
            "censorship, wrong colors, random appearances. I traveled on Google Street View photographing\n" +
            "all the “wrong landscapes” I encountered before others could report the problems and prompt\n" +
            "the company to adjust the images. Common landscapes are transformed by Google’s unexpected\n" +
            "technical errors into something new.\n\n" +
            "On the right:\n" +
            "Photoshop CS Series.\n" +
            "Author: Cory Arcangel.\n" +
            "Digital Painting.\n" +
            "Variable dimensions\n" +
            "Description:  Arcangel’s Photoshop CS series are large c-print gradient digital paintings \n" +
            "solely in the eponymous popular image editing program. They appear to be a pop art version\n" +
            "of abstract expressionism or color field painting.\n\n";
    } else if (c == "look east\r\n") {
        commands = "\n-------------------------------------------------------------\n" +
            "You are looking at the east wall of the space.\n" +
            "You notice 1 huge art piece covering all the wall.\n\n" +
            "broken_portal\n" +
            "Author: andres_castillo, 2012.\n" +
            "Digital photograph.\n" +
            "4 x 2 meters\n" +
            "Description: A broken piece of mirror reflecting a parallel world\n" +
            "than the one the artist is in.\n\n";
    } else if (c == "look\r\n") {
        commands = "\nYou need to specify where to look\n" +
            "Example: look around, look north, look east, etc...\n";
    } else if (c == "@store_emilio\r\n") {
        commands = "store_emilio";
    } else if (c == "@store_tuto\r\n") {
        commands = "store_tuto";
    } else if (c == "contemplate report_a_problem\r\n") {
        commands = "contemplate report_a_problem";
    } else if (c == "contemplate broken_portal\r\n") {
        commands = "contemplate broken_portal";
    } else if (c.split(" ")[0] == "say") {
        commands = c;
    } else {
        commands = "\nSorry... Command not found!\n" +
            "Please try again.\n";
    }
    callback(commands);
}
