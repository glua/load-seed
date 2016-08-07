# Loading Screen Seed

This project is an application skeleton for building a Garry's Mod loading screen. You can use it to quickly get started building your design.

The seed comes preconfigured with modern frontend tools to make developing a loading screen faster and easier.

![Preview Image](http://wiki.garrysmod.com/images/e/e5/load-seed-preview.jpg)

## Getting Started

To get started you can simply clone the load-seed repository and install the dependencies:

### Prerequisites

You need git to clone the load-seed repository. You can get git from http://git-scm.com/

The project also uses a number of node.js tools to initialize and build load-seed. You must have node.js and its package manager (npm) installed. You can get them from http://nodejs.org/

### Clone load-seed

Clone the load-seed repository using git:

```
git clone https://github.com/glua/load-seed
cd load-seed
```

If you just want to start a new project without the load-seed commit history then you can do:

```bash
git clone --depth=1 https://github.com/glua/load-seed.git <your-project-name>
```

The `depth=1` tells git to only pull down one commit worth of historical data.

### Install Dependencies

This project requires a few tools before you can begin developing your loading screen with it. After installing node.js, you can simply run the following commands to install all dependencies:

```
npm install
npm install -g gulp
```

After running these commands, you should find the a `node_modules` folder within your project.

### Run the Application

The project is preconfigured with a simple development web server. To start this server, enter the following:

```
gulp serve
```

Now browse to the loading screen at `http://localhost:9000/`.

## Hosting

When you're ready to host your loading screen, enter the following:

```
gulp build
```

The final project files will be built into a `dist` folder within your project. You'll need to upload these files to a web server.

## Directory Layout

```
app/                    --> all of the source files for the loading screen
  fonts/                --> any fonts to include
  images/               --> logo image, backgrounds, etc.
  scripts/              --> JavaScript files
    main.js             --> loading screen code
    demo.js             --> test data used for emulating connecting to a server in the browser
  styles/               --> loading screen styles
    main.scss           --> default stylesheet
  index.html            --> loading screen layout file
  robots.txt            --> disallows web robots from indexing loading screen files
```
