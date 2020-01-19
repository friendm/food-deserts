# Food Desert Mapping App

Getting Started
==========

# Install Dependencies

1. Make sure you have node.js and NPM installed on your computer.  If you have the option, install the required 
dependencies for node-gyp (a way to compile node dependencies from source) to save yourself some trouble later.
2. Open a terminal in the root directory of this repository (same as this file)
3. Run `npm i`, which is shorthand for `npm install`.  This will automatically install all required dependencies in both
the `server` and `client` directories.

# Development

- The recommended IDE is IntelliJ IDEA.  If you use it, you should have 2 run configurations already made for running
the server and client in development modes.
- You can start both the server and client in development modes by navigating to the respective directory (`/server`
or `/client`) and running `npm start`.
- The server runs on [localhost:3000](http://localhost:3000) by default.  Do not change this, or you may break parts of the client.
- The client will run on whatever port is specified in the `PORT` environment variable.  In the run configuration included,
this is port 3001.
- If you modify the client, you must increment the version specified in [client/package.json](client/package.json).  There's
a React component that will force clients to clear their cache any time a new version is deployed, but this only works
if the version is incremented on all releases.
- Commit changes to any package-lock.json files.
