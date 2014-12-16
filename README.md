metaGallery
===========

Metagallery is a project that explores forms of representation and semiotics in art and art exhibitions.
The projects was developed using UBUNTU-Gnome 14.10 and it has NOT been tested on any other plattform.

###Dependencies:

* nodeJS
* npm
* mongoDB

###Run the App:

1. First we need to install the nodeJS modules. On the root folder of the project type:
	
	sudo npm install

2. Make sure your MongoDB server is runing on its default address "mongo://localhost:27017"

3. To run the server type, on the root folder:

	sudo node app.js

4. Now you cann enter the gallery using another terminal window and typing:
	
	telnet localhost 5000

5. Follow the instructions and enjoy the experience.