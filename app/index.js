'use strict';
const electron = require('electron');

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let indexFile = `${__dirname}/../public/index.html`;

let mainWindow;

function onClosed() {
	mainWindow = null;
}

function createMainWindow() {
	const win = new BrowserWindow({
		width: 800,
		height: 500
	});

	win.loadURL(`file:${indexFile}`);

	win.on('closed', onClosed);

	return win;
}

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('activate-with-no-open-windows', () => {
	if (!mainWindow) {
		mainWindow = createMainWindow();
	}
});

app.on('ready', () => {
	mainWindow = createMainWindow();
});
