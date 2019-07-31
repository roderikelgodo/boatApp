# boatApp

A protoype application that measures boats navigation data: wind angle and
position, and boat direction, position and speed.
Made in Node, MongoDB, AngularJs and ReactJs.

## Installation

Run local server:

```bash
git clone https://github.com/roderikelgodo/boatApp.git
cd boatApp
npm install
npm start
```

Navigate to `localhost:3000`.

## Database

- Files to import in MongoDB are located in 'database' folder
- To allow MongoDB (if installed) change the boolean in 'config/config.json'
- If 'config/config.json' is 'false' the client part (Angular and React) will import the data from json files.

## AngularJs

- A production build used by Node is located 'client/angularjs' folder
- To run the development code:
    ```bash
    cd boatApp/00_angularjs
    npm install
    npm start
    ```
    Navigate to `localhost:4200`.

## ReactJs

- A production build used by Node is located 'client/reactjs' folder
- To run the development code:
    ```bash
    cd boatApp/01_reactjs
    npm install
    npm start
    ```
    Navigate to `localhost:4201`.

## Author

- [Rodrigo Fernández Aragonés]
