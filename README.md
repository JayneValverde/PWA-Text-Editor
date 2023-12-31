# PWA-Text-Editor
## Jayné M. Valverde <br>
Progressive Web Applications (PWA) Challenge: Text Editor 

[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

### **_[LINK TO DEPLOYED APP](https://pwa-text-editor-jv-c9a36b67da25.herokuapp.com/)_**

## Description: 
This is a text editor that runs in the browser. It is a single-age PWA that uses webpack and features several data persistence techniques. It can function without an internet connection and can be installed on a PC. When installed, a shortcut to the applicaiton will be added to your desktop. 

## Table of Contents: 
* [User Story](#user-story)
* [Acceptance Criteria](#acceptance-criteria)
* [Usage](#usage)
* [Screenshots](#screenshots)
* [License](#license)
* [Resources](#resources)
* [Questions](#questions)

## User Story: 
```
AS A developer
I WANT to create notes or code snippets with or without an internet connection
SO THAT I can reliably retrieve them for later use
```

## Acceptance Criteria: 
```
GIVEN a text editor web application
WHEN I open my application in my editor
THEN I should see a client server folder structure
WHEN I run `npm run start` from the root directory
THEN I find that my application should start up the backend and serve the client
WHEN I run the text editor application from my terminal
THEN I find that my JavaScript files have been bundled using webpack
WHEN I run my webpack plugins
THEN I find that I have a generated HTML file, service worker, and a manifest file
WHEN I use next-gen JavaScript in my application
THEN I find that the text editor still functions in the browser without errors
WHEN I open the text editor
THEN I find that IndexedDB has immediately created a database storage
WHEN I enter content and subsequently click off of the DOM window
THEN I find that the content in the text editor has been saved with IndexedDB
WHEN I reopen the text editor after closing it
THEN I find that the content in the text editor has been retrieved from our IndexedDB
WHEN I click on the Install button
THEN I download my web application as an icon on my desktop
WHEN I load my web application
THEN I should have a registered service worker using workbox
WHEN I register a service worker
THEN I should have my static assets pre cached upon loading along with subsequent pages and static assets
WHEN I deploy to Heroku
THEN I should have proper build scripts for a webpack application
```

## Usage: 
When the text editor is opened, databased storage is created in IndexedDB. When you enter text and then click away from the window, the text is automatically saved. Once the editor is reopened the saved text will be retreived from indexedDB. If you click the install button then the applicaiton is downloaded onto your desktop. When the application is loaded there is a registered service worker. 

## Screenshots: 
### App installed locally
![Installed App](/Assets/01-locally.png)

### Icon installed on Desktop
![App Icon](/Assets/05-Icon.png)

### App's manifest.json
![Manifest.json](/Assets/02-Manifest.png)

### App's Registered Service Worker
![Service Workers](/Assets/03-Service-worker.png)

### IndexedDB Storage
![IndexedDB](/Assets/04-IndexedDB%20.png)


## License: 
This project is licensed under ISC

## Resources:
**Tutoring Session: Kathie Redford** <br>

**MODULE 19** <br>

## Questions: 
Follow me on GitHub at [JayneValverde](https://github.com/JayneValverde) <br>
Contact me at Jaynevalverde@gmail.com <br>
Thank you!

