exports.texts = function(text, callback) {
    if (text == "title") {
        var t = "Welcome to the meta-gallery \n";
    } else if (text == "init_description") {
        var t = "Let me do a quick introduction for you:\n" +
            "The gallery is a two floor space with room in each level\n" +
            "In each floor you will find diferent art pieces from different artists...\n" +
            "The current exibition is entitled XXXXX, curated by fito_segrera\n\n" +
            "To start press 'commands' to get a list with everything you can do...\n";
    }
    callback(t);
}
