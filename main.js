const electron = require('electron');
const url = require('url');
const path = require('path');

const {app, BrowserWindow} = electron;

let mainWindow;

//listen for app to be ready
app.on('ready', function(){
    //once ready create a new window
    mainWindow = new BrowserWindow({
        width: 800, 
        height: 600,
        icon: path.join(__dirname, 'logo.png'),
        frame: false,
        alwaysOnTop: true
    });
    //load html into window
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'mainWindow.html'),
        protocol: 'file:',
        slashes: true
    }));
    mainWindow.on('closed', function () {
        mainWindow = null
    });
    mainWindow.show();
});