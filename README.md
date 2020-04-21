# Food Desert Mapping App

Note: this repository contains the source code for the application.  For day-to-day use, you should deploy
this software on a server.  We have included instructions for deploying the application on [Heroku](https://heroku.com) (see The Easy Way section, below),
which offers the ability to host applications for free at low-volume usage and low costs per month after that.

Getting Started
==========

### Conventions

This repository is organized into 2 primary directories:

- [`client`](/client) - This is where the frontend React application lives.  In this document, "client" and "frontend" are synonymous.
- [`server`](/server) - This is where the backend server that hosts the application lives.  In this document, "server" and "backend" are synonymous.

There are 3 package.json files; the repo as a whole, the server, and the client each have their own because the server and client run as independent applications
for development purposes.

### The Easy Way
Follow these instructions to get a working version of the app deployed on Heroku for free in about 10 minutes.

First, click this button to open Heroku.  Sign up or login to your account if requested.  Enter an app name, and make a note of it.  The URL of your app will be
`<your-app-name>.herokuapp.com`.  For instance, if you enter **george-burdell** as the app name, the app URL will be
`https://george-burdell.herokuapp.com`.

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

You will need 2 Google Maps API keys for this, which you can obtain using the instructions below:

1. Go to [console.cloud.google.com](https://console.cloud.google.com/).  Sign in with your Google account.
2. You will need a Google Cloud Platform project to continue.  If you don't have one already,
follow [these instructions](https://cloud.google.com/resource-manager/docs/creating-managing-projects)
to set one up.
3. Now, you should be inside your desired Google Cloud Platform project.  Make sure you see your project name
in the top-left part of the window, just to the right of the Google Cloud Platform logo.
4. Now, we'll create the 2 required Google Maps API keys.
5. In the top-left corner of the screen, click the 3 horizontal lines to open the navigation menu.
6. Hover on the **APIs & Services** item and select **Library** in the context menu that appears.
7. Now, we will enable the APIs required by the website.  Look for the search bar that says **Search for APIs & Services**
and type "Google Maps"
8. Find the Maps JavaScript API and click on it.
9. Click **Enable**.  A new screen will appear.
10. Repeat steps 5-9 for the Places API, Geocoding API, and Distance Matrix API.
11. Return to the navigation menu on the left, hover on the **APIs & Services** item, and select **Credentials** in the context menu that appears.
12. Near the top of the page that appears, click **Create Credentials**, then select **API key.**
13. An API key will be created.  Click **Restrict Key** in the dialog that appears on screen.
14. Now, we will restrict this API key to limit the potential for abuse if a third-party got ahold of the API key.  **NOTE:**
Anyone in possession of the backend API key can use it, so treat it like a password and regenerate it if you think an unauthorized party might have
gotten access to it.
15. In the name field, type **Backend**. Look for the **API restrictions** header and choose **Restrict key**.  In the dropdown menu, choose Distance Matrix API and Places API.
16. Click Save.
17. Repeat steps 12-14, this time for the frontend API key.
18. In the name field, type **Frontend**. Look for the **Application restrictions** header.  Choose **HTTP referrers (web sites)**.  Under the **Website restrictions** header,
add an entry for `https://YOUR-APP-NAME-HERE.herokuapp.com/*`.  _Be sure to include the `/*` at the end of the URL._
19. Look for the **API restrictions** header and choose **Restrict key**.  In the dropdown menu, choose Distance Matrix API and Places API.
20. Click **Save**.
21. Now we will add the required environment variables for the application to function.
22. Go back to the Heroku page you were on before.  Scroll down a little bit until you see a section labeled **Config Vars**.
23. Take the API key from Google Cloud Platform named Backend and paste it in the first Config Vars field labeled **BACKEND_API**.
24. Now, we'll do the same thing for the frontend.  Take the API key from Google Cloud Platform named Frontend and paste it in the second Config Vars field labeled
**REACT_APP_GOOGLE_MAPS_API_KEY**.
25. Click **Deploy app**.  If all goes well, your very own Food Desert Mapping Web App will be deployed and ready-to-use in just a few minutes!
26. When you see **Your app was successfully deployed**, you can click **View** to see it!

### The Hard Way

These instructions indicate how to build the application from source.  If you're running the application on a server, these
steps should be executed there.

#### Install Dependencies

1. Make sure you have [node.js](https://nodejs.org/en/download/) and NPM (the Node Package Manager, which should be included
with node.js) installed on your computer.  If you have the option, install the required
dependencies for node-gyp (a way to compile node dependencies from source) to save yourself some trouble later.
2. Install the [Yarn package manager](https://classic.yarnpkg.com/en/docs/install).
3. Open a terminal in the root directory of this repository (same as this file)
4. Run `yarn install`.  This will automatically install all required dependencies in both
the `server` and `client` directories.

#### Required Environment Variables

The backend server is located in the [server](/server) directory.  Follow these instructions to add the required environment
variables.

1. You will need a Google Maps API key to continue.  These instructions will assume you're starting from scratch,
but you can skip ahead to step 22 if you already have a Google Maps API key.
2. Go to [console.cloud.google.com](https://console.cloud.google.com/).  Sign in with your Google account.
3. You will need a Google Cloud Platform project to continue.  If you don't have one already,
follow [these instructions](https://cloud.google.com/resource-manager/docs/creating-managing-projects)
to set one up.
4. Now, you should be inside your desired Google Cloud Platform project.  Make sure you see your project name
in the top-left part of the window, just to the right of the Google Cloud Platform logo.
5. Now, we'll create the 2 required Google Maps API keys.
6. In the top-left corner of the screen, click the 3 horizontal lines to open the navigation menu.
7. Hover on the **APIs & Services** item and select **Library** in the context menu that appears.
8. Now, we will enable the APIs required by the website.  Look for the search bar that says **Search for APIs & Services**
and type "Google Maps"
9. Find the Maps JavaScript API and click on it.
10. Click **Enable**.  A new screen will appear.
11. Repeat steps 6-10 for the Places API, Geocoding API, and Distance Matrix API.
12. Return to the navigation menu on the left, hover on the **APIs & Services** item, and select **Credentials** in the context menu that appears.
13. Near the top of the page that appears, click **Create Credentials**, then select **API key.**
14. An API key will be created.  Click **Restrict Key** in the dialog that appears on screen.
15. Now, we will restrict this API key to limit the potential for abuse if a third-party got ahold of the API key.  **NOTE:**
Anyone in possession of the backend API can use it, so treat it like a password and regenerate it if you think someone might have
gotten access to it.
16. In the name field, type **Backend**. Look for the **API restrictions** header and choose **Restrict key**.  In the dropdown menu, choose Distance Matrix API and Places API.
17. Click Save.
18. Repeat steps 13-15, this time for the frontend API key.
19. In the name field, type **Frontend**. Look for the **Application restrictions** header.  Choose **HTTP referrers (web sites)**.  Under the **Website restrictions** header,
add an entry for `https://YOUR-WEBSITE-HERE.com/*`.  _Be sure to include the `/*` at the end of the URL._
20. Look for the **API restrictions** header and choose **Restrict key**.  In the dropdown menu, choose Distance Matrix API and Places API.
21. Click **Save**.
22. Now we will add the required environment variables for the application to function.
23. In the [server](/server) directory.  Copy the file called `.env.example` and **name the copy** `.env`.
24. Take the API key from Google Cloud Platform named Backend and paste it in .env, like this:
`BACKEND_API=BACKEND_GOOGLE_MAPS_API_KEY_HERE`.
25. Now, we'll do the same thing for the frontend.  Go to the [client](/client) directory, which is where the user interface
is located.  Copy the `.env` file (the one located in the [client](/client) directory, not the one you just made in
the [server](/server) directory) and **rename the copy** `.env.local`.
26. Take the API key from Google Cloud Platform named Frontend and paste it in `.env.local`, like this:
`REACT_APP_GOOGLE_MAPS_API_KEY=FRONTEND_GOOGLE_MAPS_API_KEY_HERE`
27. That's it!  Now you should be able to run the application.

# Running the Application for Local Development

## The First Time
1. The first time you run the application, there are some additional steps to take.  These will cover that.
2. In a terminal, navigate to the [client](/client) directory of this repository.
3. Run `yarn run build`, and wait for it to complete.
4. Now you can proceed with the steps below to start the server and client.

## Starting the Server and Client
Note: the IntelliJ IDEA run configurations described in the Development Tips section should also work for this.
1. In a terminal, navigate to the [server](/server) directory, run `yarn start`
2. Open a new terminal window.  In this one, navigate to the [client](/client) directory.  Run `yarn start`.
If you see a prompt to use port 3001 because 3000 is busy, enter `y` to accept this.  Alternatively, run this command with
a `PORT=3001` environment variable, and the development server will run on port 3001 automatically.
3. Access the frontend for local development using `localhost:3001`.  This is the React development server,
and it will forward API requests to the server (which **must** be running on port 3000) automatically.


# Troubleshooting
Here are some common scenarios that may come up and how to fix them.

**Problem: `yarn install` failed**<br />
**Solution:** If you have never run `yarn install` before, you may encounter one of a number of fairly common errors.
We suggest Googling these errors; while they are fairly common, the solutions vary between different operating systems.

**Problem: When viewing the frontend, nothing appears, a server error occurs, or the page continually refreshes**<br />
**Solution:** In a terminal, navigate to the [client](/client) directory, and run `yarn run build`.

**Problem: I am making changes to the frontend, but I can't see them**<br />
**Solution:** The backend server will host a version of the frontend created from running `yarn run build` in the
[client](/client) directory.  This is hosted at whatever port the backend server is running on, usually 3000, and
_it does not reflect changes to files made until `yarn run build` is run again_. Check the URL you are accessing,
and make sure it's the one that corresponds to the React development server,
which you can start by opening a terminal, navigating to the [client](/client) directory, and
running `yarn start`.

**Problem: The backend API always returns "Server error occurred"**<br />
**Solution:** Make sure you've set the backend API key properly, following the instructions above.

**Problem: When entering an address on the website/frontend, the loading spinner appears and never goes away**<br />
**Solution:** This is most likely a problem with your Google Maps API key (or lack thereof) or the restrictions set for it.
The easiest way to debug this is to view the actual error by opening your web browser's JavaScript console.  In Google Chrome,
[you can do this by pressing Ctrl-Shift-J on Windows or Cmd-Option-J on Mac](https://developers.google.com/web/tools/chrome-devtools/open#console).

# Development Tips

- The recommended IDE is IntelliJ IDEA.  If you use it, you should have 2 run configurations already made for running
the server and client in development modes.
- You can start both the server and client in development modes by navigating to the respective directory (`/server`
or `/client`) and running `yarn start`.
- The server runs on [localhost:3000](http://localhost:3000) by default.  Do not change this, or you may break parts of the client.
- The client will run on whatever port is specified in the `PORT` environment variable.  In the run configuration included,
this is port 3001.
- If you modify the client, you must increment the version specified in [client/package.json](client/package.json).  There's
a React component that will force clients to clear their cache any time a new version is deployed, but this only works
if the version is incremented on all releases.
- Commit changes to any yarn.lock files.  We have used Yarn as the package manager for this repo, so you should not commit
a package-lock.json for run `npm install` at any point.



# Release Notes
## Version 1.8 (April 19, 2020)

### Changes
-   Completed FAQ, Email, Info, Terms of Services and Privacy Policy Pages
-   Fully implemented Results screen of the wizard
-   Pass filter (transit, budget, etc.) results to backend
-   Improved backend API (added mode of transportation, time limit, budget constraints)
-   Fix CSS bugs in production deployment
-   Fix mode of transportation bug
-   Fix `rankby` and radius filter bug
-   Added installation instructions to README

### Known Issues
-  Because we filter grocery stores by price, stores without a price field are not considered
- Choices stores what’s selected in its own state and tells redux what was select, but it will not go in the opposite way

## Version 1.7 (April 14, 2020)
-   Find stores based on actual route time (implemented Google Maps Distance Matrix API)
-   Send real data from frontend to backend for testing
-   Account for more factors in Google Maps API calls
-   Made Distance Matrix API calls more efficient
## Version 1.6 (April 5, 2020)
-   Frontend style improvements
-   Added additional wizard steps
-   Fix bug with nested scroll bar
-   Switched to local semantic UI CSS rather than CDN
-   Implement logo in navigation bar and hamburger menu
-   Implement Redux with wizard
-   Wizard display improvements on mobile
-   Fix up frontend style issues
-   Fixed environment variable issues in staging deployment

## Version 1.5 (April 3, 2020)
-   Added functionality to frontend to retrieve 20 local grocery stores in Atlanta on button click
-   Fix bug where many grocery stores did not show up in results
-   Fix bug where grocery store results are passed to the frontend without being fully retrieved from backend

## Version 1.4 (April 2, 2020)
-   Added finishing touches to first version of wizard, except for the results page
-   Added homepage CSS
-   Add CSS classes to Home component for foundational styling
-   Finishing touches to wizard container

## Version 1.3 (March 30, 2020)
-   Reorganized component CSS files to clarify usage
-   CSS files relevant to website are organized into SMACSS format

## Version 1.2 (March 26, 2020)
-   Added address change to wizard
-   Added budget step to wizard

## Version 1.1 (March 6, 2020)
-   Initial Wizard Functionality

## Version 1.0 (Mar 4, 2020)
-   Initial release


