# Songclip DevOps Test Server

This repository houses a Node.js Express server that listens on PORT 3000.  It returns a JSON object when called on the root route `/*`: 
```
{
  message: 'Hello World'
}
```

# Getting Started

## Prerequisites
* Node.js
* NPM
* PM2

Hosting environment will need to be configured with Node.js, NPM, and PM2.

## Installation

Use the package manager [npm](https://www.npmjs.com/get-npm) to install node.js dependencies for this application.
1. Change directory into repository and install dependencies by running command:
```
npm install
```
2. To run the server, change directory into the repository and run command:
```
npm start
```
* To run server as background process, change directory into repository and run command:
```
pm2 start index.js
```

## Technical Assessment Objectives

1. Configure an environment that can host the application.
2. Deploy application to the environment.
3. Start application within environment.
4. End result is to be able to do a curl to the exposed port and get back the response object.
5. If time permits, setup up a load-balancer with appropriate auto-scaling group.



## License
[MIT](https://choosealicense.com/licenses/mit/)