# Playground to experiment with nodejs and creating & interacting with an API created using ExpressJS.

## Summary

This project is for designing and testing APIs only and is not currently meant to be deployed in a production environment.

ExpressJS is used to create the server side API. The configuration is in the package.json file. Requires a CSV as the datasource.

- Run `npm start` at the command line

Using a basic node app (app.js) and file system module (fs) run a server and read index.html and serve it up as a normal web page.

- Run `node app` at the command line
- Navigate to 127.0.0.1:3000

### Using

- Babel, 
- ExpressJS and 
- Nodemon

### Commands 

`npm start` will run nodemon and build and execute ExpressJS API at port 3001.

### TODO

- [ ] document steps to initialize npm and set up babel and nodemon with ExpressJS.

### Additional information

- Created with node v14.4.0 (run `node --version` at the command prompt)
  - Recommended to use LTS versions
- Node Package Manager (npm) will be required when installing packages via command line or package.json
  - npm v7.12.1 (`npm --version`)
    - nodejs v14.4.0 comes with it's own version of npm
- Node version manager (nvm) is useful for switching nodejs versions for supporting multiple projects that require specific versions of nodejs.
  - Currently recommend [nvm](https://github.com/nvm-sh/nvm) v0.38.0 (`nvm --version`)
    - [nvm releases](https://github.com/nvm-sh/nvm/releases)
- Run `npm install` with npm 7 in a project with a v1 lockfile will replace that lockfile with a new v2 format. To avoid this, you can run `npm install --no-save`

## TODO: Make it more traditional dev approach

- [X] Add Bootstrap
- [X] Add package.json file
- [ ] Refactor into different imports/exports
- [ ] Experiment more with promises, custom request headers, and request/response objects
- [X] Eventually refactor to use expressjs instead of custom node routing logic
- [ ] Roll in ReactJS, TypeScript and Webpack
- [ ] Get a CI/CD pipeline set up

## Additional notes

Effectively using personal access tokens (the recommended pattern if you are using multiple github accounts on one machine).

- `git remote add origin https://<access token>@github.com/chickenlipnerd/node_ajax_testing.git`
- `git clone https://<access token>@github.com/chickenlipnerd/node_ajax_testing.git`

## Node development resources

- [JavaScript onload](https://www.javascripttutorial.net/javascript-dom/javascript-onload/)
- [How To Create a Web Server in Node.js with the HTTP Module](https://www.digitalocean.com/community/tutorials/how-to-create-a-web-server-in-node-js-with-the-http-module)
- [fetch()](https://developer.mozilla.org/en-US/docs/Web/API/fetch)
- [Retrieving Files with the 'fetch' API](https://dev.to/itsjjpowell/retrieving-files-with-the-fetch-api-i5l)
- [Cross-Origin Resource Sharing (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#simple_requests)
- [GET](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/GET)
- [Streams](https://streams.spec.whatwg.org/#readablestream-tee)
- [Preflight request](https://developer.mozilla.org/en-US/docs/Glossary/Preflight_request)
- [Using javaScript in your git hooks](https://medium.com/@Sergeon/using-javascript-in-your-git-hooks-f0ce09477334)
- [https://www.w3schools.com/jsref/met_element_addeventlistener.asp](https://www.w3schools.com/jsref/met_element_addeventlistener.asp)
- [JavaScript Fetch API](https://www.javascripttutorial.net/javascript-fetch-api/)
