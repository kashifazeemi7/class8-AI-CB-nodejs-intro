# A Path To Servers
**Creating a basic web server on nodejs**

![1_-J7MRkhmySYNWK3U8CpCCw](https://user-images.githubusercontent.com/61817392/139218102-1a6d36a4-3d2b-44d1-a681-8265289af297.png)

**Introduction:**
Nodejs is a runtime Javascript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser. 

Some useful definitons(going thru these will give a general insight to the basics):
- Engine: a program or an interpreter which executes JavaScript code
- V8 Engine: V8 is the name of the JavaScript engine that powers Google Chrome. It's the thing that takes our JavaScript and executes it while browsing with Chrome.
- Runtime environment: Is the environment in which a program or application is executed.
- Package: Any kind of project, whether the node itself or any other web app, residing at npm, is called a package
  - A package in Node.js contains all the files you need for a module. Modules are JavaScript libraries you can include in your project
  - A package is a file or directory that is described by a package.json file. A module is any file or directory in the node_modules directory that can be loaded by the Node.
- Package Manager: A package manager or package management system is a collection of software tools that automates the process of managing softwares
  - The way a package manager works is you find any package in the registry and install it through the command-line, both globally and locally
- npm: Node Package Manager; the default package manager for JavaScript's runtime Node.js, is the largest ecosystem of open source libraries in the world;
  - npm can be assumed as a fulfillment center, that receives, manages and ships packages from sellers to customers, essentially a package handle
  - It consists of a command-line client, also called npm, and an online database of public and paid-for private packages called the npm registry
  - an online repository that hosts JavaScript packages, and has a CLI (command-line interface) tool for publishing and downloading packages



## How to get started:

**Step 1:**
- Check whether nodejs is installed on your machine or not by running this command in your powershell/ cmd: ` $ node -v`
- If there's version number e.g. `v16.13.0`, jump to Step 3
- If it isn't, move to Step 2.

**Step 2:**
- Navigate to nodejs.org
- install the latest LTS(Long Term Support) on your machine
- After installation, run command given in Step 1 to ensure you've installed it. You'll get the version number

**Step 3:**
- Navigate to the working directory and then run the command prompt
- Run the command `$ npm init` 
- Press enter to set defaults, except the `entry point` where you'll enter the name of the main file e.g. `server.js`
- Install the Express package onto your machine, by running the command `$ npm i express` or `$ npm install express`
- Run VS Code on this directory to start creating a server

**Step 4:**
- Firstly, as you see a file called node-modules loaded on this directory, we need to avoid it getting pushed to git, cuz of its large size. So create a file called `.gitignore` and enter the file name that shouldn't be pushed. In our case, its `node_modules`
- Create a `server.js` file in this directory
- Here we'll use Expressjs, which is a prebuilt NodeJS framework that can help you in creating server-side web applications efficiently
 - In short, ExpressJS did for NodeJS what Bootstrap did for HTML/CSS and responsive web design
- Navigate to https://expressjs.com/en/starter/hello-world.html
- Copy the code into your main file that conforms to the respective node version

**Step 5:**
- Run the server using the command `$ node app.js`
- load http://localhost:3000/ in a browser to see the output

**Congrats!!** you've just created a basic server!
