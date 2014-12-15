var net = require('net'); // Load the TCP Library
var figlet = require('figlet'); //figlet ascii library
var c = require("./js/commands.js"); //load the commands module
var t = require("./js/texts.js"); //load the texts module
var mongojs = require('mongojs'); //load mongojs module
var fs = require('fs');

// Keep track of the chat clients
var clients = [];

//Start a TCP Server
net.createServer(function(socket) {

    // Identify this client
    socket.name = socket.remoteAddress + ":" + socket.remotePort

    // Put this new client in the list
    clients.push(socket);

    // Send a nice welcome message and announce

    figlet.text('meta\ngallery', {
        font: 'Univers',
        horizontalLayout: 'default',
        verticalLayout: 'default'
    }, function(err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        socket.write(data + "\n");
        t.texts("title", function(data) {
            socket.write("\n" + data);
            socket.write("Your user ID is: " + socket.name + "\n")
        });
        t.texts("init_description", function(data) {
            socket.write("\n" + data);
        });
    });
    broadcast(socket.name + " joined the chat\n", socket);

    // Handle incoming messages from clients.
    socket.on('data', function(data) {
        c.checkCommands(data.toString('utf-8'), function(newdata) {
            socket.write(newdata);
            if (newdata == "store_art") {
                var imagefile = fs.readFile("./images/emilio.jpg", 'base64', function(err, imgdata) {
                    if (err) throw err;
                    //console.log(data);
                    //connect to database
                    var db = mongojs("metagallery", ["imgs"]);
                    db.imgs.save(imgdata, function(err, saved) {
                        if (err || !saved) console.log("User not saved");
                        else console.log("User saved");
                    });
                });
            }
            //broadcast(socket.name  + "> " + data, socket);
        });
    });

    // Remove the client from the list when it leaves
    socket.on('end', function() {
        clients.splice(clients.indexOf(socket), 1);
        broadcast(socket.name + " left the chat.\n");
    });

    // Send a message to all clients
    function broadcast(message, sender) {
        clients.forEach(function(client) {
            // Don't want to send it to sender
            if (client === sender) return;
            client.write(message);
        });
        // Log it to the server output too
        process.stdout.write(message)
    }

}).listen(5000);

// Put a friendly message on the terminal of the server.
console.log("Chat server running at localhost port 5000\n");