import {app, BrowserWindow} from 'electron'

class App {
	constructor (publicPath) {
		this.publicPath = publicPath;
		this.mainWindow = null;
		this.setAppListeners();
	}
	setAppListeners () {
		app.on('window-all-closed', () => { if (process.platform !== 'darwin') app.quit() });
		app.on('activate-with-no-open-windows', () => { if (!this.mainWindow) this.mainWindow = this.createMainWindow() });
		app.on('ready', () => this.mainWindow = this.createMainWindow());
	}
	createMainWindow () {
		const win = new BrowserWindow({
			width: 800,
			height: 500
		});
		win.loadURL(`file:${this.publicPath + '/index.html'}`);
		win.on('closed', this.onClosed.bind(this));
		return win;
	}
	onClosed () {
		this.mainWindow = null;
	}
}

export default App
